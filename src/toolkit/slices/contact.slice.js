import {createSlice, current} from "@reduxjs/toolkit";
import {contacts} from "../../data/contacts";

export const contactSlice = createSlice({
    name: "contact",
    initialState: { contacts } ,
    reducers: {
        addContact: (state, action) => {
            const payload = action.payload;
            const index = state.contacts.findIndex(contact => contact.number === payload.number);
            if (index === -1)
                state.contacts.push(payload);
        },
        removeContact: (state, action) => {
            return state.contacts.filter(contact => contact.id !== action.payload.id);
        },
        updateContact: (state, action) => {
            const payload = action.payload;
            const index = state.contacts.findIndex(contact => contact.number === payload.number);
            if (index !== -1)
                Object.assign(state.contacts[index], payload);
        },
        updateFavfContact: (state, action) => {
            const contact = state.contacts.find((contact) => contact.id === action.payload.id)
            if (contact)
                contact.favourite = !contact.favourite;
        },
        expandContact: (state, action) => {
            state.contacts.forEach(contact => {
                if(contact.id === action.payload.id) contact.enable = true;
                else contact.enable = false;
            });
        },
        collapseContact: (state) => {
            state.contacts.forEach(contact => {
                contact.enable = false;
            });
        }
    },
});

export const {
    addContact,
    removeContact,
    updateContact,
    updateFavfContact,
    expandContact,
    collapseContact,
} = contactSlice.actions;

export default contactSlice.reducer;