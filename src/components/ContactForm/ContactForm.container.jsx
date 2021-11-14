import { connect } from 'react-redux'; // Импорт функции коннекта к хранилищу
import { contactsOperations, contactsSelectors }  from '../../redux/contacts/contacts-actions'; // Импорт операции добавления контакта и селектора всех контактов

import ContactForm from './ContactForm';

// Из глобального стейта в пропы компонента
const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

// Из глобального стейта в пропы компонента -ContactForm - методы
const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
