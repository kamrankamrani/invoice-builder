import { useAppDispatch } from "../../customHooks";
import { updateOff } from "../../features/tableBodySlice";
import { EnglishNumber, PersianNumber } from "../../Services/ConvertNumbers";
import InputController from "../InputController/InputController";

interface IProps {
  row: number;
  off: number;
}

export default function OffPanel({ row, off }: IProps) {
  const dispatch = useAppDispatch();
  const handleOffChangeValue = (e: string) => {
    const _num = EnglishNumber(e);
    if (isNaN(Number(_num)) || Number(_num) > 100) return; //if NaN don't send to redux
    dispatch(
      updateOff({
        row,
        value: _num,
      })
    );
  };
  return (
    <InputController
      callBack={handleOffChangeValue}
      inputValue={PersianNumber(off)}
    />
  );
}
