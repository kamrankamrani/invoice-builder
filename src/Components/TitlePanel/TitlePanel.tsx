import { useState } from "react";
import { useAppDispatch } from "../../customHooks";
import { updateTitle } from "../../features/tableBodySlice";
import "./Style/style.css";

interface IProps {
  name: string;
  row: number;
}

export default function TitlePanel({ name, row }: IProps) {
  const [inputActive, setInputActive] = useState(false);
  const dispatch = useAppDispatch();
  const handleTitleClick = () => {
    setInputActive(!inputActive);
  };
  const handleTitleChangeValue = (e: string) => {
    dispatch(
      updateTitle({
        row,
        title: e,
      })
    );
  };
  return (
    <>
      {!inputActive ? (
        <div onClick={handleTitleClick}>{name}</div>
      ) : (
        <input
          autoFocus
          onBlur={handleTitleClick}
          value={name}
          onChange={(e) => handleTitleChangeValue(e.target.value)}
        />
      )}
    </>
  );
}