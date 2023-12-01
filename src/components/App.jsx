import React, { useState } from 'react';
import NoteList from './Note/NoteList';
import NoteInput from './Form/NoteInput';
import Header from './Header';

function App({ initialData }) {
  const [activeNotes, setActiveNotes] = useState(initialData.filter(note => !note.archived));
  const [archivedNotes, setArchivedNotes] = useState(initialData.filter(note => note.archived));
  const [searchTerm, setSearchTerm] = useState('');

  const addNote = (newNote) => {
    setActiveNotes([...activeNotes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedActiveNotes = activeNotes.filter((note) => note.id !== id);
    setActiveNotes(updatedActiveNotes);

    const updatedArchivedNotes = archivedNotes.filter((note) => note.id !== id);
    setArchivedNotes(updatedArchivedNotes);
  };

  const archiveNote = (id) => {
    const noteToArchive = activeNotes.find((note) => note.id === id);
    setActiveNotes(activeNotes.filter((note) => note.id !== id));
    setArchivedNotes([...archivedNotes, { ...noteToArchive, archived: true }]);
  };

  const unarchiveNote = (id) => {
    const noteToUnarchive = archivedNotes.find((note) => note.id === id);
    setArchivedNotes(archivedNotes.filter((note) => note.id !== id));
    setActiveNotes([...activeNotes, { ...noteToUnarchive, archived: false }]);
  };

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <div className="note-app">
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <NoteInput addNote={addNote} />
      <NoteList
        sectionTitle="Catatan Aktif"
        notes={activeNotes}
        deleteNote={deleteNote}
        archiveNote={archiveNote}
        searchTerm={searchTerm}
      />
      <NoteList
        sectionTitle="Arsip"
        notes={archivedNotes}
        deleteNote={deleteNote}
        archiveNote={unarchiveNote}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;