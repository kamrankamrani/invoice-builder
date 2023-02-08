import "./Style/style.scss";

export default function Address() {
  const onSellerNameChange = (e: string) => {
    //dispatch
  };
  const onBuyyerNameChange = (e: string) => {
    //dispatch
  };
  const onSellerAddressChange = (e: string) => {
    //dispatch
  };
  const onBuyyerAddressChange = (e: string) => {
    //dispatch
  };
  return (
    <div className="address-container address-grid">
      <div>
        <p>فروشنده: </p>
        <input onChange={(e) => onSellerNameChange(e.target.value)} />
      </div>
      <div>
        <p>آدرس فروشنده: </p>
        <input onChange={(e) => onSellerAddressChange(e.target.value)} />
      </div>
      <div>
        <p>خریدار: </p>
        <input onChange={(e) => onBuyyerNameChange(e.target.value)} />
      </div>
      <div>
        <p>آدرس خریدار: </p>
        <input onChange={(e) => onBuyyerAddressChange(e.target.value)} />
      </div>
    </div>
  );
}
