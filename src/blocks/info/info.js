import Swiper from "../../../node_modules/swiper/dist/js/swiper.min";

class Info {
  constructor() {
    if (typeof Info.instance === "object") {
      return Info.instance;
    }

    this.component = document.querySelector("[data-info]");
    this.slider = this.component.querySelector("[data-info-slider]");
    this.slides = this.slider.querySelectorAll(".swiper-slide");

    this.sliderInit();

    Info.instance = this;
    return this;
  }

  sliderInit() {
    this.swiper = new Swiper(this.slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 0,
      autoplayDisableOnInteraction: true,
      virtualTranslate: true,
      touchRatio: 0,
      autoplay: {
        delay: 2500
      },
      effect: 'fade',
      observer: true,
      observeParents: true,
      on: {
        slideChange: function () {
          if (this.activeIndex === this.slides.length - 1) {
            setTimeout(() => {
              this.slideTo(0);
              this.autoplay.start();
            }, 2500);
          }
        }
      }
    });
  }
}

export default Info;