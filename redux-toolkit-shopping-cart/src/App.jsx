import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Store
import { calculateTotals } from "./features/cart/cartSlice";

// Componentes
import CartContainer from "./components/cart/CartContainer";
import Modal from "./components/Modal";
import NavBar from "./components/navbar/NavBar";

const App = () => {
  // Obtiene los datos del store
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  // useEffect se ejecuta cada vez que cambia cartItems
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <>
      <Modal />
      <NavBar />
      <CartContainer />
    </>
  );
};

export default App;
