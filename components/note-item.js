class NoteItem extends HTMLElement {
  static get observedAttributes() {
    return ['title', 'body', 'id', 'createdat'];
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
    const id = this.getAttribute('id') || '';
    const createdAtRaw = this.getAttribute('createdat') || '';
    const createdAt = createdAtRaw
      ? new Date(createdAtRaw).toLocaleString()
      : '';

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
          margin: 0 0 0.5rem 0;
          font-size: 1rem;
          color: #555;
        }
        .meta {
          font-size: 0.8rem;
          color: #999;
        }
      </style>
      <div class="note">
        <h3>${title}</h3>
        <p>${body}</p>
        <div class="meta">ID: ${id}</div>
        <div class="meta">Created: ${createdAt}</div>
      </div>
    `;
  }
}

customElements.define('note-item', NoteItem);