import { SHOWMSG } from "../actions/Types";
const msgReducer = (state, action) => {
  switch (action.type) {
    case "success":
      return "the success";
    case SHOWMSG:
      return { ...action.payload, isOpen: true, someText: "some random text" };
    default:
      return state;
  }
};
export default msgReducer;
