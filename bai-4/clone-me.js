customElements.define("clone-me", class extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.renderHTML();
  }

  connectedCallback() {
    this.renderHTML();
  }

  renderContainerCSS() {
    return `
      width: 100p%;
      height: 100px;
      background-color: #${Math.floor(Math.random()*16777215).toString(16)}; // random
    `;
  }

  renderStyle() {
    return `
      <style>
        slot {
          
        }
      </style>
    `;
  }

  renderHTML() {
    this.style.cssText = this.renderContainerCSS();
    const html = `
      ${this.renderStyle()}
      <slot></slot>
    `;
    this.shadow.innerHTML = html;
  }
});
  