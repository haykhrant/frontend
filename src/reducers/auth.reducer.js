const initialState = {
  registrationStatus: false,
  loginStatus: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "REGISTRATION_SUCCESS":
      return {
        ...state,
        registrationStatus: true,
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
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loginStatus: false,
      };
    default:
      return state;
  }
}
