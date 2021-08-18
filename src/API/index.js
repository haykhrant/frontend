import axios from "axios";
import EndpointFactory from "axios-endpoints";

const axiosInstance = axios.create({
  baseURL: "http://18.119.99.114:443",
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
};
export default Endpoints;
