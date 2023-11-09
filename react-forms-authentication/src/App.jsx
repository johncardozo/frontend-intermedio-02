import { useState } from "react";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";

const App = () => {
  const [step, setStep] = useState("signin");

  return (
    <div className="container">
      {step === "signin" && <SignIn />}
      {step === "signup" && <SignUp />}
      {step === "forgot" && <ForgotPassword />}
    </div>
  );
};

export default App;
