import React from 'react';
import { showFormattedDate } from '../../utils/index';

function NoteItem({ note, deleteNote, archiveNote }) {
  const { createdAt, title, body, archived } = note;

  const handleDelete = () => {
    deleteNote(note.id);
  };

  const handleArchive = () => {
    archiveNote(note.id);
  };

  return (
    <div className={`note-item ${archived ? 'archived' : ''}`}>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <div className="note-item__content">
        <h2 className="note-item__title">{title}</h2>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <button className="note-item__delete-button" onClick={handleDelete}>
          Delete
        </button>
        <button className="note-item__archive-button" onClick={handleArchive}>
          {archived ? 'Unarchive' : 'Archive'}
        </button>
      </div>
    </div>
  );
}

export default NoteItem;