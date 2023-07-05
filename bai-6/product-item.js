customElements.define("product-item", class extends CoreElement {
    constructor() {
      super();
    }

    static get observedAttributes() {
        return ['img'];
    }
  
    state = {
      width: window.innerWidth,
    }
  
    onWindowResize = () => {
      if (window.innerWidth <= 480) {
        this.style.width = 'calc( 50% - 20px )';
      } else if (window.innerWidth <= 768) {
        this.style.width = 'calc( 33% - 20px )';
      } else {
        this.style.width = 'calc( 33% - 20px )';
      }
    }
  
    renderContainerCSS = () => {
      return `
        margin: 10px;
      `;
    }
  
    renderStyle = () => {
      return `
        <style>
            ratio-column img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            h3 {
                height: 30px;
                overflow: hidden;
                margin: 0px;
                margin-bottom: 10px;
                margin-top: 10px;
            }
            p {
                height: 100px;
                overflow-y: scroll;
                margin: 0px;
            }
        </style>
      `;
    }

    attr(name) {
        return this.getAttribute(name);
    }
  
    renderHTML = () => {
      this.style.cssText = this.renderContainerCSS();
      if (window.innerWidth <= 480) {
        this.style.width = 'calc( 50% - 20px )';
      } else if (window.innerWidth <= 768) {
        this.style.width = 'calc( 33% - 20px )';
      } else {
        this.style.width = 'calc( 33% - 20px )';
      }
      let image = this.attr('img');
      if (!image) {
        image = 'https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png';
      }
      let description = this.attr('description');
      if (!description) {
        description = 'Content is being updated...'
      }
      const html = `
        ${this.renderStyle()}
        <ratio-column ratio="4/3">
            <img src="${image}" />
        </ratio-column>
        <h3>${this.title}</h3>
        <p>${description}</p>
      `;
      this.shadow.innerHTML = html;
    }
  });
    