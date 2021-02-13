import axios from "axios";
axios.defaults.baseURL = "https://api.thaibpsc.com";

export const IMAGE_URL = "https://api.thaibpsc.com/image/";
export const DOWNLOAD_URL = "https://api.thaibpsc.com/documentDownload/";
import Swal from "sweetalert2";

const REFRESH_TOKEN = async () => {
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

  try {
    const response = await axios(config);
    localStorage.setItem("token", response.data.accessToken);
    localStorage.setItem("refresh-token", response.data.refreshToken);
    return response.data;
  } catch (error) {
    return;
  }
};

const API_CONFIG = async (config) => {
  let headers = {"Content-Type": "application/json"};
  if (localStorage.getItem("token")) {
    headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    };
  }
  try {
    config.headers = headers;
    const res = await axios(config);
    if (res.status === 401) {
      const reft = await REFRESH_TOKEN();
      headers = {
        Authorization: "Bearer " + reft?.accessToken,
        "Content-Type": "application/json",
      };
      config.headers = headers;
      return axios(config);
    }
    return res;
  } catch (error) {
    const reft = await REFRESH_TOKEN();
    headers = {
      Authorization: "Bearer " + reft?.accessToken,
      "Content-Type": "application/json",
    };
    config.headers = headers;
    return axios(config);
  }
};

export const API_LOGIN = (email, password) => {
  var data = JSON.stringify({email, password});
  var config = {
    method: "post",
    url: "/login",
    data: data,
  };

  return API_CONFIG(config);
};

export const API_LOGIN_FACEBOOK = (facebookToken) => {
  var data = JSON.stringify({facebookToken: facebookToken});
  var config = {
    method: "post",
    url: "/facebookLogin",
    data,
  };

  return API_CONFIG(config);
};

export const API_REGISTER = (formRegister) => {
  var data = JSON.stringify(formRegister);

  var config = {
    method: "post",
    url: "/register",
    data: data,
  };

  return API_CONFIG(config);
};

export const API_FORGET_PASSWORD = (email) => {
  var config = {
    method: "post",
    url: `/forgetPassword?email=${email}`,
  };
  return API_CONFIG(config);
};

export const API_CHANGE_FORGET_PASSWORD = (password, token) => {
  var data = JSON.stringify(password);

  var config = {
    method: "post",
    url: `/changeForgetPassword?token=${token}`,
    data: data,
  };

  return API_CONFIG(config);
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

  return API_CONFIG(config);
};

export const API_GET_SHARING_BY_ID = (id) => {
  var config = {
    method: "get",
    url: `/sharing/${id}`,
  };

  return API_CONFIG(config);
};

export const API_CRETE_ELEARNING = async (userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "get",
    url: `/elearning/`,
    data,
  };
  return API_CONFIG(config);
};

export const API_GET_ELEARNING_BY_ID = async (id) => {
  var config = {
    method: "get",
    url: `/elearning/${id}`,
  };
  return API_CONFIG(config);
};

export const API_DEL_ELEARNING_BY_ID = async (id) => {
  var config = {
    method: "delete",
    url: `/elearning/${id}`,
  };
  return API_CONFIG(config)
    .then(() => {
      return Swal.fire("สำเร็จ!", "ลบสำเร็จ!", "success");
    })
    .catch((e) => {
      return Swal.fire({
        icon: "error",
        title: e?.error,
        text: e?.message,
      });
    });
};

export const API_GET_SHARING = async (title = "", page = "", size = "", tag = "") => {
  var config = {
    method: "get",
    url: `/sharing?title=${title}&size=${size}&tag=${tag}&page=${page}`,
  };

  return API_CONFIG(config);
};
export const API_GET_LEARNING = async (title = "", page = "", size = "", tag = "") => {
  var config = {
    method: "get",
    url: `/elearning?title=${title}&size=${size}&tag=${tag}&page=${page}`,
  };

  return API_CONFIG(config);
};
export const API_GET_LEARNING_COMMENT = (id, size = 1, page = "") => {
  var config = {
    method: "get",
    url: `/comment/${id}?size=${size}&page=${page}`,
  };

  return API_CONFIG(config);
};

export const API_GET_LEARNING_DOCUMENT = (id, page = "", size = "") => {
  var config = {
    method: "get",
    url: `/document/${id}?size=${size}&page=${page}`,
  };

  return API_CONFIG(config);
};

export const API_GET_GALLERY = (page = "", size = "") => {
  var config = {
    method: "get",
    url: `/gallery?size=${size}&page=${page}`,
  };

  return API_CONFIG(config);
};

export const API_GET_GALLERY_BY_ID = (id, page = "", size = "") => {
  var config = {
    method: "get",
    url: `/gallery/${id}?size=${size}&page=${page}`,
  };

  return API_CONFIG(config);
};

export const API_GET_GALLERY_PHOTO_BY_ID = (id, page = "", size = "") => {
  var config = {
    method: "get",
    url: `/galleryPhoto/${id}?size=${size}&page=${page}`,
  };

  return API_CONFIG(config);
};

export const API_GET_EVENT = () => {
  var config = {
    method: "get",
    url: "/event",
  };

  return API_CONFIG(config);
};

export const API_GET_DOCTOR = (title = "", page = "", size = "", tag = "") => {
  var config = {
    method: "get",
    url: `/doctor?title=${title}&size=${size}&tag=${tag}&page=${page}`,
  };

  return API_CONFIG(config);
};

