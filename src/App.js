import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.href = "myappscheme://";
    // setTimeout(function () {
    //     window.location.href = '';
    // }, 1000);
    // setTimeout(function () {
    //   this.forceUpdate();
      // window.open(
      //   "safeguard://resetpassword?token=dfkjsdkfhjksdhfhjdshhjfgsdhjgfdhjgfjhs",
      //   "_blank"
      // );
      // window.location = "safeguard://resetpassword?token=dfkjsdkfhjksdhfhjdshhjfgsdhjgfdhjgfjhs";
    // }, 100);

    // window.location = "safeguard://resetpassword?token=dfkjsdkfhjksdhfhjdshhjfgsdhjgfdhjgfjhs";
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
