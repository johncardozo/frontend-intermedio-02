import { GrCart } from "react-icons/gr";

const NavBar = () => {
  return (
    <header>
      <h1>My Store</h1>
      <div className="amount-container">
        <GrCart className="cart-icon" />
        <span className="badge">4</span>
      </div>
    </header>
  );
};

export default NavBar;
