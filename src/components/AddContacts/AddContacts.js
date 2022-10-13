import React from 'react'
import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/tasks/operations';
import { useCont } from 'hooks/useCont';
import  Alert  from '@mui/material/Alert';

export const AddContacts = () => {
    const dispatch = useDispatch();
    const { contacts } = useCont();

    const handleSubmit = (e) => {
        e.preventDefault();
          const form = e.currentTarget;
          const name = form.elements.name.value;
        const number = form.elements.number.value;
        const filteredData = contacts.filter((el) => el.name === name)
        if (filteredData.length > 0) {
             alert("Contact is already in a phonebook ")
        } else {
            dispatch(
              addContacts({
                name: name,
                number: number,
              })
            );
        }
        
        form.reset();
    }

  return (
      <div>
          <h1>Phonebook</h1>
          <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
              />
              <br />
              <h2>Number</h2>
              <input
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
              />
              <br />
              <button type="submit">Add contact</button>
          </form>
    </div>
  )
}



