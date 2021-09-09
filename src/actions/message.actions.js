export const addMessage = (data, messageType) => ({
  type: "ADD_MESSAGE",
  payload: data,
  messageType,
});

export const emptyMessages = (data) => ({
  type: "EMPTY_MESSAGES",
  payload: data,
});

export const filterMessages = (id) => ({
  type: "FILTER_MESSAGES",
  payload: id,
});
