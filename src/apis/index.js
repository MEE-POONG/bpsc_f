import axios from "axios";
axios.defaults.baseURL = "https://api.thaibpsc.com";

export const IMAGE_URL = "https://api.thaibpsc.com/image/";
export const DOWNLOAD_URL = "https://api.thaibpsc.com/documentDownload/";

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

// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (err) => {
//     return new Promise((resolve, reject) => {
//       const originalReq = err.config;
//       if (err?.response?.status === 401 && err.config && !err.config.__isRetryRequest) {
//         originalReq._retry = true;
//         var myHeaders = new Headers();
//         myHeaders.append("Content-Type", "application/json");
//         var raw = JSON.stringify({token: localStorage.getItem("token")});

//         var requestOptions = {
//           method: "POST",
//           headers: myHeaders,
//           body: raw,
//           redirect: "follow",
//         };

//         let res = fetch("https://api.thaibpsc.com/refresh-token", requestOptions)
//           .then((res) => res.json())
//           .then((res) => {
//             console.log(res);
//             originalReq.headers["Token"] = res.token;
//             originalReq.headers["Device"] = "device";

//             return axios(originalReq);
//           });

//         resolve(res);
//       }

//       return Promise.reject(err);
//     });
//   }
// );

const REFRESH_TOKEN = () => {
  const token = localStorage.getItem("refresh-token");

  var data = JSON.stringify({
    token: token,
  });

  var config = {
    method: "post",
    url: "/refresh-token",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config)
    .then(function (response) {
      // console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("refresh-token", response.data.refreshToken);
      return response.data;
    })
    .catch(function (error) {
      // console.log(error);
      return;
    });
};

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
export const API_LOGIN_FACEBOOK = (facebookToken) => {
  var data = JSON.stringify({facebookToken: facebookToken});
  // console.log(data);
  var config = {
    method: "post",
    url: "/facebookLogin",
    headers: {
      "Content-Type": "application/json",
    },
    data,
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
export const API_GET_ELEARNING_BY_ID = async (id) => {
  let headers = {};
  if (localStorage.getItem("refresh-token")) {
    const reft = await REFRESH_TOKEN();
    headers = {
      Authorization: "Bearer " + reft?.accessToken,
      "Content-Type": "application/json",
    };
  }
  var config = {
    method: "get",
    url: `/elearning/${id}`,
    headers: headers,
  };

  return axios(config);
};
export const API_GET_SHARING = async (title = "", page = "", size = "", tag = "") => {
  let headers = {};
  if (localStorage.getItem("refresh-token")) {
    const reft = await REFRESH_TOKEN();
    headers = {
      Authorization: "Bearer " + reft?.accessToken,
      "Content-Type": "application/json",
    };
  }

  var config = {
    method: "get",
    url: `/sharing?title=${title}&size=${size}&tag=${tag}&page=${page}`,
    headers: headers,
  };

  return axios(config);
};
export const API_GET_LEARNING = async (title = "", page = "", size = "", tag = "") => {
  let headers = {};
  if (localStorage.getItem("refresh-token")) {
    const reft = await REFRESH_TOKEN();
    headers = {
      Authorization: "Bearer " + reft?.accessToken,
      "Content-Type": "application/json",
    };
  }
  var config = {
    method: "get",
    url: `/elearning?title=${title}&size=${size}&tag=${tag}&page=${page}`,
    headers: headers,
  };

  return axios(config);
};
export const API_GET_LEARNING_COMMENT = (id, size = 1, page = "") => {
  var config = {
    method: "get",
    url: `/comment/${id}?size=${size}&page=${page}`,
  };

  return axios(config);
};
export const API_GET_LEARNING_DOCUMENT = (id, page = "", size = "") => {
  var config = {
    method: "get",
    url: `/document/${id}?size=${size}&page=${page}`,
  };

  return axios(config);
};
export const API_GET_GALLERY = (page = "", size = "") => {
  var config = {
    method: "get",
    url: `/gallery?size=${size}&page=${page}`,
  };

  return axios(config);
};
export const API_GET_GALLERY_BY_ID = (id, page = "", size = "") => {
  var config = {
    method: "get",
    url: `/gallery/${id}?size=${size}&page=${page}`,
  };

  return axios(config);
};
export const API_GET_GALLERY_PHOTO_BY_ID = (id, page = "", size = "") => {
  var config = {
    method: "get",
    url: `/galleryPhoto/${id}?size=${size}&page=${page}`,
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
export const API_GET_DOCTOR = (title = "", page = "", size = "", tag = "") => {
  var config = {
    method: "get",
    url: `/doctor?title=${title}&size=${size}&tag=${tag}&page=${page}`,
  };

  return axios(config);
};
export const API_GET_FAVORITE_SHARING = async (page = "", size = "") => {
  const reft = await REFRESH_TOKEN();

  var config = {
    method: "get",
    url: `/favoriteSharing?size=${size}&page=${page}`,
    headers: {
      Authorization: "Bearer " + reft?.accessToken,
      "Content-Type": "application/json",
    },
  };

  return axios(config);
};
export const API_GET_MY_SHARING = async () => {
  const reft = await REFRESH_TOKEN();

  var config = {
    method: "get",
    url: `/mySharing`,
    headers: {
      Authorization: "Bearer " + reft?.accessToken,
      "Content-Type": "application/json",
    },
  };

  return axios(config);
};
export const API_GET_DRAFT_SHARING = async () => {
  const reft = await REFRESH_TOKEN();

  var config = {
    method: "get",
    url: `/draftSharing`,
    headers: {
      Authorization: "Bearer " + reft?.accessToken,
      "Content-Type": "application/json",
    },
  };

  return axios(config);
};

export const API_GET_ELEARNING_SHARING = async (page = "", size = "") => {
  const reft = await REFRESH_TOKEN();

  var config = {
    method: "get",
    url: `/favoriteElearning?size=${size}&page=${page}`,
    headers: {
      Authorization: "Bearer " + reft?.accessToken,
      "Content-Type": "application/json",
    },
  };

  return axios(config);
};
export const API_GET_USER_INFO = async (id) => {
  const reft = await REFRESH_TOKEN();

  var config = {
    method: "get",
    url: `/user/${id}`,
    headers: {
      Authorization: "Bearer " + reft?.accessToken,
      "Content-Type": "application/json",
    },
  };

  return axios(config);
};
export const API_GET_USER_UPDATE = async (id, userData) => {
  const reft = await REFRESH_TOKEN();

  var data = JSON.stringify(userData);

  var config = {
    method: "put",
    url: `/user/updateUser/${id}`,
    headers: {
      Authorization: "Bearer " + reft?.accessToken,
      "Content-Type": "application/json",
    },
    data,
  };

  return axios(config);
};
export const API_GET_USER_PWD_UPDATE = async (id, userData) => {
  const reft = await REFRESH_TOKEN();

  var data = JSON.stringify(userData);

  var config = {
    method: "put",
    url: `/user/changePassword/${id}`,
    headers: {
      Authorization: "Bearer " + reft?.accessToken,
      "Content-Type": "application/json",
    },
    data,
  };

  return axios(config);
};
export const API_GET_USER_UPDATE_PHOTO = async (id, userData) => {
  const reft = await REFRESH_TOKEN();

  var FormData = require("form-data");
  var data = new FormData();
  data.append("file", userData);

  var config = {
    method: "put",
    url: `/user/profilePicture/${id}`,
    headers: {
      Authorization: "Bearer " + reft?.accessToken,
      "Content-Type": "application/json",
    },
    data,
  };

  return axios(config);
};

export const API_CREATE_SHARING = async (userData) => {
  const reft = await REFRESH_TOKEN();

  var data = JSON.stringify(userData);

  var config = {
    method: "post",
    url: `/sharing/`,
    headers: {
      Authorization: "Bearer " + reft?.accessToken,
      "Content-Type": "application/json",
    },
    data,
  };

  return axios(config);
};
export const API_CREATE_COMMENT = async (id, userData) => {
  const reft = await REFRESH_TOKEN();

  var data = JSON.stringify(userData);

  var config = {
    method: "post",
    url: `/comment/${id}`,
    headers: {
      Authorization: "Bearer " + reft?.accessToken,
      "Content-Type": "application/json",
    },
    data,
  };

  return axios(config);
};
export const API_UPDATE_SHARING_PHOTO = async (id, userData) => {
  const reft = await REFRESH_TOKEN();

  var FormData = require("form-data");
  var data = new FormData();
  data.append("file", userData);

  var config = {
    method: "put",
    url: `/sharingPicture/${id}`,
    headers: {
      Authorization: "Bearer " + reft?.accessToken,
      "Content-Type": "application/json",
    },
    data,
  };

  return axios(config);
};
export const API_fAVORITE_E_lEARNING = async (id) => {
  const reft = await REFRESH_TOKEN();

  var config = {
    method: "post",
    url: `/favoriteElearning/${id}`,
    headers: {
      Authorization: "Bearer " + reft?.accessToken,
      "Content-Type": "application/json",
    },
  };

  return axios(config);
};
export const API_fAVORITE_SHARING = async (id) => {
  const reft = await REFRESH_TOKEN();

  var config = {
    method: "post",
    url: `/favoriteSharing/${id}`,
    headers: {
      Authorization: "Bearer " + reft?.accessToken,
      "Content-Type": "application/json",
    },
  };

  return axios(config);
};

export const API_GET_TAGS = () => {
  var config = {
    method: "get",
    url: "/tag?size=100000",
  };

  return axios(config);
};

// export const API_CHECK_NOTIFICATION = async () => {
//   const reft = await REFRESH_TOKEN();

//   var config = {
//     method: "post",
//     url: `/checkNotification`,
//     headers: {
//       Authorization: "Bearer " + reft?.accessToken,
//       "Content-Type": "application/json",
//     },
//   };

//   return axios(config);
// };

export const API_CHECK_NOTIFICATION = async () => {
  const reft = await REFRESH_TOKEN();

  var config = {
    method: "get",
    url: `/checkNotification`,
    headers: {
      Authorization: "Bearer " + reft?.accessToken,
      "Content-Type": "application/json",
    },
  };

  return axios(config);
};

export const API_GET_NOTIFICATION = async (page = "", size = "") => {
  const reft = await REFRESH_TOKEN();

  var config = {
    method: "get",
    url: `/notification?size=${size}&page=${page}`,
    headers: {
      Authorization: "Bearer " + reft?.accessToken,
      "Content-Type": "application/json",
    },
  };

  return axios(config);
};
