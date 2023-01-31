import React from "react";
import { useAppSelector } from "../../customHooks";
import { PersianNumber } from "../../Services/ConvertNumbers";
import { tableBodyType } from "../../Services/Types";
import CounterPanel from "../CounterPanel/CounterPanel";
import TitlePanel from "../TitlePanel/TitlePanel";
import "./Style/style.css";

export function GridBody() {
  const tableItems: tableBodyType[] = useAppSelector(
    (state) => state.tableBodySlice.bodyData
  );
  return (
    <div className="grid grid-items-container">
      {tableItems.map((tableData, index) => {
        return (
          <React.Fragment key={tableData.row}>
            <div className="grid-item">{PersianNumber(index + 1)}</div>
            <div className="grid-item">
              {<TitlePanel name={tableData.name} row={index} />}
            </div>
            <div className="grid-item">
              {<CounterPanel count={tableData.count} row={index} />}
            </div>
            <div className="grid-item">{tableData.unit}</div>
            <div className="grid-item">{PersianNumber(tableData.price)}</div>
            <div className="grid-item">{PersianNumber(tableData.off)}</div>
            <div className="grid-item">{PersianNumber(tableData.total)}</div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
