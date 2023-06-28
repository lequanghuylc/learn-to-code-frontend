class MainContainer extends HTMLElement {
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

    xyz = 'xyyz'

    renderHTML() {
      const list = [1,2,3,4,5,6];
      // const listHTML = [
      //   '<span>1</span>',
      //   '<span>2</span>',
      //   '<span>3</span>',
      //   '<span>4</span>',
      //   '<span>5</span>',
      //   '<span>6</span>',
      // ];
      // const joined = `
      //   <span>1</span>
      //   <span>2</span>
      //   <span>3</span>
      //   <span>4</span>
      //   <span>5</span>
      //   <span>6</span>
      // `;

      // const listHTML = list.map((item) => {
      //   return `<span>${item}</span>`;
      // })

      const listHTML = list.map((item) => {
        return `
          <Product1
            logo="${item.logo}"
            content_logo="${item.content_logo}"
            image="${item.image}"
            time="${item.time}"
            content="${item.content}"
            link="${item.link}"
            number_heart="${item.number_heart}"
            number_comment="${item.number_comment}"
            number_upload="${item.number_upload}"
          ></Product1>
        `
      });
      const joined = listHTML.join('\n');
      console.log(joined);

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
          width: 100vw;
          height: 500px;
          align-items: center;
        }
        slot {
          width: 100%;
          background-color: pink;
          display: flex;
          flex-wrap: wrap;
          max-width: 1024px;
          justify-content: center;
          align-items: center;
        }
      </style>
      <div>
        <slot></slot>
      </div>
      `
      this.shadow.innerHTML = html;
    }
  
  }
  customElements.define("main-container", MainContainer);
  