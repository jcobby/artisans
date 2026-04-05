// validation/customerRegister.schema.ts
import * as yup from "yup";

export const customerRegisterSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .min(10, "Phone number is too short"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
  acceptTerms: yup
    .boolean()
    .oneOf([true], "You must accept the terms"),
});

export const artisanRegisterSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .min(10, "Phone number is too short"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
  acceptTerms: yup
    .boolean()
    .oneOf([true], "You must accept the terms"),
  profession: yup.string().required("Profession is required"),
});

export const loginSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Phone number is required")
    .min(10, "Phone number is too short"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),
});