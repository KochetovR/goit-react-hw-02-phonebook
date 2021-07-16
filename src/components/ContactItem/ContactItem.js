import React from 'react';
import styles from './ContactItem.module.css';

const ContactItem = ({ contacts, onClick }) => (
  <>
    {contacts.map(({ name, number, id }) => (
      <li key={id} className={styles.contact__item}>
        <p>
          {name}: <span>{number}</span>
        </p>
        <button
          type="button"
          onClick={() => onClick(id)}
          className={styles.contact__button}
        >
          Delete
        </button>
      </li>
    ))}
  </>
);

export default ContactItem;
