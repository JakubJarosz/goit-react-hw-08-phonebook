import { ContactsList } from "../components/ContactsList/ContactsList";
import { AddContacts } from "components/AddContacts/AddContacts";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


export const Tasks = () => {
    return (
      <div>
        <AddContacts />
        <ContactsList />
       
      </div>
    );
}