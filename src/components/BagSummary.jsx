import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagIds = useSelector((store) => store.bag);
  const Items = useSelector((store) => store.items);
  const finalItems = Items.filter((item) => bagIds.indexOf(item.id) >= 0);
  const totalItems = finalItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  const CONVINENCE_FEE = 99;
  console.log(finalItems);
  finalItems.forEach((item) => {
    totalMRP += item.original_price;
    totalDiscount = item.original_price - item.current_price;
  });
  const finalPayment = totalMRP - totalDiscount + CONVINENCE_FEE;
  console.log(totalMRP);
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItems} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{CONVINENCE_FEE}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>{" "}
    </div>
  );
};

export default BagSummary;
