import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";

const CartContainer = () => {
  // Obtiene el estado centralizado en Redux
  const { cartItems } = useSelector((store) => store.cart);

  return (
    <section className="cart-container">
      <div className="cart-container__header">
        <h2>Your Cart</h2>
      </div>
      <div className="cart-container__articles">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <CartFooter />
    </section>
  );
};

export default CartContainer;
