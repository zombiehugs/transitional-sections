(function ($) {
    $.fn.TransSections = function (options) {
        var settings = {
            width: null,
            height: null,
            sectionItemsContainerId: '.sectionItemsContainer',
            sectionContentContainerId: '.sectionContentContainer',
            sectionItemsClass: '.sectionItem',
            sectionContentClass: '.sectionContent',
            sectionItemsPanel: '.sectionPanel',
            validate: false,
            orientation: 'horz',
            formSelector: null,
            animationSpeed: 700
        };

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
            thisObj.$sectionItemsPanel = $(options.sectionItemsPanel).selector;
            thisObj.$initialTab = thisObj.find(thisObj.$sectionItemsClass + ":first");
            thisObj.$previousTab = thisObj.$initialTab;
            thisObj.$tabCollection = thisObj.children(thisObj.$sectionItemsContainerId).children(thisObj.$sectionItemsClass);
            //Hacky
            thisObj.$contentCollection = thisObj.children().children(thisObj.$sectionItemsPanel).children(thisObj.$sectionContentClass);
            applyUI();
        }
		
		function applyUI(){
            thisObj.css({ height: thisObj.height, width: thisObj.width });
            ((thisObj.orientation == 'horz') ? $(thisObj.$sectionItemsPanel).css({ height: (thisObj.height - $(thisObj.$sectionItemsContainerId).height()) }) : $(thisObj.$sectionItemsPanel).css({ height: (thisObj.height)}));
			thisObj.addClass(thisObj.orientation);
            $(thisObj.$initialTab).addClass('active');
            $((thisObj.$initialTab.attr('href'))).show().animate({ left: '0px', opacity: 1 }, thisObj.animationSpeed, "easeOutQuart");
            thisObj.$tabCollection.each(function (index) {
                $(this).bind({
                    click: function (e) {
                        e.preventDefault();
                        if (!$(this).hasClass('active')) {
                            thisObj.$tabCollection.removeClass('active');
                            $(this).addClass('active');
							thisObj.$contentCollection.hide().removeAttr('style');
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
			if (options.formSelector !== null) {
                thisObj.$formSelector = $(options.formSelector);
                $(document).bind('validationHasErrors', function () {
                    performValidation(true);
                });
            }
        };

        function performValidation(blanket) {
            var invalid = false;
            if (!blanket) {
                //Unobtrusive method
                $(thisObj.$previousTab.attr('href')).find('[data-val="true"]:not(":disabled")').each(function (index) {
                    if (!thisObj.$previousTab.parents('form').validate().element(this)) {
                        console.log('error');
                        thisObj.$previousTab.addClass('error');
                        invalid = true;
                    }
                });
                //Inline required
                $(thisObj.$previousTab.attr('href')).find('[required="required"]:not(":disabled")').each(function (index) {
                    if ($(this).val() == "") {
                        console.log('error');
                        thisObj.$previousTab.addClass('error');
                        invalid = true;
                    }
                });
                if (!invalid) {
                    thisObj.$previousTab.removeClass('error');
                }
            }
            else {
                //quickie but for toggle reasons I'm abandoning right now, would turn into just as slow once fleshed out
                //for (var i = 0; i < $.validator.unobtrusive.errorList.length; i++) {
                //    $(options.sectionItemsClass + "[href = '#" + $($.validator.unobtrusive.errorList[i].element).parents('UL.sectionContent').attr('id') + "']").addClass('error');
                //}
                thisObj.$tabCollection.each(function (index) {
                    var $self = $(this);
                    $.each($.validator.unobtrusive.errorList, function (index) {
                        var element = $(this.element);
                        if ($($self.attr('href')).find(element).length >= 1) {
                            $self.addClass('error');
                            invalid = true;
                        }
                    });
                    if (!invalid) {
                        $self.removeClass('error');
                    }
                });
            }
        };

    };
})(jQuery);