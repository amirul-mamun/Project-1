const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circleMouse(){
  window.addEventListener('mousemove', function(dets){
    this.document.querySelector('.minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
  })
}

circleMouse()



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

firstPageAnim()