import React from 'react';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts, onClick }) => (
  <>
    <ul>
      <ContactItem contacts={contacts} onClick={onClick} />
    </ul>
  </>
);

export default ContactList;
