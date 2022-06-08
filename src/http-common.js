import axios from "axios";

export default axios.create({
  baseURL: "https://testdb0607.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});

// http://localhost:8080/api