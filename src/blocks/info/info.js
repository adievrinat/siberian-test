class Info {
  constructor() {
    this.component = document.querySelector("[data-info]");
    this.loadingCls = "info_loading";
    !this.component.classList.contains(this.loadingCls) ? this.component.classList.add(this.loadingCls) : '';
  }
}

export default Info;