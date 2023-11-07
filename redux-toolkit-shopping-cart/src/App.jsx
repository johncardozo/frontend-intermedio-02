import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Store
import { calculateTotals } from "./features/cart/cartSlice";

// Componentes
import CartContainer from "./components/cart/CartContainer";
import Modal from "./components/Modal";
import NavBar from "./components/navbar/NavBar";

const App = () => {
  // Obtiene los datos del store del cart
  const { cartItems } = useSelector((store) => store.cart);
  // Obtiene los datos del store del modal
  const { isOpen } = useSelector((store) => store.modal);
  // Ejecuta un action para modificar el state
  const dispatch = useDispatch();

  // useEffect se ejecuta cada vez que cambia cartItems
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </>
  );
};

export default App;
