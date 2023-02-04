import { useAppDispatch } from "../../customHooks";
import { updateTitle } from "../../features/tableBodySlice";
import InputController from "../InputController/InputController";

interface IProps {
  name: string;
  row: number;
}

export default function TitlePanel({ name, row }: IProps) {
  const dispatch = useAppDispatch();
  const handleTitleChangeValue = (e: string) => {
    dispatch(
      updateTitle({
        row,
        value: e,
      })
    );
  };
  return (
    <InputController inputValue={name} callBack={handleTitleChangeValue} />
  );
}
