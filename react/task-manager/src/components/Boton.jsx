const Boton = () => {
  const onClickHandler = () => {
    console.log("The user clicked the button");
  };

  return <button onClick={onClickHandler}>Click me!</button>;
};

export default Boton;
