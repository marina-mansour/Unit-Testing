import React from "react";
import Button from "./components/Button/Button";
import "./App.css";

export default function App() {
  const handleClick = () => {
    console.log("Test Done Successfully...");
  };
  return (
    <div className="app">
      <Button label={"Manosa"} onClick={handleClick} disabled={true} />
    </div>
  );
}
