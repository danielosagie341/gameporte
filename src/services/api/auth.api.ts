import axiosInstance from '@/Utils/Https';

export type UserProps = {
  first_name: string;
  last_name: string;
  telephone: string;
  email: string;
  password: string;
};

export const Register = async (payload: UserProps) => {
  try {
    const url = `api/v1/auth/customer/register`;
    const response = await axiosInstance.post(url, payload);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const Login = async (payload: { email: string; password: string }) => {
  try {
    const url = `api/v1/auth/login`;
    const response = await axiosInstance.post(url, payload);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const refreshUser = async () => {
  try {
    const url = `api/v1/auth/me`;
    const response = await axiosInstance.get(url);

    return response.data;
  } catch (error) {
    throw error;
  }
};
