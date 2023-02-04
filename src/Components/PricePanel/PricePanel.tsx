import { useAppDispatch } from "../../customHooks";
import { updatePrice } from "../../features/tableBodySlice";
import { EnglishNumber, PersianNumber } from "../../Services/ConvertNumbers";
import InputController from "../InputController/InputController";

interface IProps {
  row: number;
  price: number;
}

export default function PricePanel({ row, price }: IProps) {
  const dispatch = useAppDispatch();
  const handlePriceChangeValue = (e: string) => {
    const _num = EnglishNumber(e);
    if (isNaN(Number(_num))) return;

    dispatch(
      updatePrice({
        row,
        value: _num,
      })
    );
  };
  return (
    <InputController
      callBack={handlePriceChangeValue}
      inputValue={PersianNumber(price)}
    />
  );
}
