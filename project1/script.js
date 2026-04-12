const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});


var timeout ;

function mouseScale(){
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

 window.addEventListener("mousemove", function(dets){
  this.clearTimeout(timeout)
  xscale =  gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev)
  yscale =  gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev)

  xprev = dets.clientX;
  yprev = dets.clientY;
  

  circleMouse(xscale, yscale)
  
  setTimeout(() => {
        document.querySelector('.minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`
  }, 100);
 })

}

function circleMouse(xscale, yscale){
  window.addEventListener('mousemove', function(dets){
    document.querySelector('.minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`
  })
}

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from(".nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".smoothElem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from(".herofoter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

mouseScale()
circleMouse()

firstPageAnim()

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: .5,
    });
  });

 elem.addEventListener('mousemove', function(dets){
   let diff = dets.clientY - elem.getBoundingClientRect().top
   diffrot = dets.clientX - rotate
   rotate = dets.clientX
   gsap.to(elem.querySelector('img'), {
    opacity : 1,
    ease: Power3,
    top: diff,
    left: dets.clientX,
    rotate: gsap.utils.clamp(-20, 20, diffrot)
   })
 })
});
