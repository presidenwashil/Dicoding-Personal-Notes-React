import React, { useState } from 'react';

function NoteInput({ addNote }) {
  const maxTitleLength = 50;

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    if (newTitle.length <= maxTitleLength) {
      setTitle(newTitle);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    addNote(newNote);
    setTitle('');
    setBody('');
  };

  const remainingCharacters = maxTitleLength - title.length;
  const remainingCharactersMessage = remainingCharacters > 0 ? `${remainingCharacters} characters remaining` : 'Maximum characters reached';


  return (
    <div className="note-app__body">
      <h2>Buat Catatan</h2>
      <div className="note-input">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="note-input__title">
          Title: {remainingCharactersMessage}
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter title"
          maxLength={maxTitleLength}
        />
        <label htmlFor="body" className="note-input__body">
          Body:
        </label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter your note"
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
    </div>
    
  );
}

export default NoteInput;