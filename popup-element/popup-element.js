customElements.define("popup-element", class extends CoreElement {
    constructor() {
      super();
    }
  
    state = {
      
    }
  
    onWindowResize = () => {
    //   this.setState({ width: window.innerWidth });
    }
  
    renderContainerCSS = () => {
      return `
        
      `;
    }
  
    renderStyle = () => {
      return `
        <style>
          .container {
            position: fixed;
            display: none;
            top: 0; left: 0; right: 0; bottom: 0;
            background-color: rgba(0,0,0,0.4);
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .content {
            width: 80%;
            height: 80%;
            border-radius: 10px;
            background-color: white;
          }
          h1 {
            text-align: center;
          }
          .middle {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        </style>
      `;
    }

    showPopup(message) {
      const container = this.shadowRoot.querySelector('.container');
      container.style.display = 'flex';
      if (message) {
        const h1 = this.shadowRoot.querySelector('h1');
        h1.innerHTML = message;
      }
    }

    closePopup() {
      const container = this.shadowRoot.querySelector('.container');
      container.style.display = 'none';
    }
  
    // CACH 2
    renderHTML = () => {
      this.style.cssText = this.renderContainerCSS();
      const heading = this.state.message ? `<h1>${this.state.message}</h1>` : '';
      const html = `
        ${this.renderStyle()}
        <div class="container">
          <div class="content">
            <h1></h1>
            <div class="middle">
              <button>Close</button>
            </div>
          </div>
        </div>
      `;
      this.shadow.innerHTML = html;
      

      const container = this.shadowRoot.querySelector('.container');
      container.onclick = function() {
        container.style.display = 'none';
      }

      const content = this.shadowRoot.querySelector('.content');
      content.onclick = function(e) {
        e.stopPropagation();
      }

      const close_button = this.shadowRoot.querySelector('button');
      close_button.onclick = function(e) {
        container.style.display = 'none';
      }
    }
  });
    