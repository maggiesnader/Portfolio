gsap.fromTo('.Intro', { autoAlpha: 0},
    {duration: 2, autoAlpha:1}
);

// Remove the transition class
const detail = document.querySelectorAll('.detail');
detail.classList.remove('detail-transition');
//Create the observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            detail.classList.add('detail-transition');
            return;
        }
        detail.classList.remove('detail-transition');
    });
});
observer.observe(document.querySelectorAll('.detail-wrapper'));



////const projectDetail = document.querySelector('.projectDetail');
//projectDetail.classList.remove('projectDetail-transition');
//const observer = new IntersectionObserver(entries => {
    //entries.forEach(entry => {
        //if(entry.isIntersecting) {
            //projectDetail.classList.add('projectDetail-transition');
            //return;
        //}
        //projectDetail.classList.remove('projectDetail-transition');
    //});
//});
//observer.observe(document.querySelector('.projectDetail-wrapper'));



//gsap.registerPlugin(ScrollTrigger);
//gsap.fromTo('.description', { 
  //  scrollTrigger: {
    //    trigger: ".description",
      //  start: "top 70%",
        //end: "top 30%",
        //scrub: true,
        //toggleActions: "play reverse play reverse",
    //},
    //autoAlpha: 0},
    //{duration: 2, autoAlpha:1}
//);


