import { PersianNumber } from "../../Services/ConvertNumbers";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Style/style.css";
import { useAppDispatch } from "../../customHooks";
import {
  decreaseItem,
  deleteItem,
  increaseItem,
} from "../../features/tableBodySlice";

interface IProps {
  count: number;
  row: number;
}

export default function CounterPanel({ count, row }: IProps) {
  const dispatch = useAppDispatch();
  const handleAddItemClick = () => {
    dispatch(increaseItem(row));
  };
  const handleRemoveItemClick = () => {
    dispatch(decreaseItem(row));
  };
  const handleDeleteClick = () => {
    dispatch(deleteItem(row));
  };
  return (
    <div className="container counter-panel-container">
      <div>{PersianNumber(count)}</div>
      <div className="container icons-container">
        <AddIcon fontSize="small" onClick={handleAddItemClick} />
        {count <= 1 ? (
          <DeleteIcon
            onClick={handleDeleteClick}
            className="red-color"
            fontSize="small"
          />
        ) : (
          <RemoveIcon
            onClick={handleRemoveItemClick}
            className="red-color"
            fontSize="small"
          />
        )}
      </div>
    </div>
  );
}
