import { useSelector } from "react-redux";
import {
    selectContacts,
    selectLoading,
    selectError
} from "../redux/tasks/selectors";

export const useCont = () => {
    return {
        isLoading: useSelector(selectLoading),
        error: useSelector(selectError),
        contacts: useSelector(selectContacts)
    }
}