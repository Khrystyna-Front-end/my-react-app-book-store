function makeSlideShow(slidesId) {
  //   let slides = document.getElementById(slidesId);
  let slidesInner = document.querySelector(".slides-inner");
  let images = document.querySelectorAll("#img");
  //   console.log(images);
  //   console.log(images.length);
  let index = 0;

  setInterval(function () {
    index += 1;
    if (index === images.length) {
      index = 0;
    }
    console.log(index);
    slidesInner.style.transform = `translate3d(${index * -440}px, 0, 0)`;
  }, 2000);
}
makeSlideShow("slides");
