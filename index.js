const draggableElems = document.querySelectorAll(".dragn-drag")

let mouseX = ""
let mouseY = ""

draggableElems.forEach((elem) => {
  elem.addEventListener("mousedown", startDrag)

  elem.addEventListener("mouseup", endDrag)

  elem.addEventListener("mouseleave", endDrag)

  elem.addEventListener('mousemove', dragMoved)
})

function startDrag(event) {
  event.target.style.backgroundColor = 'green'
  event.target.style.position = 'absolute'
  event.target.dataset.isnowdragn = 'true'
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

function endDrag(event) {
  event.target.style.backgroundColor = 'red'
  event.target.dataset.isnowdragn = 'false'
}