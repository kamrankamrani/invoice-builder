import { useState } from "react";
import { EnglishNumber, PersianNumber } from "../../Services/ConvertNumbers";
import "./Style/style.css";

export function Description() {
  const [invoiceNum, setInvoiceNum] = useState("0");
  const date = new Intl.DateTimeFormat("fa-IR").format(new Date());
  const handleInvoiceNumber = (val: string) => {
    const _val = Number(EnglishNumber(val));
    if (isNaN(_val)) return;
    setInvoiceNum(String(_val));
  };
  return (
    <div className="desc-container">
      <div className="title">
        <div className="grow">
          <p>فاکتور فروش</p>
        </div>
        <div className="date">
          <div className="flex">
            <p>شماره: </p>
            <input
              value={PersianNumber(invoiceNum)}
              onChange={(e) => handleInvoiceNumber(e.target.value)}
            />
          </div>
          <div className="flex">
            <p>تاریخ:</p>
            <p>{`${date}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
