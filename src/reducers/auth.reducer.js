const initialState = {
    registrationStatus: false,
    message: "",
    messageDate: "",
};

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case 'REGISTRATION_SUCCESS':
            return {
                ...state,
                registrationStatus: true,
                message: action.payload,
                messageDate: new Date()
            }
        case 'REGISTRATION_FAILURE':
            return {
                ...state,
                registrationStatus: false,
                message: action.payload,
                messageDate: new Date()
            }
        default:
            return state;
    }
}