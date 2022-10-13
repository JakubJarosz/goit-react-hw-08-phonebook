import React from 'react'
import { useDispatch } from 'react-redux';
import { useCont } from "../../hooks/useCont"
import { deleteContacts } from 'redux/tasks/operations';
import {
  ListItem,
  List,
  ListItemText,
  IconButton,
} from '@mui/material';
import styles from "../../components/ContactsList/ContactsList.module.css"

export const ContactsList = () => {

  const dispatch = useDispatch();
  const { contacts } = useCont();

  const handleDelete = (e) => {
    const btnId = e.currentTarget.id
     dispatch(deleteContacts(btnId));
  }
  
  return (
    <div>
      
        <List
          
          sx={{ width: '100%', maxWidth: 260, bgcolor: 'background.paper' }}
        >
          {contacts.map(({ id, name, number }) => (
            <ListItem
              key={id}
              disableGutters
              secondaryAction={
                <IconButton id={id} onClick={handleDelete} aria-label="comment">
                  Delete
                </IconButton>
              }
            >
              <ListItemText
                primary={`name:${name}`}
                secondary={`phone:+${number}`}
              />
            </ListItem>
          ))}
        </List>
      
    </div>
  );
}




