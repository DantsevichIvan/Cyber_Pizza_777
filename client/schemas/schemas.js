import * as yup from "yup";

export const orderSchema = yup.object().shape({
  name: yup.string().required("Required"),
  phone: yup.number().required("Required"),
  street: yup.string().required("Required"),
  house: yup.number().required("Required"),
  flat: yup.number().required("Required"),
});

const emailSchema = yup.string().required("Required").email;
const passwordSchema = yup.string().required("Required");

export const registrationSchema = yup.object().shape({
  email: emailSchema,
  name: yup.string().required("Required"),
  password: passwordSchema,
  confirmPassword: passwordSchema.oneOf(
    [yup.ref("password"), null],
    `Password don't match`
  ),
});

export const loginSchema = yup.object().shape({
  email:emailSchema,
  password:passwordSchema
})
