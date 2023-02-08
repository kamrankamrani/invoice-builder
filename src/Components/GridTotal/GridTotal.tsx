import { useAppSelector } from "../../customHooks";
import { useEffect, useState } from "react";
import { PersianNumber } from "../../Services/ConvertNumbers";
import "./Style/style.css";

export default function GridTotal() {
  const gridData = useAppSelector((state) => state.tableBodySlice.bodyData);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalRawPrice, setTotalRawPrice] = useState(0);
  const [totalOff, setTotalOff] = useState(0);

  useEffect(() => {
    if (gridData.length) {
      let _totalPr = 0;
      let _totalOff = 0;
      let _totalRawPrice = 0;
      gridData.forEach((gridItem) => {
        _totalPr += gridItem.total;
        _totalRawPrice += gridItem.count * gridItem.price;
      });
      setTotalRawPrice(_totalRawPrice);
      _totalOff = _totalRawPrice - _totalPr;
      setTotalPrice(_totalPr);
      setTotalOff(_totalOff);
    }
  }, [gridData]);
  return (
    <div className="grid">
      <></>
      <></>
      <></>
      <></>
      <></>
      <div className="grid-total-container small-grid">
        <div className="item">جمع کل</div>
        <div className="item">{PersianNumber(totalRawPrice)}</div>
        <div className="item">تخفیف</div>
        <div className="item">{PersianNumber(totalOff)}</div>
        <div className="item">خالص پرداختی</div>
        <div className="item">{PersianNumber(totalPrice)}</div>
      </div>
    </div>
  );
}
