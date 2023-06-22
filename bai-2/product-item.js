class ProductOne extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
      return ['text'];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      this.renderHTML();
    }

    connectedCallback() {
      this.renderHTML();
    }

    renderHTML() {
      const html = `
      <style>
        div {
          display: flex;
          flex-direction: column;
          position: relative;
          flex-shrink: 0;
          box-sizing: border-box;
        }

        div {
          width: 100%;
          background-color: red;
          height: 200px;
        }

        span {
          background-color: yellow;
          
        }

      </style>
      <div><span>Hello</span></div>
      `
      this.shadow.innerHTML = html;
    }
  
  }
  customElements.define("product-item", ProductOne);
  