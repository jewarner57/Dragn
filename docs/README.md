# Dragn
Drag and drop built for elegant simplicity

## Getting Started
Dragn is avaliable for [download on npm](/)
``` bash
npm install dragn --save
```

## Creating a Draggable Element
Add "dragn-drag" to the element's class list to make a draggable element.
``` html
<div class="dragn-drag"></div>
```

* Add visual example gif

## Creating an Drag and Drop Element
Add "dragn-drop" to the element's class list to make a drag and drop element.
<br>
Then add the class name of the element(s) you want to drop into to the data-dragn-dropon attribute.
``` html
<div class="dragn-drag" data-dragn-dropon='list' ></div>

<div class="list"></div>
```

* Add visual example gif