import '../styles/index.scss';
import Preloader from "../blocks/preloader/preloader";
import MessagesSlider from "../blocks/messages-slider/messages-slider";

(function () {
  class Constructor {
    constructor() {
      window.addEventListener('load', this.load.bind(this));
    }

    load() {
      this.logics();
    }

    logics() {
      new Preloader();
      new MessagesSlider();
    }
  }

  new Constructor();
})();
