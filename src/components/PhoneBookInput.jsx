import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactSlice";
import { addContacts } from "../redux/operations";
import { nanoid } from "nanoid";

export default function PhoneBookInput() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("WORKSSS!!!!", name, number);
    const newContact = {
      id: nanoid(),
      createdAt: Date.now(),
      name: name,
      phone: number,
    };

    if (name && number) {
      dispatch(addContacts(newContact));
    }
  };

  return (
    <div>
      <h3>Name</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h3>Number</h3>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
