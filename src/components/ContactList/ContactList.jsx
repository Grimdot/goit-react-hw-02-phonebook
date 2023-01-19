import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts, handleDeleteBtn }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactItem
            name={name}
            number={number}
            key={id}
            id={id}
            handleDeleteBtn={handleDeleteBtn}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
