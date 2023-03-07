import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Section from './Section';
import Filter from './Filter';
import { List } from './ContactList/ContactList.styled';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    setFilteredContacts(
      contacts.filter(contact => contact.name.toLowerCase().includes(filter))
    );
  }, [contacts, filter]);

  const doesContactExist = queue => {
    return contacts.some(contact => contact.name === queue);
  };

  const handleSubmit = ({ id, name, number }) => {
    const alreadyExists = doesContactExist(name);

    if (alreadyExists) {
      toast.warning(`'${name}' is already in contacts`);
      return;
    }

    setContacts(prevContacts => [...prevContacts, { id, name, number }]);
  };

  const handleFilter = queue => {
    queue ? setFilter(queue) : setFilter('');
  };

  const deleteFromContacts = id => {
    setContacts(
      contacts.filter(contact => {
        return contact.id !== id;
      })
    );
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={handleSubmit} />
      </Section>
      <Section title="Contacts">
        <Filter filterQuery={handleFilter}></Filter>
        <List>
          <ContactList
            filteredContacts={filteredContacts}
            onDeleteContact={deleteFromContacts}
          />
        </List>
      </Section>
      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose="1500"
      ></ToastContainer>
    </>
  );
};

export default App;
