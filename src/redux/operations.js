import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6aa43deae7ae868cdf7bc395.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      console.log("Data", response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addContacts = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", contact);
      console.log("Data", response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      console.log("Data", response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// export const searchContacts = createAsyncThunk(
//   "contacts/searchContact",
//   async (searchResults, thunkAPI) => {
//     try {
//       const response = await axios.get(`/contacts`);
//       let search = (response.filteredContacts = state.contacts.filter(
//         (contact) =>
//           contact.name.toLowerCase().includes(action.payload.toLowerCase()),
//       ));

//       console.log("Data search", search);

//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );

// export const searchContacts = createAsyncThunk(
//   "contacts/searchContact",
//   async (contact, thunkAPI) => {
//     try {
//       const response = await axios.post(`/contacts`, contact);
//       console.log("Data", response.data);

//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );
