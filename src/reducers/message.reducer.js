import { v1 as uuidv1 } from "uuid";

const initialState = {
  messages: [],
  messageDate: "",
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, { text: action.payload, id: uuidv1() }],
        messageDate: new Date(),
      };
    case "EMPTY_MESSAGES":
      return {
        ...state,
        messages: action.payload,
        messageDate: "",
      };
    default:
      return state;
  }
}
