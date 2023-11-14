import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

const SignIn = () => {
  let { setStep } = useContext(AuthContext);

  // Estado del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerSubmit = (e) => {
    // Evita el envío de datos a un backend
    e.preventDefault();
    console.log("Sending data to backend...");
    console.log(`El usuario digitó: ${email} y ${password}`);
  };

  return (
    <main>
      <h3>Hello, friend!</h3>
      <div className="card">
        <form onSubmit={handlerSubmit} autoComplete="off">
          <fieldset>
            <label htmlFor="email">email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              autoFocus
            />
            <p className="error">Valid email required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />
            <p className="error">Password is required</p>
          </fieldset>
          <button type="submit">login</button>
          <div className="forgot" onClick={() => setStep("forgot")}>
            Forgot password?
          </div>
        </form>
      </div>
      <p>
        Don&apos;t have an account?{" "}
        <span onClick={() => setStep("signup")}>Sign up</span>
      </p>
    </main>
  );
};

export default SignIn;
