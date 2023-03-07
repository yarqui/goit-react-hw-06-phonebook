import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilterValue } from 'redux/selectors';
import { DeleteButton, ContactItem } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return visibleContacts.map(({ id, name, number }) => (
    <ContactItem key={id}>
      {name}: {number}
      <DeleteButton
        id={id}
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </DeleteButton>
    </ContactItem>
  ));
};

// ContactList.propTypes = {
//   filteredContacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

export default ContactList;
