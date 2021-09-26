document.addEventListener('touchstart', handleTouchStart, false)
document.addEventListener('touchmove', handleTouchMove, false)
let buttpervaya = document.querySelector('.pervaya')
let buttpervayastr = document.querySelector('.pervayastr')
let pervaya2 = document.querySelector('.pervaya2')
let button = document.querySelector('.button')
let button1 = document.querySelector('.button1')

let home = document.querySelector('#home')
let what = document.querySelector('#what')
let tretiy = document.querySelector('#tretiy')
let x = null

function handleTouchStart (event) {
  const firstTouch = event.touches[0]
  console.log(firstTouch)
  x = firstTouch.clientX
}

function handleTouchMove (event) {
  let x2 = event.touches[0].clientX
  let xDiff = x2 - x
  if (xDiff > 100) {
    if (x > 1000) {
      animation(home)
    }
    if (x > 2000) {
      animation(what)
    }
    console.log('right')
  } else {
    if (x < 1000) {
      animation(what)
    }
    if (x > 1000) {
      animation(tretiy)
    }
    console.log('left')
  }
}

buttpervaya.addEventListener('click', () => {
  animation(what)
})
button.addEventListener('click', () => {
  animation(tretiy)
})
buttpervayastr.addEventListener('click', () => {
  animation(what)
})
button1.addEventListener('click', () => {
  animation(home)
})
pervaya2.addEventListener('click', () => {
  animation(home)
})
function animation (element) {
  window.scroll({
    left: element.offsetLeft,
    top: 0,
    behavior: 'smooth'
  })
  // let img1 = document.getElementById('layer_4')
  // console.log('slam')
  // let position = 228
  // let height = 127
  // let flag = false
  // let id = setInterval(frame, 75)
  // function frame () {
  //   if(position === 245){
  //     flag = true
  //   }
  //   if (flag === true) {
  //     position--
  //     height++;
  //     img1.style.width = position + 'px'
  //   }
  //  if(position=== 228){
  //    flag = false
  //  }
  //   if (flag === false) {
  //     position++
  //     height--
  //     img1.style.height = height + 'px'
  //     img1.style.width = position + 'px'
  //   }
  // }
}
