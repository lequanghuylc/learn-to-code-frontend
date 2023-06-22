class MainHeading extends HTMLElement {
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
      const text = this.getAttribute('text');
      const thumbnail = this.getAttribute('thumbnail');
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
          height: 100vh;
          justify-content: center;
          align-items: center;
        }
      </style>
      <div>
        <h1>${text}</h1>
        <img src="${thumbnail}" />
      </div>
      `
      this.shadow.innerHTML = html;
    }
  
  }
  customElements.define("section-1", MainHeading);
  