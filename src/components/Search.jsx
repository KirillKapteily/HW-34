import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchContact } from "../redux/contactSlice";
import { getContacts } from "../redux/selectors";
import PhoneBookSearchList from "./PhoneBookSearchList";
// import { searchContacts } from "../redux/operations";
import { useSelector } from "react-redux";
import PhoneBookList from "./PhoneBookList";

export default function Search() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const [filteredContacts, setFilteredContacts] = useState([]);

  const [filter, setFilter] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(filter);
console.log("CONTACTS: ", contacts);

    let search = contacts.items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    setFilteredContacts(search);

    console.log("CONTACTS: ", contacts, "SEARCH", search,"FILTERED ONES:", filteredContacts);
    

    // dispatch(searchContacts(filter));
  };

  return (
    <div>
      <h2>Filter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    {filter !== [] && <PhoneBookSearchList filter={filteredContacts} />}
     <h1>contacts</h1>
      <PhoneBookList filter={filter} />
    </div>
  );
}
