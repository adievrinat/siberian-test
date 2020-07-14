import '../styles/index.scss';
import MessagesSlider from "../blocks/messages-slider/messages-slider";
import Info from "../blocks/info/info";

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
      new Info();
    }
  }

  new Constructor();
})();
