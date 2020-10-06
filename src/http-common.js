import axios from "axios";

export default axios.create({
  baseURL: `https://fanvue-intervue.s3-eu-west-1.amazonaws.com/`,
  headers: {
    "Content-type": "application/json",
  },
});
