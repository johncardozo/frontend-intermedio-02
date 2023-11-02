import PropTypes from "prop-types";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const CartItem = ({ id, title, price, img, amount }) => {
  return (
    <article key={id} className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button className="cart-item__remove-btn">remove</button>
      </div>
      <div>
        <button className="cart-item__amount-btn">
          <FaChevronUp />
        </button>
        <p className="cart-item__amount-btn-text">{amount}</p>
        <button className="cart-item__amount-btn">
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
};

CartItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
  amount: PropTypes.number,
};

export default CartItem;
