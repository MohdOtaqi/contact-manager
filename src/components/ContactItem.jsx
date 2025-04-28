import React from 'react';

function ContactItem({ contact, index, deleteContact }) {
  return (
    <div>
      <p>
        {index + 1}. {contact.name} ({contact.email})
        <button onClick={() => deleteContact(index)}>Delete</button>
      </p>
    </div>
  );
}

export default ContactItem;
