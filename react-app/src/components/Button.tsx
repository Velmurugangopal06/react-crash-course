import React from "react";

interface ButtonProps {
  text: string;
  cssClasses: string[];
  onBtnClick: () => void;
}

function Button({ text, cssClasses, onBtnClick }: ButtonProps) {
  return (
    <>
      <button
        type="button"
        className={cssClasses.join(" ")}
        onClick={onBtnClick}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
