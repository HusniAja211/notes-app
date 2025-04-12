class AppBar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            background-color: #4A90E2;
            color: white;
            padding: 1rem;
            font-size: 1.5rem;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          }
        </style>
        <div>Notes App</div>
      `;
    }
  }
  
  customElements.define('app-bar', AppBar);
  