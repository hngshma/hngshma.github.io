let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  ////.to(".fan", 10, { y: -1000})
  .to(".moving", 10, { y: -1200 }, "-=10")
  .fromTo(".newback", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
