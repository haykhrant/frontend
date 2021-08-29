import { v4 as uuidv4 } from "uuid";

const initialState = {
  messages: [],
  messageDate: "",
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, { text: action.payload, id: uuidv4() }],
        messageDate: new Date(),
      };
    case "EMPTY_MESSAGES":
      return {
        ...state,
        messages: action.payload,
        messageDate: "",
      };
    case "FILTER_MESSAGES":
      return {
        ...state,
        messages: state.messages.filter((mes) => mes.id !== action.payload),
      };
    default:
      return state;
  }
}
