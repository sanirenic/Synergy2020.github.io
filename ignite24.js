function showDay1() {
    const content1 = document.getElementById("day1-schedule");
    const content2 = document.getElementById("day2-schedule");   
    content2.classList.remove("show");
    content2.classList.add("hide");
    content1.classList.add("show");
}
function showDay2() { 
    const content2 = document.getElementById("day2-schedule");
    const content1 = document.getElementById("day1-schedule");     
    content2.classList.remove("hide");
    content1.classList.remove("show");
    content1.classList.add("hide");
    content2.classList.add("show");
}


(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();
  

var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    mousewheel: {
      invert: false
    },
    // autoHeight: true,
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true
    }
  });