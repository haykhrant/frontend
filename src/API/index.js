import axios from "axios";
import EndpointFactory from "axios-endpoints";

const axiosInstance = axios.create({
  baseURL: "https://backend.eco-market.am",
  responseType: "json",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
  },
});

const Endpoint = EndpointFactory(axiosInstance);
const Endpoints = {
  register: new Endpoint("register"),
  login: new Endpoint("login"),
  categories: new Endpoint("categories"),
  products: new Endpoint("products"),
  productsByCategory: (id) => new Endpoint(`subcategory/${id}/products`),
};
export default Endpoints;
