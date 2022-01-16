import React from "react";

const ColorfulMessage = (props) => {
  /** propsからの受け取り */
  const { selectColor, children } = props;
  const colorStyle = {
    color: selectColor,
    fontSize: "15px"
  };
  console.log(selectColor);

  return (
    <>
      <p style={colorStyle}> {children} </p>
    </>
  );
};

export default ColorfulMessage;
