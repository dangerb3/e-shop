class ItcAccordion2 {
  constructor(target, config) {
    this._el =
      typeof target === "string" ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true,
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }
  addEventListener() {
    this._el.addEventListener("click", (e) => {
      const elHeader = e.target.closest(".delivery-points__header");
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector(
          ".delivery-points__item_show"
        );
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement
            ? elOpenItem.classList.toggle("delivery-points__item_show")
            : null;
        }
      }
      elHeader.parentElement.classList.toggle("delivery-points__item_show");
    });
  }
}
new ItcAccordion2(document.querySelector(".delivery-points"), {
  alwaysOpen: false,
});
