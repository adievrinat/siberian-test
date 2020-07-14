import '../styles/index.scss';
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
      new MessagesSlider();
    }
  }

  new Constructor();
})();
