import React from 'react';
import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        className={styles.filter}
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
        placeholder="Search"
      />
      <ul className={styles.list}>
        {filtered.map(({ id, name, number }) => (
          <li key={id} className={styles.item}>
            {name}: {number}
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
