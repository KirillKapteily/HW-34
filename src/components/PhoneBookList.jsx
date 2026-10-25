import { useSelector, useDispatch } from "react-redux";
import PhoneBookItem from "./PhoneBookItem";
import { useEffect, useState } from "react";
import { getContacts } from "../redux/selectors";
import { fetchContacts, addContacts } from "../redux/operations";
console.log(getContacts);

export default function PhoneBookList({ filter }) {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(getContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector((state) => state.contacts.contacts);
  const contactsDebug = useSelector((state) => state.contacts);
  const filteredContacts = useSelector(
    (state) => state.contacts.filteredContacts,
  );

  useEffect(() => {
    console.log("Contacts ALL", contacts);
    // console.log("Contacts DISPLAY", displayContacts);
  }, [filter]);

  let displayContacts = filteredContacts?.length > 0 ? filteredContacts : items;

  // console.log("LENGHT!!!!!!", filteredContacts.length);

  // console.log("DISPLAYS: ", displayContacts);

  // console.log(" FILTER!", filteredContacts);

  const [selector, setSelector] = useState(contacts);

  return (
    <>
    {isLoading && <h1>Loading</h1>}
    {error && <h1>Uh-oh, something went wrong {error.message}</h1>}

     <ul>
      {displayContacts?.map((contact) => (
        <PhoneBookItem key={contact.id} contact={contact} />
      ))}
    </ul>
    </>
   
  );
}
