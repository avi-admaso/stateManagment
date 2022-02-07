import { useReducer,createContext } from "react";
import msgReducer from "./reducer/massage-reducer";

export const massageContext = createContext();

export default function MassageProvider({ children }) {
const [massage, dispatch] = useReducer(msgReducer, {isOpen:false});
  return (
    <massageContext.Provider value={{ massage, dispatch }}>
      {children}
    </massageContext.Provider>
  );
}
