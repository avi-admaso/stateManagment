import logo from "./logo.svg";
import "./App.css";
import Massage from "./components/Massage";
import MassageProvider from "./MassageContetx";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <MassageProvider>
          {/* <Massage /> */}
          <Home />
        </MassageProvider>
      </header>
    </div>
  );
}

export default App;
