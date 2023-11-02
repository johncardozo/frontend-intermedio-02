import { useSelector } from "react-redux";

const CartFooter = () => {
  // Obtiene acceso a la variable 'total' definida en el store
  const { total } = useSelector((store) => store.cart);
  return (
    <footer className="cart-footer">
      <hr />
      <div className="cart-footer__total">
        <h4>
          Total <span>${total}</span>
        </h4>
      </div>
      <button className="cart-footer__btn-clear">Clear cart</button>
    </footer>
  );
};

export default CartFooter;
