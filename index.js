const draggableElems = document.querySelectorAll(".dragn-drag")

let mouseX = ""
let mouseY = ""

draggableElems.forEach((elem) => {
  elem.addEventListener("mousedown", startDrag)
  elem.addEventListener("touchstart", startDrag)

  elem.addEventListener("mouseup", endDrag)
  elem.addEventListener("touchend", endDrag)

  // End the drag if the mouse leaves the div
  elem.addEventListener("mouseleave", endDrag)

  elem.addEventListener('mousemove', dragMoved)
  elem.addEventListener('touchmove', touchMoved)
})

function startDrag(event) {
  event.target.style.boxShadow = '4px 4px 4px 1px rgba(0, 0, 0, 0.2)'
  event.target.style.position = 'absolute'

  // Set element as being currently dragged
  event.target.dataset.isnowdragn = 'true'

  // Set element's default z-index
  event.target.dataset.defaultzindex = event.target.style.zIndex
  // Raise the element's z-index
  event.target.style.zIndex = 1000
}

function dragMoved(event) {
  // If the element is currently being dragged
  if (event.target.dataset.isnowdragn === 'true') {
    // Get elem height and width
    let width = event.target.offsetWidth
    let height = event.target.offsetHeight

    // Get current mouse position
    let mouseX = event.clientX
    let mouseY = event.clientY

    // Move the element
    event.target.style.top = `${mouseY - width / 2}px`
    event.target.style.left = `${mouseX - height / 2}px`
  }
}

function touchMoved(event) {
  // If the element is currently being dragged
  if (event.target.dataset.isnowdragn === 'true') {
    // Get elem height and width
    let width = event.changedTouches[0].target.offsetWidth
    let height = event.changedTouches[0].target.offsetHeight

    // Get current touch position
    let touchX = event.changedTouches[0].clientX
    let touchY = event.changedTouches[0].clientY

    // Move the element
    event.target.style.top = `${touchY - width / 2}px`
    event.target.style.left = `${touchX - height / 2}px`
  }
}

function endDrag(event) {
  // remove shadow
  event.target.style.boxShadow = 'None'

  // Set element as not being currently dragged
  event.target.dataset.isnowdragn = 'false'

  // Reset the elem's z-index to it's default value
  event.target.style.zIndex = event.target.dataset.defaultzindex
}