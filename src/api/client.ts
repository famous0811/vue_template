import axios from "axios";

interface ApiUriTypes {
  production: string;
  development: string;
  test: string;
}
function apiUrl(): string {
  if (!process.env.REACT_APP_PROD_API_URI || !process.env.REACT_APP_DEV_API_URI)
    throw new Error("API URI not defined. (ENV)");

  const apiUriPreference: ApiUriTypes = {
    production: process.env.REACT_APP_PROD_API_URI,
    development: process.env.REACT_APP_DEV_API_URI,
    test: process.env.REACT_APP_DEV_API_URI,
  };
  return apiUriPreference[process.env.NODE_ENV];
}

const baseClient = axios.create({
  baseURL: apiUrl(),
  headers: {
    "Access-Control-Expose-Headers": "x-access-token",
  },
});

export default baseClient;
