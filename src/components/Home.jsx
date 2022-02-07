import { useContext } from "react";
import { massageContext } from "../MassageContetx";
import Massage from "./Massage";
import { showMsg } from "../actions/massage-action";

export function Home() {
  const { dispatch } = useContext(massageContext);
  function dispatchMsg() {
    dispatch(showMsg(true));
  }
  return (
    <section>
      <button onClick={dispatchMsg}>click</button>
      <h1>HOME </h1>
      <Massage />
    </section>
  );
}
