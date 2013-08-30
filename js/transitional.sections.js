﻿(function ($) {
    $.fn.transSections = function (options) {
        var settings = {
            width: null,
            height: null,
            sectionItemsClass: '.sectionItem',
            sectionContentClass: '.sectionContent',
            validate: false
        }

        var options = $.extend(settings, options);
        var height = options.height;
        var width = options.width;
        var $selector = $(this).selector;
        var $sectionItemsClass = $(options.sectionItemsClass).selector;
        var $sectionContentClass = $(options.sectionContentClass).selector;
        var $initialTab = $($sectionItemsClass + ":first");
        var $previousTab = $initialTab;
        var isValidated = options.validate;

        $(document).ready(function () {
            init();
        });

        function init() {
            $($selector).css({ height: height, width: width });
            $($initialTab).addClass('active');
            $(($initialTab.attr('href'))).show().animate({ left: '0px', opacity: 1 }, 700, "easeOutQuart");
            $($selector).find($sectionItemsClass).each(function (index) {              
                $(this).bind({
                    click: function (e) {
                        e.preventDefault();
                        if (!$(this).hasClass('active')) {
                            $($sectionItemsClass).removeClass('active');
                            $(this).addClass('active');
                            $($sectionContentClass).hide().removeAttr('style');
                            var childContent = $($(this).attr('href'));                 
                            $(childContent).show().animate({ left: '0px', opacity: 1 }, 700, "easeOutQuart");
                            if (isValidated) {
                                performValidation();
                            }
                            $previousTab = $(this);
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
            $($($previousTab.attr('href'))).find('[data-val="true"]').each(function (index) {
                if (!$previousTab.parents('form').validate().element(this)) {
                    $previousTab.addClass('error');
                    invalid = true;
                }
                else {
                    $previousTab.removeClass('error');
                }
            });
        };
    };
})(jQuery);