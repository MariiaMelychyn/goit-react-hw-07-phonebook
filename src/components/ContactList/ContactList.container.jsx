import { connect } from 'react-redux'; // Импортируем коннект для глобального хранилища
import { contactsOperations, contactsSelectors } from '../../redux/contacts/contacts-actions'; // Импортируем экшны для диспатчинга
import ContactList from './ContactList';

// Из стейта в пропы компонента ContactList - после фильтрации в селекторах
const mapStateToProps = state => ({
  contacts: contactsSelectors.getfilteredContacts(state),
});

// Из стейта в пропы компонента ContactList - метод удаления контакта
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);