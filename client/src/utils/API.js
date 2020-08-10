import axios from "axios";

export default {
  signUp: function(data) {
    return axios.post("/api/signup", data);
  },
};