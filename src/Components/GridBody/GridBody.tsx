import React from "react";
import { useAppSelector } from "../../customHooks";
import { PersianNumber } from "../../Services/ConvertNumbers";
import { tableBodyType } from "../../Services/Types";
import CounterPanel from "../CounterPanel/CounterPanel";
import "./Style/style.css";

export function GridBody() {
  const mockData: tableBodyType[] = useAppSelector(
    (state) => state.tableBodySlice
  );
  return (
    <div className="grid grid-items-container">
      {mockData.map((tableData) => {
        return (
          <React.Fragment key={tableData.row}>
            <div className="grid-item">{PersianNumber(tableData.row)}</div>
            <div className="grid-item">{tableData.name}</div>
            <div className="grid-item">
              {<CounterPanel count={tableData.count} row={tableData.row} />}
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
