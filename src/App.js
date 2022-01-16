import React from "react";
import ColofulMessage from "./components/ColorfulMessage.js";

const App = () => {
  return (
    <>
      <h1> hallo world </h1>
      <ColofulMessage color="blue">components</ColofulMessage>
      <button onClick={ClickButton}>ボタン</button>
    </>
  );
};

const ClickButton = () => {
  return alert("xxxxx");
};
export default App;
