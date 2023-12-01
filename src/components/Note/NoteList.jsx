import React, { useState } from 'react';
import NoteItem from './NoteItem';

function NoteList({ sectionTitle, notes, deleteNote, archiveNote, searchTerm }) {
  const filteredNotes = notes.filter((note) => {
    const searchContent = `${note.title} ${note.body}`.toLowerCase();
    return searchContent.includes(searchTerm.toLowerCase());
  });

  return (
    <div>
    <h1>{sectionTitle}</h1>
    <div className="notes-list">
      {filteredNotes.length === 0 ? (
        <p className="notes-list__empty-message">No matching notes.</p>
      ) : (
        filteredNotes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            archiveNote={archiveNote}
          />
        ))
      )}
    </div>
  </div>
  );
}

export default NoteList;