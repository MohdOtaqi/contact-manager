import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, deleteContact }) {
  if (contacts.length === 0) {
    return <p>No contacts available.</p>;
  }

  return (
    <div>
      <h2>Contact List</h2>
      {contacts.map((contact, index) => (
        <ContactItem
          key={index}
          contact={contact}
          index={index}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
}

export default ContactList;
