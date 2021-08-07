const initialState = {
  registrationStatus: false,
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
    default:
      return state;
  }
}
