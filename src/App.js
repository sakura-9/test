import React from "react";

const App = () => {
  const click = () => alert("button click");
  return (
    <>
      <h1> hallo world </h1>
      <button onClick={click}>ボタン</button>
    </>
  );
};

export default App;
