import { createSlice } from "@reduxjs/toolkit";
import {contacts} from "../../data/contacts";

export const contactSlice = createSlice({
    name: "contact",
    initialState: { contacts },
    reducers: {
        addContact: (state, action) => {
            const payload = action.payload;
            const index = state.contacts.findIndex((contact) => contact.number === payload.number);
            if (index === -1)
                state.contacts.push(payload);
        },
        removeContact: (state, action) => {
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload.id);
        },
        updateContact: (state, action) => {
            const payload = action.payload;
            state.contacts = state.contacts.map((contact) => contact.id === payload.id ? payload : contact);
        },
        updateFavfContact: (state, action) => {
            const payload = action.payload;
            state.contacts.map((contact) =>  contact.id === payload.id ? {...contact, favourite: !contact.favourite} : contact);
        },
        collapseContact: (state, action) => {
            const payload = action.payload;
            state.contacts.map((contact) =>  contact.id === payload.id ? {...contact, enable: true} : {...contact, enable: false});
        }
    },
});

export const {
    addContact,
    removeContact,
    updateContact,
    updateFavfContact,
    collapseContact,
} = contactSlice.actions;

export default contactSlice.reducer;