import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const contactsInitialState = {
  contacts: [
    { id: '1', name: 'Bart Simpson', number: '765464' },
    { id: '2', name: 'Liza Simpson', number: '76543264' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(5),
            name,
            number,
          },
        };
      },
    },

    deleteContact(state, action) {
      // const index = state.contacts.findIndex(
      //   contact => contact.id === action.payload
      // );
      // state.contacts.splice(index, 1);

      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

console.log('contactsReducer:', contactsReducer);

export const { addContact, deleteContact } = contactsSlice.actions;
