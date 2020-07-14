class Info {
  constructor() {
    this.component = document.querySelector("[data-info]");
    this.title = this.component.querySelector("[data-title]");
    this.loadingCls = "info_loading";

    if (window.innerWidth > 767) {
      !this.component.classList.contains(this.loadingCls) ? this.component.classList.add(this.loadingCls) : '';
      this.typingText(this.title);
    }
  }

  typingText(element) {
    let text = element.getAttribute('data-title-text');
    let textEntry = element.querySelector("[data-title-text-entry]");
    let symbols = text.split("");
    let length = symbols.length;
    let path = 0;

    this.addSymbol(length, path, textEntry, symbols);
  }

  addSymbol(length, path, textEntry, symbols) {
    if (length > path) {
      textEntry.innerHTML += symbols[path];
      path = path + 1;

      setTimeout(() => {
        this.addSymbol(length, path, textEntry, symbols);
      }, 70);
    }
  };
}

export default Info;