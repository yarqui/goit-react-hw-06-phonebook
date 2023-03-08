import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilterValue } from 'redux/selectors';
import { DeleteButton, ContactItem } from './ContactList.styled';

const getVisibleContacts = (contacts, filterValue) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );
};

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  console.log('contacts:', contacts);
  console.log('filterValue:', filterValue);

  const visibleContacts = getVisibleContacts(contacts, filterValue);
  console.log('visibleContacts:', visibleContacts);

  return visibleContacts.map(({ id, name, number }) => (
    <ContactItem key={id}>
      {name}: {number}
      <DeleteButton
        id={id}
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </DeleteButton>
    </ContactItem>
  ));
};

export default ContactList;
