import axios from "axios";
axios.defaults.baseURL = "https://api.thaibpsc.com";

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const API_LOGIN = (email, password) => {
  var data = JSON.stringify({email, password});
  var config = {
    method: "post",
    url: "/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config);
};
export const API_REGISTER = (formRegister) => {
  var data = JSON.stringify(formRegister);

  var config = {
    method: "post",
    url: "/register",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config);
};
export const API_FORGET_PASSWORD = (email) => {
  var config = {
    method: "post",
    url: `https://api.thaibpsc.com/forgetPassword?email=${email}`,
    headers: {
      Cookie: "__cfduid=d39907312190412f688bad9245ac0bdce1611394839",
    },
  };
  return axios(config);
};
export const API_RE_VERIFICATION = (email) => {
  var config = {
    method: "post",
    url: `https://api.thaibpsc.com/ReSendVerification?email=${email}`,
    headers: {
      Cookie: "__cfduid=d39907312190412f688bad9245ac0bdce1611394839",
    },
  };

  return axios(config);
};
// export const API_LOGIN = () => {
//   // Add a response interceptor
//   return axios.interceptors.response.use(
//     function (response) {
//       // Any status code that lie within the range of 2xx cause this function to trigger
//       // Do something with response data
//       console.log(response);
//       return response;
//     },
//     function (error) {
//       if (error.response && error.response.status === 401) {
//         redirect("/");
//         return;
//       }
//       return Promise.reject(error);
//     }
//   );
// };
