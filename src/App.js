// src/App.js
import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './css/App.css';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    const newContacts = contacts.filter((_, i) => i !== index);
    setContacts(newContacts);
  };

  return (
    <div className="App">
      <h1>Contact Manager App</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
