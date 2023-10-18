import Logo from "./Logo";
import Title from "./Title";

const Header = () => {
  return (
    <header>
      <Logo />
      <Title text="Task Manager" small="A great application" />
    </header>
  );
};

export default Header;
