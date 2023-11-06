import { useSelector, useDispatch } from "react-redux";
import CartContainer from "./components/cart/CartContainer";
import NavBar from "./components/navbar/NavBar";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";

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
      <NavBar />
      <CartContainer />
    </>
  );
};

export default App;
