import { createContext } from "react";
import { tableHeaderType } from "./Types";

const TableHeaderContex = createContext<tableHeaderType>({
  row: "ردیف",
  name: "نام",
  count: "تعداد",
  unitPrice: "واحد",
  price: "قیمت",
  off: "تخفیف %",
  total: "قیمت کل",
  *[Symbol.iterator]() {
    for (const item in this) {
      yield this[item as keyof tableHeaderType];
    }
  },
} as tableHeaderType);

export default TableHeaderContex;
