import { useContext } from "react";
import TableHeaderContex from "../../Services/tableData";
import { GridBody } from "../GridBody/GridBody";
import { GridHeader } from "../GridHeader/GridHeader";
import "./Style/style.css";

export default function InvoiceBody() {
  const tableHeaderContex = useContext(TableHeaderContex);
  return (
    <div className="invoice-container">
      <TableHeaderContex.Provider value={tableHeaderContex}>
        <GridHeader />
      </TableHeaderContex.Provider>
      <GridBody />
    </div>
  );
}
