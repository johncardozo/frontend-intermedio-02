import * as Yup from "yup";

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please, type a valid email!")
    .required("The email is required!"),
});
