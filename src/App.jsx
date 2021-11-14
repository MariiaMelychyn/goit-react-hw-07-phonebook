import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import Alert from '@material-ui/lab/Alert';

import { contactsOperations, contactsSelectors } from './redux/contacts'; // Импорт async операции запроса всех контактов и селектора лоадера и ошибки

import Container from './components/Container';
import Logo from './components/Logo';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Loader from './components/Loader';

import 'react-toastify/dist/ReactToastify.css';

// Вариант без пропсов и без класса + хук для селекторов
const App = () => {
  const isLoadingContacts = useSelector(state =>
    contactsSelectors.getLoading(state),
  );
  const isError = useSelector(state => contactsSelectors.getError(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Logo />

      <ContactForm />

      <Filter />

      <ContactList />

      {isLoadingContacts && <Loader />}

      {isError && <Alert severity="error">{isError.message}</Alert>}

      <ToastContainer autoClose={2500} />
    </Container>
  );
};

export default App;