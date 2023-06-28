class ProductOne extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
      return ['abc', 'text', 'xyz'];
    }

    get abc() {
      return this.getAttribute('abc');
    }

    attr(name) {
      return this.getAttribute(name);
    }

    demo(a, b) {
      return a + b
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      this.renderHTML();
    }

    connectedCallback() {
      this.renderHTML();
    }

    renderStyle() {
      return `
        <style>
          .top {
            width: calc( 33% - 20px );
            margin: 10px;
          }
          div {
            display: flex;
            flex-direction: column;
            position: relative;
            flex-shrink: 0;
            box-sizing: border-box;
          }

          div {
            width: 100%;
            height: 200px;

          }

          span {
          }

        </style>
      `
    }

    renderTitle() {
      return `
        <span>Hello ${this.attr('abc')}</span>
      `;
    }

    renderHTML() {
      this.style.width = 'calc( 33% - 20px )';
      this.style.margin = '10px';
      const html = `
      ${this.renderStyle()}
      <div>
        ${this.renderTitle()}
        ${this.attr('name')}
        <p>Takfmalkfnladn </p>
      </div>
      `
      this.shadow.innerHTML = html;

    }
  
  }
  customElements.define("product-item", ProductOne);
  