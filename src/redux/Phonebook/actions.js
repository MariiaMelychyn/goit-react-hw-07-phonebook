import { v4 as uuidv4 } from 'uuid';

import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/Add', ({ name, number }) => ({
  payload: {
    name,
    number,
    id: uuidv4(),
  },
}));

const deleteContact = createAction('contacts/Delete');

const changeFilter = createAction('contacts/changeFilter');

const actions = { addContact, deleteContact, changeFilter };

export default actions;
// import { createAction } from '@reduxjs/toolkit';
// import shortid from 'shortid';

// const addContact = createAction('contacts/add', (name, number) => ({
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// }));

// const changeFilter = createAction('contacts/changeFilter');
// const deleteContact = createAction('contacts/delete');

// const contactsActions = { addContact, deleteContact, changeFilter };
// export default contactsActions;
