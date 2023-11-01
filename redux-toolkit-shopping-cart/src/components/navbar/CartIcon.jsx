import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";

const CartIcon = () => {
  // Obtiene un valor del state
  const { amount } = useSelector((store) => store.cart);

  return (
    <div className="amount-container">
      <GrCart className="cart-icon" />
      <span className="badge">{amount}</span>
    </div>
  );
};

export default CartIcon;
