import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, handleDeleteBtn }) => {
  return (
    <li className={css.contactItem}>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        onClick={() => {
          handleDeleteBtn(id);
          console.log(id);
        }}
        className={css.button}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
