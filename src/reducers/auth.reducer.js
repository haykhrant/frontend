const initialState = {
  auth: {},
  authStatus: false,
  registrationStatus: false,
  loginStatus: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "REGISTRATION_SUCCESS":
      return {
        ...state,
        registrationStatus: true,
        authStatus: true,
        auth: action.payload,
      };
    case "REGISTRATION_FAILURE":
      return {
        ...state,
        registrationStatus: false,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loginStatus: true,
        authStatus: true,
        auth: action.payload,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loginStatus: false,
      };
    case "LOGOUT":
      return {
        ...state,
        auth: {},
        authStatus: false,
      };
    default:
      return state;
  }
}