export const API_GET_FAVORITE_SHARING = async (title = "", page = "", size = 12) => {
  var config = {
    method: "get",
    url: `/favoriteSharing?size=${size}&page=${page}`,
  };

  return API_CONFIG(config);
};

export const API_GET_MY_SHARING = async (title = "", page = "", size = 12) => {
  var config = {
    method: "get",
    url: `/mySharing?size=${size}&page=${page}`,
  };

  return API_CONFIG(config);
};

export const API_GET_DRAFT_SHARING = async (title = "", page = "", size = 12) => {
  var config = {
    method: "get",
    url: `/draftSharing?size=${size}&page=${page}`,
  };

  return API_CONFIG(config);
};

export const API_GET_ELEARNING_SHARING = async (title = "", page = "", size = 12) => {
  var config = {
    method: "get",
    url: `/favoriteElearning?size=${size}&page=${page}`,
  };

  return API_CONFIG(config);
};

export const API_GET_USER_INFO = async (id) => {
  var config = {
    method: "get",
    url: `/user/${id}`,
  };

  return API_CONFIG(config);
};

export const API_GET_USER_UPDATE = async (id, userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "put",
    url: `/user/updateUser/${id}`,
    data,
  };

  return API_CONFIG(config);
};

export const API_GET_USER_PWD_UPDATE = async (userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "put",
    url: `/user/changePassword/`,
    data,
  };

  return API_CONFIG(config);
};

export const API_GET_USER_UPDATE_PHOTO = async (id, userData) => {
  var FormData = require("form-data");
  var data = new FormData();
  data.append("file", userData);

  var config = {
    method: "put",
    url: `/user/profilePicture/${id}`,
    data,
  };

  return API_CONFIG(config);
};

export const API_CREATE_SHARING = async (userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "post",
    url: `/sharing/`,
    data,
  };

  return API_CONFIG(config);
};

export const API_CREATE_COMMENT = async (id, userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "post",
    url: `/comment/${id}`,
    data,
  };

  return API_CONFIG(config);
};

export const API_UPDATE_SHARING_PHOTO = async (id, userData) => {
  var FormData = require("form-data");
  var data = new FormData();
  data.append("file", userData);

  var config = {
    method: "put",
    url: `/sharingPicture/${id}`,
    data,
  };

  return API_CONFIG(config);
};

export const API_DELETE_SHARING_PHOTO = async (id) => {
  var config = {
    method: "delete",
    url: `/sharingPicture/${id}`,
  };

  return API_CONFIG(config)
    .then(() => {
      return Swal.fire("สำเร็จ!", "ลบสำเร็จ!", "success");
    })
    .catch((e) => {
      return Swal.fire({
        icon: "error",
        title: e?.error,
        text: e?.message,
      });
    });
};

export const API_DELETE_SHARING = async (id) => {
  var config = {
    method: "delete",
    url: `/sharing/${id}`,
  };

  return API_CONFIG(config)
    .then(() => {
      return Swal.fire("สำเร็จ!", "ลบสำเร็จ!", "success");
    })
    .catch((e) => {
      return Swal.fire({
        icon: "error",
        title: e?.error,
        text: e?.message,
      });
    });
};

export const API_fAVORITE_E_lEARNING = async (id) => {
  var config = {
    method: "post",
    url: `/favoriteElearning/${id}`,
  };

  return API_CONFIG(config);
};
export const API_UN_fAVORITE_E_lEARNING = async (id) => {
  var config = {
    method: "delete",
    url: `/favoriteElearning/${id}`,
  };

  return API_CONFIG(config);
};

export const API_fAVORITE_SHARING = async (id) => {
  var config = {
    method: "post",
    url: `/favoriteSharing/${id}`,
  };

  return API_CONFIG(config);
};

export const API_UN_fAVORITE_SHARING = async (id) => {
  var config = {
    method: "delete",
    url: `/favoriteSharing/${id}`,
  };

  return API_CONFIG(config);
};

export const API_GET_TAGS = () => {
  var config = {
    method: "get",
    url: "/tag?size=100000",
  };

  return API_CONFIG(config);
};

export const API_CHECK_NOTIFICATION = async () => {
  var config = {
    method: "get",
    url: `/checkNotification`,
  };

  return API_CONFIG(config);
};

export const API_GET_NOTIFICATION = async (page = "", size = "") => {
  var config = {
    method: "get",
    url: `/notification?size=${size}&page=${page}`,
  };

  return API_CONFIG(config);
};

export const API_CREATE_GALLERY = async (userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "post",
    url: `/gallery/`,
    data,
  };
  return API_CONFIG(config);
};

export const API_UPDATE_GALLERY_COVER = async (id, userData) => {
  var FormData = require("form-data");
  var data = new FormData();
  data.append("file", userData);

  var config = {
    method: "put",
    url: `/galleryCover/${id}`,
    data,
  };

  return API_CONFIG(config);
};

export const API_CREATE_GALLERY_PHOTO = async (id, userData) => {
  var FormData = require("form-data");
  var data = new FormData();
  Array.from(userData).map((e) => {
    data.append("multi-files", e);
  });
  var config = {
    method: "post",
    url: `/galleryPhoto/${id}`,
    data,
  };

  return API_CONFIG(config);
};
