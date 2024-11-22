import React from "react";

interface ButtonProps {
  text: string;
  color: string;
  onClickEvent: () => void;
}

// const handleButton = () => {
//   console.log("Button clicked");
// };

function Button({ text, color, onClickEvent }: ButtonProps) {
  return (
    <button className={"btn btn-" + color} onClick={onClickEvent}>
      {text}
    </button>
  );
}

export default Button;
