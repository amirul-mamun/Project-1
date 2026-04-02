let mouse = document.querySelector('.mouse')
let main = document.querySelector('.main')

main.addEventListener('mousemove', (dets) =>{
   mouse.style.left = dets.x + 'px'
   mouse.style.top = dets.y + 'px'
   
})
