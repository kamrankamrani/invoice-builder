import React from "react";
import { useAppSelector } from "../../customHooks";
import { PersianNumber } from "../../Services/ConvertNumbers";
import { tableBodyType } from "../../Services/Types";
import CounterPanel from "../CounterPanel/CounterPanel";
import TitlePanel from "../TitlePanel/TitlePanel";
import useCountTotalPrice from "./useCountTotalPrice";
import "./Style/style.css";
import PricePanel from "../PricePanel/PricePanel";
import OffPanel from "../OffPanel/OffPanel";

export default function GridBody() {
  const tableItems: tableBodyType[] = useAppSelector(
    (state) => state.tableBodySlice.bodyData
  );
  const totalPrices = useCountTotalPrice(tableItems);

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
            <div className="grid-item">
              {<PricePanel row={index} price={tableData.price} />}
            </div>
            <div className="grid-item">
              {<OffPanel row={index} off={tableData.off} />}
            </div>
            <div className="grid-item">{PersianNumber(totalPrices[index])}</div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
