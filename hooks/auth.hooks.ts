// services/auth.service.ts
import axios from "axios";
import { BASE_API_URL } from "../src/helpers/app.constants";

export const registerCustomer = async (data: any) => {
  console.log("Registering customer with data:", data);
  const response = await axios.post(`${BASE_API_URL}users/register`, data);
  return response.data;
};

export const registerArtisan = async (data: any) => {
  console.log("Registering artisan with data:", data);
  const response = await axios.post(`${BASE_API_URL}users/register`, data);
  return response.data;
};

export const loginCustomer = async (data: any) => {
  const response = await axios.post(`${BASE_API_URL}users/login`, data);
  return response.data;
};

export const verifyOtp = async (data: { phone: string; otp: string }) => {
  const response = await axios.post(`${BASE_API_URL}users/verify-otp`, data);
  return response.data;
};
