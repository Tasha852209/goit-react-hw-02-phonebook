import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            // onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};
