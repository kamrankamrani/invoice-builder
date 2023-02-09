import { Description } from "../Description/Description";
import InvoiceBody from "../InvoiceBody/InvoiceBody";
import "../../../node_modules/vazirmatn/Vazirmatn-font-face.css";
import { Provider } from "react-redux";
import { store } from "../../store";
import GridButtons from "../GridButtons/GridButtons";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Description />
        <InvoiceBody />
        <GridButtons />
      </Provider>
    </>
  );
}
