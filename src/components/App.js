// import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Section from './Section';
import Filter from './Filter';
import Layout from './Layout';
import { List } from './ContactList/ContactList.styled';

// TODO: check prop types TODO:

const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');
  // const [filteredContacts, setFilteredContacts] = useState([]);

  // -----------
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
  // ---------------^

  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <List>
          <ContactList />
        </List>
      </Section>
      <ToastContainer
        theme="dark"
        position="top-center"
        autoClose="1500"
      ></ToastContainer>
    </Layout>
  );
};

export default App;
