import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Store
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";

// Componentes
import CartContainer from "./components/cart/CartContainer";
import Loading from "./components/Loading";
import Modal from "./components/Modal";
import NavBar from "./components/navbar/NavBar";

const App = () => {
  // Obtiene los datos del store del cart
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  // Obtiene los datos del store del modal
  const { isOpen } = useSelector((store) => store.modal);
  // Ejecuta un action para modificar el state
  const dispatch = useDispatch();

  // useEffect se ejecuta cada vez que cambia cartItems
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  // useEffect se ejecuta al iniciar la aplicación
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  if (isLoading) return <Loading />;

  return (
    <>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </>
  );
};

export default App;
