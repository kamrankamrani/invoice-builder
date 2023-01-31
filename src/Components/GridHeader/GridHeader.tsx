import { useContext } from "react";
import TableHeaderContex from "../../Services/tableData";
import "./Style/style.css";

export function GridHeader() {
  const tableHeaderContex = useContext(TableHeaderContex);
  return (
    <div className="grid grid-header">
      {[...tableHeaderContex].map((val, index) => {
        return (
          <div className="header-item" key={index}>
            {val}
          </div>
        );
      })}
    </div>
  );
}
