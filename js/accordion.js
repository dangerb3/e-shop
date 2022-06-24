class ItcAccordion {
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
      const elHeader = e.target.closest(".accordion__header");
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector(".accordion__item_show");
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement
            ? elOpenItem.classList.toggle("accordion__item_show")
            : null;
        }
      }
      elHeader.parentElement.classList.toggle("accordion__item_show");
    });
  }
  addEventListener() {
    this._el.addEventListener("click", (e) => {
      const elHeader = e.target.closest(".orders-accordion__header");
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector(
          ".orders-accordion__item_show"
        );
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement
            ? elOpenItem.classList.toggle("orders-accordion__item_show")
            : null;
        }
      }
      elHeader.parentElement.classList.toggle("orders-accordion__item_show");
    });
  }
}

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
      const elHeader = e.target.closest(".orders-accordion__header");
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector(
          ".orders-accordion__item_show"
        );
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement
            ? elOpenItem.classList.toggle("orders-accordion__item_show")
            : null;
        }
      }
      elHeader.parentElement.classList.toggle("orders-accordion__item_show");
    });
  }
}

new ItcAccordion(document.querySelector(".accordion"), {
  alwaysOpen: false,
});

new ItcAccordion2(document.querySelector(".orders-accordion"), {
  alwaysOpen: false,
});
