import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /(?=.*[\W])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
      "Password must have lower, upper, nums, symbols"
    )
    .required("Password is required"),
  confirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirmation is required"),
  framework: Yup.string()
    .oneOf(["react", "vue", "angular"], "Must select a framework")
    .required("Framework is required"),
  terms: Yup.bool().oneOf([true], "You must accept the terms"),
});
