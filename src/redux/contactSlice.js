import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContacts,
  deleteContacts
} from "./operations";
import { nanoid } from "nanoid";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  contacts: [],
  filteredContacts: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addContacts.pending, handlePending)
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, handleRejected)

      .addCase(deleteContacts.pending, handlePending)
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload,
        );
      })
      .addCase(deleteContacts.rejected, handleRejected)

      // .addCase(searchContacts.pending, handlePending)
      // .addCase(searchContacts.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.items = action.payload;
      // })
      // .addCase(searchContacts.rejected, handlePending);
  },
  // reducers: {
  //   addContact: (state, action) => {
  //     const newContact = {
  //       id: nanoid(),
  //       name: action.payload.name,
  //       number: action.payload.number,
  //     };

  //     console.log('New Contact!', newContact);

  //     state.contacts.push(newContact);
  //   },
  //   delContact: (state, action) => {
  //     state.contacts = state.contacts.filter(
  //       (contact) => contact.id !== action.payload,
  //     );
  //   },
  //   searchContact: (state, action) => {
  //  state.filteredContacts = state.contacts.filter((contact) =>
  //       contact.name.toLowerCase().includes(action.payload.toLowerCase()),
  //     );
  //   },
  // },
});

export const { addContact, delContact, searchContact } = contactSlice.actions;
export default contactSlice.reducer;
