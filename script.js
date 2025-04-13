// File script.js
import './components/app-bar.js';
import './components/note-form.js';
import './components/note-item.js';
import { notes } from './data/notes.js';

const container = document.getElementById('notes-container');

function renderNotes() {
  container.innerHTML = '';
  notes.forEach(note => {
    const item = document.createElement('note-item');
    item.setAttribute('title', note.title);
    item.setAttribute('body', note.body);
    item.setAttribute('id', note.id);
    item.setAttribute('createdat', note.createdAt);
    container.appendChild(item);
  });
}

window.addEventListener('note-added', e => {
  notes.unshift(e.detail);
  renderNotes();
});

renderNotes();
