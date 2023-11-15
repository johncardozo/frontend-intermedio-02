import { useFormik } from "formik";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { forgotPasswordSchema } from "../schemas/forgotPasswordSchema";

const ForgotPassword = () => {
  let { setStep } = useContext(AuthContext);
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit,
  });

  function onSubmit() {
    console.log(values);
  }

  return (
    <main>
      <h3>Forgot password?</h3>
      <div className="card">
        <form onSubmit={handleSubmit} autoComplete="off">
          <fieldset>
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              autoFocus
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </fieldset>
          <button type="submit">Remember me!</button>
        </form>
      </div>
      <p>
        Already have an account?{" "}
        <span onClick={() => setStep("signin")}>Sign in</span>
      </p>
    </main>
  );
};

export default ForgotPassword;
