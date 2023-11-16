import { useState } from "react";

import AuthContext from "./context/AuthContext";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";

const App = () => {
  const [step, setStep] = useState("signup");

  return (
    <AuthContext.Provider value={{ step, setStep }}>
      <div className="container">
        {step === "signin" && <SignIn />}
        {step === "signup" && <SignUp />}
        {step === "forgot" && <ForgotPassword />}
      </div>
    </AuthContext.Provider>
  );
};

export default App;
