import { PersianNumber } from "../../Services/ConvertNumbers";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Style/style.css";

export default function CounterPanel() {
  const number = 2;
  return (
    <div className="container counter-panel-container">
      <div>{PersianNumber(number)}</div>
      <div className="container icons-container">
        <AddIcon fontSize="small" />
        {number <= 1 ? (
          <DeleteIcon className="red-color" fontSize="small" />
        ) : (
          <RemoveIcon className="red-color" fontSize="small" />
        )}
      </div>
    </div>
  );
}
