import React from 'react'
import { useDispatch } from 'react-redux';
import { useCont } from "../../hooks/useCont"
import { deleteContacts } from 'redux/tasks/operations';

export const ContactsList = () => {

  const dispatch = useDispatch();
  const { contacts } = useCont();

  const handleDelete = (e) => {
    const btnId = e.currentTarget.id
     dispatch(deleteContacts(btnId));
  }
  
  return (
      <div>
      <ul>
        {contacts.map(({id, name, number}) => (
          <li key={id}>
            {name}  {number}
            <button id={id} onClick={handleDelete}>Delete</button>
          </li>
        ))}
        </ul>
    </div>
  )
}




