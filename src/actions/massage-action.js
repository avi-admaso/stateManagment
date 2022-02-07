import { SHOWMSG } from "./Types";

export const showMsg = (value) => {
  {
    return {
      type: SHOWMSG,
      payload:value,
    };
  }
};
