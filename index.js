function animation () {
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
