import { ADD_FORM_FIELD } from '../signIn';

export const REGISTER = 'masterProfile/REGISTER';
export const REGISTER_SUCCESS = 'masterProfile/REGISTER_SUCCESS';
export const REGISTER_FAIL = 'masterProfile/REGISTER_FAIL';

export const ADD_PHOTO = 'masterProfile/ADD_PHOTO';
export const ADD_PHOTO_SUCCESS = 'masterProfile/ADD_PHOTO_SUCCESS';
export const ADD_PHOTO_FAIL = 'masterProfile/ADD_PHOTO_FAIL';

const initialState = {
  loading: false,
  email: '',
  phone: '',
  userName:	'',
  bio: '',
  password:	'',
  passwordConfirm:	'',
  birthday: undefined,
  sexId: 0,
  roleId:	0,
  avatar: undefined,
};

const actionHandlers = {
  [REGISTER](state) {
    return { ...state, loading: true };
  },
  [REGISTER_SUCCESS](state, action) {
    return { ...state, loading: false, user: action.payload.data };
  },
  [REGISTER_FAIL](state, action) {
    return { ...state, loading: false, error: action.error };
  },

  [ADD_PHOTO](state) {
    return { ...state, loading: true };
  },
  [ADD_PHOTO_SUCCESS](state, action) {
    return { ...state, loading: false, avatar: action.payload.data };
  },
  [ADD_PHOTO_FAIL](state, action) {
    return { ...state, loading: false, error: action.error };
  },

  [ADD_FORM_FIELD](state, action) {
    return {
      ...state,
      loading: false,
      [action.payload.name]: action.payload.value,
    };
  },
};

export default function reducer(state = initialState, action = {}) {
  const { type } = action;
  const actionHandler = actionHandlers[type];
  if (actionHandler) {
    return actionHandler(state, action);
  }

  return state;
}

export function registerNewUser(user) {
  return {
    types: [REGISTER, REGISTER_SUCCESS, REGISTER_FAIL],
    payload: {
      request: {
        method: 'post',
        url: 'users/register',
        data: user,
      },
    },
  };
}

export function addPhoto(userId, image) {
  const formData = new FormData();
  formData.append('image', {
    uri: image.uri,
    type: image.type,
    name: image.fileName,
    data: image.data,
  });
  return {
    types: [ADD_PHOTO, ADD_PHOTO_SUCCESS, ADD_PHOTO_FAIL],
    payload: {
      request: {
        method: 'put',
        url: `images/updateUserImage/${userId}`,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    },
  };
}

export const addFormField = payload => ({
  type: ADD_FORM_FIELD,
  payload,
});
