(function ($) {
    $.fn.TransSections = function (options) {
        var settings = {
            width: null,
            height: null,
            sectionItemsContainerId: '#sectionItemsContainer',
            sectionItemsClass: '.sectionItem',
            sectionContentClass: '.sectionContent',
            validate: false,
            orientation: 'horz'
        }

        var options = $.extend(settings, options);
        var thisObj = this;

        $(document).ready(function () {
            init();
        });

        function init(){
            thisObj.height = options.height;
            thisObj.width = options.width;
            thisObj.isValidated = options.validate;
            thisObj.orientation = options.orientation;
            thisObj.$sectionItemsContainerId = $(options.sectionItemsContainerId).selector;
            thisObj.$sectionItemsClass = $(options.sectionItemsClass).selector;
            thisObj.$sectionContentClass = $(options.sectionContentClass).selector;
            thisObj.$initialTab = thisObj.find(thisObj.$sectionItemsClass + ":first");
            thisObj.$previousTab = thisObj.$initialTab;
            applyUI();
        }

        function applyUI(){
            thisObj.css({ height: thisObj.height, width: thisObj.width });
            thisObj.addClass(thisObj.orientation);
            $(thisObj.$initialTab).addClass('active');
            $((thisObj.$initialTab.attr('href'))).show().animate({ left: '0px', opacity: 1 }, 700, "easeOutQuart");
            thisObj.find(thisObj.$sectionItemsClass).each(function (index) {
                $(this).bind({
                    click: function (e) {
                        e.preventDefault();
                        if (!$(this).hasClass('active')) {
                            thisObj.find(thisObj.$sectionItemsClass).removeClass('active');
                            $(this).addClass('active');
                            thisObj.find(thisObj.$sectionContentClass).hide().removeAttr('style');
                            var childContent = $($(this).attr('href'));
                            $(childContent).show().animate({ left: '0px', opacity: 1 }, 700, "easeOutQuart");
                            if (thisObj.isValidated) {
                                performValidation();
                            }
                            thisObj.$previousTab = $(this);
                        }
                    },
                    mouseenter: function () {
                        $(this).addClass('hover');
                    },
                    mouseleave: function () {
                        $(this).removeClass('hover');
                    }
                });
            });
        };

        function performValidation() {
            var invalid = false;
            $(thisObj.$previousTab.attr('href')).find('[data-val="true"]').each(function (index) {
                if (!thisObj.$previousTab.parents('form').validate().element(this)) {
                    console.log('error');
                    thisObj.$previousTab.addClass('error');
                    invalid = true;
                }
            });
            if (!invalid) {
                thisObj.$previousTab.removeClass('error');
            }
        };

    };
})(jQuery);