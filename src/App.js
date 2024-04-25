import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [mobileNo, setMobileNo] = useState(0);
  const generateHandler = () => {
    setMobileNo(Math.floor(10000000000 + Math.random() * 90000000000));
  };
  return (
    <>
      <h1>Random Mobile No Generator</h1>
      <div>{mobileNo}</div>
      <button onClick={() => generateHandler()}>Generate</button>
    </>
  );
}

export default App;
