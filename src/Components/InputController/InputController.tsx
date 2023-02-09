import { useState } from "react";
import "./Style/style.scss";

interface IProps {
  inputValue: string;
  callBack: (val: string) => void;
}

export default function InputController(props: IProps) {
  const [inputActive, setInputActive] = useState(false);

  const handleTitleClick = () => {
    setInputActive(!inputActive);
  };

  const handleTitleChangeValue = (eventVal: string) => {
    //callback called
    props.callBack(eventVal);
  };

  const handleInputKeyDown = (e: string) => {
    if (e === "Enter") {
      setInputActive(false);
    }
  };

  return (
    <>
      {!inputActive ? (
        <div
          className={`${props.inputValue || "empty-value"}`}
          onClick={handleTitleClick}
        >
          {props.inputValue}
        </div>
      ) : (
        <input
          onKeyDown={(e) => handleInputKeyDown(e.key)}
          autoFocus
          onBlur={handleTitleClick}
          value={props.inputValue}
          onChange={(e) => handleTitleChangeValue(e.target.value)}
        />
      )}
    </>
  );
}
