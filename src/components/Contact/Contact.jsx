import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className="item">
      <span>
        {contact.name}: {contact.number}
      </span>
      <button
        className="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
}
