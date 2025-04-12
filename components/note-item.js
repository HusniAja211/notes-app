class NoteItem extends HTMLElement {
    static get observedAttributes() {
      return ['title', 'body'];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    attributeChangedCallback() {
      this.render();
    }
  
    render() {
      const title = this.getAttribute('title') || '';
      const body = this.getAttribute('body') || '';
  
      this.shadowRoot.innerHTML = `
        <style>
          .note {
            background: white;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          }
          h3 {
            margin: 0 0 0.5rem 0;
            font-size: 1.2rem;
          }
          p {
            margin: 0;
            font-size: 1rem;
            color: #555;
          }
        </style>
        <div class="note">
          <h3>${title}</h3>
          <p>${body}</p>
        </div>
      `;
    }
  }
  
  customElements.define('note-item', NoteItem);
  