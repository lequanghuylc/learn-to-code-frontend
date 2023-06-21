class MainHeading extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.shadow.innerHTML = `
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
          <h1>Hello world</h1>
        </div>
      `;
    }
  }
  customElements.define("section-1", MainHeading);
  