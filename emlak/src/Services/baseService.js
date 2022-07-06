import axios from "axios";

export default class BaseServices {
  getByUserId(id) {
    return axios.get("http://localhost:8080/api/user/" + id);
  }

  createUsers(data) {
    return axios.post("http://localhost:8080/api/create", data);
  }
  getUser() {
    return axios.get("http://localhost:8080/api/users");
  }
  getILan() {
    return axios.get("http://localhost:8080/api/home/adverts");
  }
  getByIlanId(id) {
    return axios.get("http://localhost:8080/api/home/advert/" + id);
  }

  createIlan(data) {
    return axios.post("http://localhost:8080/api/home/create", data);
  }

  // getBaseUrl() {
  //   return "http://localhost:8080/";
  // }

  // getRequest(url) {
  //   return axios.get(this.getBaseUrl() + url);
  // }

  // postRequest(url) {
  //   return axios.post(this.getBaseUrl() + url);
  // }

  // putRequest(url) {
  //   return axios.put(this.getBaseUrl() + url);
  // }

  // deleteRequest(url) {
  //   return axios.delete(this.getBaseUrl() + url);
  // }
}
