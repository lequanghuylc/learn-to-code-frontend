customElements.define("clone-me-short", class extends CoreElement {
  constructor() {
    super();
  }

  state = {
    width: 0
  }

  onWindowResize = () => {
    console.log('on window resize', window.innerWidth);
    this.setState({ width: window.innerWidth });
  }

  renderContainerCSS = () => {
    return `
      width: 100p%;
      height: 100px;
      background-color: #${Math.floor(Math.random()*16777215).toString(16)}; // random
    `;
  }

  renderStyle = () => {
    return `
      <style>
        slot {
          
        }
      </style>
    `;
  }

  renderHTML = () => {
    this.style.cssText = this.renderContainerCSS();
    const html = `
      ${this.renderStyle()}
      <slot></slot>
      ${this.state.width}
    `;
    this.shadow.innerHTML = html;
  }
});
  