import React, { Component } from 'react';
import ContactFrom from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

import { v4 as uuidv4 } from 'uuid';
import styles from './Phonebook.module.css';

class Phonebook extends Component {
  static defaultProps = {
    initialContacts: [],
    initialFilter: '',
  };

  state = {
    contacts: this.props.initialContacts,
    filter: this.props.initialFilter,
  };

  formSubmitHandler = data => {
    const nameContact = this.state.contacts.map(el => el.name.toLowerCase());
    if (nameContact.includes(data.name.toLowerCase())) {
      return alert(`${data.name} is already in contacts`);
    }
    const contact = {
      name: data.name,
      number: data.number,
      id: uuidv4(),
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  contactsFilterHandler = ele => {
    this.setState({
      filter: ele.currentTarget.value,
    });
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const normalizeFilter = this.state.filter.toLowerCase();
    const filterContacts = this.state.contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizeFilter),
    );
    return (
      <div className={styles.box}>
        <h1>Phonebook</h1>
        <ContactFrom onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.contactsFilterHandler} />
        <ContactList contacts={filterContacts} onClick={this.onDeleteContact} />
      </div>
    );
  }
}

export default Phonebook;
