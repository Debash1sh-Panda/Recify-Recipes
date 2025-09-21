import * as yup from "yup";

const RegisterSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .required("Username is required"),

  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .matches(/[@$!%*?&#]/, "Must contain at least one special character")
    .required("Password is required"),

  gender: yup
    .string()
    .oneOf(["male", "female", "other"], "Invalid gender option")
    .required("Gender is required"),

  dob: yup
    .date()
    .max(new Date(), "Date of birth cannot be in the future")
    .required("Date of birth is required"),
});

export default RegisterSchema;
export type RegisterSchemaType=yup.InferType<typeof RegisterSchema>;

