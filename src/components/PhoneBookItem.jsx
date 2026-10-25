// import { dl } from "../redux/contactSlice";
import { deleteContacts } from "../redux/operations";
import { useDispatch } from "react-redux";

export default function PhoneBookItem({ contact }) {
  const dispatch = useDispatch();
console.log(contact);

  const handleDelContact = (id) => {
    dispatch(deleteContacts(id));
    window.location.reload()
  };

  return (
    <li>
      <h2>Name: {contact.name}</h2>
      <h2>Number: {contact.phone}</h2>
      <button onClick={() => handleDelContact(contact.id)}>Delete</button>
    </li>
  );
}
