import Swiper from "swiper/dist/js/swiper.min";

class MessagesSlider {
  constructor() {
    if (typeof MessagesSlider.instance === "object") {
      return MessagesSlider.instance;
    }

    this.component = document.querySelectorAll("[data-messages-slider]");

    this.component.forEach((element) => {
      let slider = element.querySelector(".swiper-container");
      this.sliderInit(element, slider);
    });

    MessagesSlider.instance = this;
    return this;
  }

  sliderInit(container, element) {
    let slides = element.querySelectorAll(".swiper-slide");

    let slider = new Swiper(element, {
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
        init: function () {
          if (window.innerWidth > 767) this.autoplay.stop();

          setTimeout(() => {
            !container.classList.contains("messages-slider_init") ? container.classList.add("messages-slider_init") : "";

            if (window.innerWidth > 767) {
              setTimeout(() => {
                this.autoplay.start();
              }, 2000);
            }
          }, 300);
        },
        slideChange: function () {
          if (this.activeIndex === slides.length - 1) {
            setTimeout(() => {
              this.slideTo(0);

              this.autoplay.start();
            }, 2500);
          }
        }
      }
    });

    // if (window.innerWidth > 767) {
    //   slider.autoplay.stop();
    //
    //   setTimeout(() => {
    //     slider.autoplay.start();
    //   }, 2000);
    // }
  }
}

export default MessagesSlider;