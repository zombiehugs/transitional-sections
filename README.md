transitional-sections
=====================

###<a href="http://zombiehugs.github.io/transitional-sections/">Demo</a>

Transitional Sections modeled after the transitional interfaces like Modern. Developed as a requirement for a project I am currently working on.


##Setup & Usage
Be sure to include jQuery and jQuery UI, it is not currently in pure JavaScript.

###Basic Structure

```html
<div class="transSections" id="whateverYouWant">
 <div class="sectionItemsContainer">
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
        sectionItemsClass: '.sectionItem',
        sectionContentClass: '.sectionContent',
        validate: false,
        orientation: 'horz',
		animationSpeed: '700'
    }
        
    $(function () {
        $('#whateverYouWant').transSections(settings);
    });
```

###Extendable Settings

| Behavior      | Values              | Description                                                                                                        |
| ------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `sectionItemsClass` | `any selector`   | class selector of the section headings. |
| `sectionContentClass` | `any selector`   | class selector of the section content(s). |
| `validate`    | `true` or `false`   | `true` if form fields are present in the section the control will, validate their values upon exiting the section or clicking submit button, see `formSelector` |
| `height`    | `positive values`   | height of the entire control |
| `width`     | `positive values` | width of the entire control      |
| `orientation`     | `vert` or `horz` | changes the way the section headings are layed out      |
| `formSelector`     | `any selector`  | selector used to find form and its submit button to attach click handler for validation  |
| `validationType`     | `unobtrusive` or `null`  | specify which type of validation to perform on the sections
| `animationSpeed`     | any `int`  | specifies the duration of section transitions
