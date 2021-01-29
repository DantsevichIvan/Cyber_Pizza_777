const yup = require("yup");
const emailSchema = yup.string().required().email;

const passwordSchema = yup.string().required();

module.exports = registrationSchema = yup.object().shape({
  name: yup.string().required(),
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: passwordSchema.oneOf(
    [yup.ref("password"), null],
    `Password don't match`
  ),
});
