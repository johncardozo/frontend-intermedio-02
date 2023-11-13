import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const SignUp = () => {
  let { setStep } = useContext(AuthContext);
  return (
    <main>
      <h3>Welcome, Join us!</h3>
      <div className="card">
        <form autoComplete="off">
          <fieldset>
            <label htmlFor="fullName">Full name</label>
            <input type="text" id="fullName" />
            <p className="error">Required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="email">email</label>
            <input type="email" id="email" autoFocus />
            <p className="error">Valid email required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">password</label>
            <input type="password" id="password" />
            <p className="error">Password is required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="confirm">Confirm password</label>
            <input type="password" id="confirm" />
            <p className="error">required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="framework">Favorite framework</label>
            <select id="framework">
              <option value="">Select your framework</option>
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
            </select>
            <p className="error">required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="terms">
              <input type="checkbox" id="terms" /> Accept terms and conditions
            </label>
            <p className="error error-terms">required</p>
          </fieldset>
          <button type="submit">Register</button>
        </form>
      </div>
      <p>
        Already have an account?{" "}
        <span onClick={() => setStep("signin")}>Sign in</span>
      </p>
    </main>
  );
};

export default SignUp;
