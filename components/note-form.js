class NoteForm extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            background: white;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          }
          input, textarea {
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 1rem;
          }
          button {
            padding: 0.5rem 1rem;
            background: #4A90E2;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          button:hover {
            background: #357ABD;
          }
        </style>
        <form>
          <input type="text" name="title" placeholder="Judul Catatan" required />
          <textarea name="body" rows="4" placeholder="Isi Catatan" required></textarea>
          <button type="submit">Tambah Catatan</button>
        </form>
      `;
    }
  
    connectedCallback() {
      this.shadowRoot.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const title = this.shadowRoot.querySelector('input').value.trim();
        const body = this.shadowRoot.querySelector('textarea').value.trim();
        if (!title || !body) return;
        const event = new CustomEvent('note-added', {
          detail: { title, body },
          bubbles: true,
        });
        this.dispatchEvent(event);
        this.shadowRoot.querySelector('form').reset();
      });
    }
  }
  
  customElements.define('note-form', NoteForm);
  