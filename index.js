document.addEventListener('touchstart', handleTouchStart, false)
document.addEventListener('touchmove', handleTouchMove, false)

let x = null
let y = null

function handleTouchStart (event) {
  const firstTouch = event.touches[0]
  console.log(firstTouch)
  x = firstTouch.clientX
}

function handleTouchMove (event) {
  let x2 = event.touches[0].clientX
  let xDiff = x2 - x
  if (xDiff > 0) {
    window.scrollBy(0,50)
    console.log('right')
  } else {
    console.log('left')
  }
}

function animation () {
  window.scrollBy(0,50)
  let img1 = document.getElementById('layer_4')
  console.log('slam')
  let position = 228
  let height = 127
  let flag = false
  let id = setInterval(frame, 75)
  function frame () {
    if(position === 245){
      flag = true
    }
    if (flag === true) {
      position--
      height++;
      img1.style.width = position + 'px'
    }
   if(position=== 228){
     flag = false
   }
    if (flag === false) {
      position++
      height--
      img1.style.height = height + 'px'
      img1.style.width = position + 'px'
    }
  }
}
