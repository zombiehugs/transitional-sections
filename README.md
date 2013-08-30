transitional-sections
=====================

Transitional Sections modeled after the Zune interface. Developed as a requirement for a project I am currently working on.

Created: 08/30/13

Author: John Gerdsen

Dependent upon jQuery and jQuery UI, make sure to include.

Extendable Settings (Defaults Shown):

        var settings = {
            width: null,
            height: null,
            sectionItemsClass: '.sectionItem',
            sectionContentClass: '.sectionContent',
            validate: false
        }

sectionItemsClass - class selector of the section headings.

sectionContentClass - class selector of the section content(s)

validate - if form fields are present in the section the control will validate their values upon exiting.

**currently only supports [data-val='true'] selector used in unobtrusive validation. would liket to extend this to user other forms of validation.
