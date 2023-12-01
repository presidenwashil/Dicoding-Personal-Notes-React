import React from 'react';

function Header({ searchTerm, onSearchChange }) {
  return (
    <div className="note-app__header">
      <h1 className="header__title">My Notes App</h1>
      <input
        type="text"
        placeholder="Search notes..."
        className="header__search-input"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Header;