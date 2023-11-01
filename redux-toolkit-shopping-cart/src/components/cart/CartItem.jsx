import PropTypes from "prop-types";

const CartItem = ({ id, title, price, img, amount }) => {
  return (
    <>
      <ul>
        <li>{id}</li>
        <li>{title}</li>
        <li>{price}</li>
        <li>{img}</li>
        <li>{amount}</li>
      </ul>
      <hr />
    </>
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
