class NoteFooter extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      const currentYear = new Date().getFullYear();
  
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            padding: 1rem;
            background-color: #4A90E2;
            text-align: center;
            font-size: 0.9rem;
            color: white;
            border-top: 1px solid #ccc;
          }
          span {
            font-weight: bold;
          }
        </style>
        <footer>
          &copy; <span>${currentYear}</span> Notes App - 
          <a href="https://github.com/HusniAja211" 
          target="_blank" 
          rel="noopener"
          style="text-decoration: none; color: white; font-weight: bold;">Husni Mubarak</a> 
          - Segala Hak Dilindungi 
        </footer>
      `;
    }
  }
  
  customElements.define("note-footer", NoteFooter);
  