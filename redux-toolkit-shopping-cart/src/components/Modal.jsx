import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

const Modal = () => {
  const dispatch = useDispatch();

  const clearCartAndCloseModal = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Are you sure to clear the cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn btn-confirm"
            onClick={() => clearCartAndCloseModal()}
          >
            Confirm
          </button>
          <button
            type="button"
            className="btn btn-cancel"
            onClick={() => dispatch(closeModal())}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
