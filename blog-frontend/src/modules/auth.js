import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANEGE_FIELD = 'auth/CHANEGE_FIELD';
const INITIALSTATE = 'auth/INITIALSTATE';

export const changeField = createAction(
  CHANEGE_FIELD,
  ({ form, key, value }) => ({ form, key, value }),
);

export const initializeForm = createAction(INITIALSTATE, (form) => form);

const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
};

const auth = handleActions(
  {
    [CHANEGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALSTATE]: (state, { payload: { form } }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState,
);

export default auth;
