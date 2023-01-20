import axios from "axios";

const getBaseUrl = () => {
  var url = window.location.href;
  if (url.indexOf("http://localhost") === 0) {
    return "http://localhost:8280";
  } else {
    return url.substring(0, url.indexOf("/", 8));
  }
};

export const instance = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    "Access-Control-Allow-Origin": "*",
  },
});
