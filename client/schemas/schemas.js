import * as Yup from "yup";

const emailSchema = Yup.string().required("Required").email();
const passwordSchema = Yup.string().required("Required");

export const loginSchema = Yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
});

export const registrationSchema = Yup.object().shape({
  email: emailSchema,
  name: Yup.string().required("Required"),
  password: passwordSchema,
  confirmPassword: passwordSchema.oneOf(
    [Yup.ref("password"), null],
    `Password don't match`
  ),
});
export const orderSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  phone: Yup.number().required("Required"),
  street: Yup.string().required("Required"),
  house: Yup.number().required("Required"),
  flat: Yup.number().required("Required"),
});
