import { useContext } from "react";
import { massageContext } from "../MassageContetx";

function Massage() {
  const { massage } = useContext(massageContext);
  if (massage.isOpen == false) {
    return "";
  } else {
    return (
      <section>
        <h1>{massage.someText}</h1>
      </section>
    );
  }
}
export default Massage;
