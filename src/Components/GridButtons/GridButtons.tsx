import { useAppDispatch, useAppSelector } from "../../customHooks";
import { addEmptyRow } from "../../features/tableBodySlice";
import { defaultTableData } from "../../Services/Data";
import { tableBodyType } from "../../Services/Types";
import "./Style/style.scss";

export default function GridButtons() {
  const currentGridBodyDataLength = useAppSelector(
    (state) => state.tableBodySlice.bodyData.length
  );
  const dispatch = useAppDispatch();

  const generateRowIndex = () => {
    return currentGridBodyDataLength + 1;
  };

  const handleAddRowClick = () => {
    const _defaultData: tableBodyType = {
      ...defaultTableData,
      row: generateRowIndex(),
    };
    dispatch(addEmptyRow(_defaultData));
  };

  const handlePrintClick = () => {
    //print
  };

  return (
    <div className="grid-button-container">
      <button onClick={handleAddRowClick}>
        <p>افزودن ردیف</p>
      </button>
      <button className="print" onClick={handlePrintClick}>
        <p>پرینت</p>
      </button>
    </div>
  );
}
