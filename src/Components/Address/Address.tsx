import { useAppDispatch, useAppSelector } from "../../customHooks";
import {
  setClientAddress,
  setClientName,
  setSellerAddress,
  setSellerName,
} from "../../features/addressSlice";
import "./Style/style.scss";

export default function Address() {
  const addressData = useAppSelector((state) => state.addressSlice);
  const dispatch = useAppDispatch();
  const onSellerNameChange = (e: string) => {
    dispatch(setSellerName(e));
  };
  const onClientNameChange = (e: string) => {
    dispatch(setClientName(e));
  };
  const onSellerAddressChange = (e: string) => {
    dispatch(setSellerAddress(e));
  };
  const onClientAddressChange = (e: string) => {
    dispatch(setClientAddress(e));
  };
  return (
    <div className="address-container address-grid">
      <div>
        <p>فروشنده: </p>
        <input
          value={addressData.seller}
          onChange={(e) => onSellerNameChange(e.target.value)}
        />
      </div>
      <div>
        <p>آدرس فروشنده: </p>
        <input
          value={addressData.sellerAddress}
          onChange={(e) => onSellerAddressChange(e.target.value)}
        />
      </div>
      <div>
        <p>خریدار: </p>
        <input
          value={addressData.client}
          onChange={(e) => onClientNameChange(e.target.value)}
        />
      </div>
      <div>
        <p>آدرس خریدار: </p>
        <input
          value={addressData.clientAddress}
          onChange={(e) => onClientAddressChange(e.target.value)}
        />
      </div>
    </div>
  );
}
