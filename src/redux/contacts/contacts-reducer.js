
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contactItems: [], loading: false, error: null },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => ({
      ...state,
      contactItems: action.payload,
      loading: false
    }),
    [fetchContacts.pending]: state => ({
      ...state,
      loading: true
    }),
    [fetchContacts.rejected]: (state, action) => ({
      ...state,
      loading: false
    }),

    [addContact.fulfilled]: (state, action) => ({
      ...state,
      contactItems: [...state.contactItems, action.payload],
      loading: false
    }),
    [addContact.pending]: state => ({
      ...state,
      loading: true
    }),
    [addContact.rejected]: (state, action) => ({
      ...state,
      loading: false
    }),

    [deleteContact.fulfilled]: (state, action) => ({
      ...state,
      contactItems: state.contactItems.filter(
        ({ id }) => id !== action.payload,),
      loading: false
    }),
    [deleteContact.pending]: state => ({
      ...state,
      loading: true
    }),
    [deleteContact.rejected]: (state, action) => ({
      ...state,
      loading: false
    }),
  },
});

export default contactsSlice.reducer;
