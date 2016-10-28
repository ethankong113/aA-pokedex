export const REQUEST_ITEM = "REQUEST_ITEM";
export const RECEIVE_ITEM = "RECEIVE_ITEM";

export const requestItem = () => ({
  type: REQUEST_ITEM
});

export const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item
});
