transitional-sections
=====================

###<a href="http://zombiehugs.github.io/transitional-sections/">Demo</a>

Transitional Sections modeled after the transitional interfaces like Modern. Developed as a requirement for a project I am currently working on.

Created: 08/30/13

Author: John Gerdsen

##Setup & Usage
Be sure to include jQuery and jQuery UI, it is not currently in pure JavaScript.

###Basic Structure

```html
<div class="transSections">
 <div id="sectionItemsContainer">
   <a class="sectionItem" href="#item1">Section 1</a>
   <a class="sectionItem" href="#item2">Section 2</a>
   <a class="sectionItem" href="#item3">Section 3</a>
   <a class="sectionItem" href="#item4">Section 4</a>
 </div>
 <div class="sectionContentContainer">
    <div class="sectionPanel">
      <ul class="sectionContent" id="item1">
        <li> <!-- Content Here --> </li>
      </ul>
      <ul class="sectionContent" id="item2">
        <li> <!-- Content Here --> </li>
      </ul>
      <ul class="sectionContent" id="item3">
        <li> <!-- Content Here --> </li>
      </ul>
      <ul class="sectionContent" id="item4">
        <li> <!-- Content Here --> </li>
      </ul>
    </div>
  </div>
</div>
```
###Javascript call

```javascript
    var settings = {
        width: 650,
        height: 350,
        sectionItemsContainerId: '#sectionItemsContainer',
        sectionItemsClass: '.sectionItem',
        sectionContentClass: '.sectionContent',
        validate: false,
        orientation: 'horz'
    }
        
    $(function () {
        $('.transSections').transSections(settings);
    });
```

###Extendable Settings

| Behavior      | Values              | Description                                                                                                        |
| ------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `sectionItemsClass` | `any selector`   | class selector of the section headings. |
| `sectionContentClass` | `any selector`   | class selector of the section content(s). |
| `validate`    | `true` or `false`   | `true` if form fields are present in the section the control will, validate their values upon exiting. **currently only supports [data-val='true'] selector used in unobtrusive validation. would like to extend this to user other forms of validation. |
| `height`    | `positive values`   | height of the entire control |
| `width`     | `positive values` | width of the entire control      |
| `orientation`     | `vert` or `horz` | changes the way the section headings are layed out      |
