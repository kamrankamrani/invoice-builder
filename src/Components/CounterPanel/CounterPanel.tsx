import { PersianNumber } from "../../Services/ConvertNumbers";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "../../customHooks";
import {
  decreaseItem,
  deleteItem,
  increaseItem,
  updateRowIndex,
} from "../../features/tableBodySlice";
import "./Style/style.css";
import { updateRowIndexType } from "../../Services/Types";
import { useEffect } from "react";

interface IProps {
  count: number;
  row: number;
}

export default function CounterPanel({ count, row }: IProps) {
  const currentTableData = useAppSelector(
    (state) => state.tableBodySlice.bodyData
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    updateRowIndexes();
  }, [currentTableData.length]);

  const updateRowIndexes = () => {
    console.log(currentTableData);
    currentTableData.forEach((tableData, index) => {
      if (tableData.row !== index + 1) {
        const _data: updateRowIndexType = {
          row: index,
          newIndex: index + 1,
        };
        dispatch(updateRowIndex(_data));
      }
    });
  };

  const handleAddItemClick = () => {
    dispatch(increaseItem(row));
    // dispatch(updateItemPrice(row));
  };

  const handleRemoveItemClick = () => {
    dispatch(decreaseItem(row));
    // dispatch(updateItemPrice(row));
  };

  const handleDeleteClick = () => {
    if (currentTableData.length > 1) {
      dispatch(deleteItem(row));
    }
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
