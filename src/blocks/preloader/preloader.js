import Info from "../info/info";

class Preloader {
  constructor() {
    this.component = document.querySelector("[data-preloader]");
    this.icon = this.component.querySelector(".preloader__icon");

    setTimeout(() => {
      if (!this.component.classList.contains("preloader_loading")) {
        this.component.classList.add("preloader_loading");

        if (this.icon) {
          setTimeout(() => {
            this.icon.classList.add("preloader__icon_animation");

            setTimeout(() => {
              this.component.classList.add("preloader_hide");

              setTimeout(() => {
                this.component.style.display = "none";

                new Info();
              }, 1000);
            }, 1000);
          }, 4000);
        }
      }
    }, 1000);
  }
}

export default Preloader;