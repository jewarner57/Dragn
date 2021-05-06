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


## Creating a Drag and Drop Element
Add "dragn-drop" to the element's class list to make a drag and drop element.
<br>
Then, in the data-dragn-dropon attribute, add the class name of the element(s) you want to drop into.
``` html
<div class="dragn-drag" data-dragn-dropon='mylist' ></div>

<div class="mylist"></div>
```

* Add visual example gif