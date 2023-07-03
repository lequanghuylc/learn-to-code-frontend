class CoreElement extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
  
    state = { width: 0 };
    setState = (newValue) => {
      this.state = Object.assign(this.state, newValue);
      this.renderHTML();
    }
  
    attributeChangedCallback(attrName, oldVal, newVal) {
      this.renderHTML();
    }
  
    connectedCallback() {
      this.renderHTML();
      window.addEventListener('resize', this.onWindowResize);
    }
  
    disconnectedCallback() {
      window.removeEventListener('resize', this.onWindowResize);
    }
  }