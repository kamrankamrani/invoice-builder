import { useAppSelector } from "../../customHooks";
import "./Style/style.css";

export function GridHeader() {
  const tableHeaderContex = useAppSelector((state) => state.tableHeaderSlice);
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
