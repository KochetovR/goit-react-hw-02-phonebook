import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <>
    <label className={styles.filter__label}>
      Find contacts by name
      <input
        className={styles.filter__input}
        value={value}
        onChange={onChange}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  </>
);

export default Filter;
