import '../styles/index.scss';
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
      new Info();
    }
  }

  new Constructor();
})();
