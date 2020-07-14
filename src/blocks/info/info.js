import Swiper from "../../../node_modules/swiper/dist/js/swiper.min";

class Info {
  constructor() {
    if (typeof Info.instance === "object") {
      return Info.instance;
    }

    this.component = document.querySelector("[data-info]");
    this.slider = this.component.querySelector("[data-info-slider]");


    this.sliderInit();

    Info.instance = this;
    return this;
  }

  sliderInit() {
    this.swiper = new Swiper(this.slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true
    });
  }
}

export default Info;