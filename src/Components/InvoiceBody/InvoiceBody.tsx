import GridBody from "../GridBody/GridBody";
import { GridHeader } from "../GridHeader/GridHeader";
import GridTotal from "../GridTotal/GridTotal";
import "./Style/style.css";

export default function InvoiceBody() {
  return (
    <div className="invoice-container">
      <GridHeader />
      <GridBody />
      <GridTotal />
    </div>
  );
}
