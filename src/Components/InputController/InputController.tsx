import { useState } from "react";

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

  return (
    <>
      {!inputActive ? (
        <div onClick={handleTitleClick}>{props.inputValue}</div>
      ) : (
        <input
          autoFocus
          onBlur={handleTitleClick}
          value={props.inputValue}
          onChange={(e) => handleTitleChangeValue(e.target.value)}
        />
      )}
    </>
  );
}
