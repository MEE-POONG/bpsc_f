import axios from "axios";
axios.defaults.baseURL = "https://api.thaibpsc.com";

export const IMAGE_URL = "https://api.thaibpsc.com/image/";

// axios.interceptors.request.use(
//   function (config) {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return new Promise((resolve, reject) => {
      const originalReq = err.config;
      if (err?.response?.status === 401 && err.config && !err.config.__isRetryRequest) {
        originalReq._retry = true;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({token: localStorage.getItem("token")});

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        let res = fetch("https://api.thaibpsc.com/refresh-token", requestOptions)
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            originalReq.headers["Token"] = res.token;
            originalReq.headers["Device"] = "device";

            return axios(originalReq);
          });

        resolve(res);
      }

      return Promise.reject(err);
    });
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
    url: `/forgetPassword?email=${email}`,
  };
  return axios(config);
};
export const API_CHANGE_FORGET_PASSWORD = (password, token) => {
  var data = JSON.stringify(password);

  var config = {
    method: "post",
    url: `/changeForgetPassword?token=${token}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config);
};
export const API_VERIFICATION = (token) => {
  var config = {
    method: "post",
    url: `/verify?token=${token}`,
  };
  return axios(config);
};
export const API_RE_VERIFICATION = (email) => {
  var config = {
    method: "post",
    url: `/ReSendVerification?email=${email}`,
  };

  return axios(config);
};
export const API_GET_FAQ = () => {
  var config = {
    method: "get",
    url: "/faq",
  };

  return axios(config);
};
export const API_GET_SHARING_BY_ID = (id) => {
  var config = {
    method: "get",
    url: `/sharing/${id}`,
  };

  return axios(config);
};
export const API_GET_SHARING = (title = "", page = "", size = "", tag = "") => {
  var config = {
    method: "get",
    url: `/sharing?title=${title}&size=${size}&tag=${tag}&page=${page}`,
  };

  return axios(config);
};
export const API_GET_EVENT = () => {
  var config = {
    method: "get",
    url: "/event",
  };

  return axios(config);
};
export const API_GET_DOCTOR = () => {
  var config = {
    method: "get",
    url: "/doctor",
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
