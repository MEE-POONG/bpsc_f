import axios from "axios";
axios.defaults.baseURL = "";

export const BASE_URL = "/";
export const IMAGE_URL = "/image/";
export const DOWNLOAD_URL = "/documentDownload/";
import Swal from "sweetalert2";
const FileDownload = require("js-file-download");

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
    error.response.data.error.code === "REFRESH_TOKEN_INVALID" && localStorage.clear();
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

export const API_GET_FAQ = (page = "", size = "10") => {
  var config = {
    method: "get",
    url: `/faq?size=${size}&page=${page}`,
  };

  return API_CONFIG(config);
};

export const API_GET_PHOTO_HOME = (page = "", size = "") => {
  var config = {
    method: "get",
    url: `/galleryPhotoHome?size=${size}&page=${page}`,
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
    .then((e) => {
      return Swal.fire("สำเร็จ!", "ลบสำเร็จ!", "success");
    })
    .catch((e) => {
      return Swal.fire({
        icon: "error",
        title: e?.response?.data?.error,
        text: e?.response?.data?.message,
      });
    });
};

export const API_GET_SHARING = async (
  title = "",
  page = "",
  size = "",
  tag = "",
  type = ""
) => {
  var config = {
    method: "get",
    url: `/sharing?title=${title}&size=${size}&tag=${tag}&page=${page}&type=${type}`,
  };

  return API_CONFIG(config);
};
export const API_GET_LEARNING = async (
  title = "",
  page = "",
  size = "",
  tag = "",
  type = ""
) => {
  var config = {
    method: "get",
    url: `/elearning?title=${title}&size=${size}&tag=${tag}&page=${page}&type=${type}`,
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

export const API_GET_DOCTOR = (title = "", page = "", size = "", hospital = "") => {
  var config = {
    method: "get",
    url: `/doctor?title=${title}&size=${size}&tag=${hospital}&page=${page}`,
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

  if (localStorage.getItem("token")) {
    return API_CONFIG(config);
  }
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

export const API_UPDATE_SHARING = async (id, userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "put",
    url: `/sharing/${id}`,
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

export const API_PUT_COMMENT = async (id, userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "put",
    url: `/comment/${id}`,
    data,
  };

  return API_CONFIG(config);
};

export const API_DELETE_COMMENT = async (id, userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "delete",
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
        title: e?.response?.data?.error,
        text: e?.response?.data?.message,
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
        title: e?.response?.data?.error,
        text: e?.response?.data?.message,
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
  if (localStorage.getItem("token")) {
    return API_CONFIG(config);
  }
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

export const API_PUT_GALLERY = async (id, userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "put",
    url: `/gallery/${id}`,
    data,
  };
  return API_CONFIG(config);
};

export const API_DELETE_GALLERY = async (id) => {
  let data = "";

  var config = {
    method: "delete",
    url: `/gallery/${id}`,
    data: data,
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

export const API_CREATE_LEANING = async (userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "post",
    url: `/elearning/`,
    data,
  };
  return API_CONFIG(config);
};

export const API_UPDATE_LEANING = async (id, userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "put",
    url: `/elearning/${id}`,
    data,
  };
  return API_CONFIG(config);
};

export const API_DELETE_LEANING = async (id) => {
  var config = {
    method: "delete",
    url: `/elearning/${id}`,
  };
  return API_CONFIG(config);
};

export const API_UPDATE_LEANING_COVER = async (id, userData) => {
  var FormData = require("form-data");
  var data = new FormData();
  data.append("file", userData);

  var config = {
    method: "put",
    url: `/elearningPicture/${id}`,
    data,
  };

  return API_CONFIG(config);
};

export const API_GET_EVENT = (page = "", size = "") => {
  var config = {
    method: "get",
    url: `/event?size=${size}&page=${page}`,
  };

  return API_CONFIG(config);
};

export const API_CREATE_DOCUMENT = async (id, userData) => {
  var FormData = require("form-data");
  var data = new FormData();
  Array.from(userData).map((e) => {
    data.append("multi-files", e);
  });
  var config = {
    method: "post",
    url: `/document/${id}`,
    data,
  };

  return API_CONFIG(config);
};

export const API_DELETE_DOCUMENT = async (id) => {
  var config = {
    method: "delete",
    url: `/document/${id}`,
  };

  return API_CONFIG(config)
    .then((e) => {
      return Swal.fire("สำเร็จ!", "ลบสำเร็จ!", "success");
    })
    .catch((e) => {
      return Swal.fire({
        icon: "error",
        title: e?.response?.data?.error,
        text: e?.response?.data?.message,
      });
    });
};

export const API_CREATE_EVENT = async (userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "post",
    url: `/event/`,
    data,
  };

  return API_CONFIG(config);
};

export const API_GET_EVENT_BY_ID = async (id, userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "get",
    url: `/event/${id}`,
    data,
  };

  return API_CONFIG(config);
};

export const API_UPDATE_EVENT = async (id, userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "put",
    url: `/event/${id}`,
    data,
  };

  return API_CONFIG(config);
};

export const API_DELETE_EVENT = async (id) => {
  var config = {
    method: "delete",
    url: `/event/${id}`,
  };

  return API_CONFIG(config);
};

export const API_CREATE_TAG = async (userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "post",
    url: `/tag/`,
    data,
  };

  return API_CONFIG(config);
};

export const API_GET_TAG_BY_ID = async (id, userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "get",
    url: `/tag/${id}`,
    data,
  };

  return API_CONFIG(config);
};

export const API_UPDATE_TAG = async (id, userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "put",
    url: `/tag/${id}`,
    data,
  };

  return API_CONFIG(config);
};

export const API_DELETE_TAG = async (id) => {
  var config = {
    method: "delete",
    url: `/tag/${id}`,
  };

  return API_CONFIG(config);
};

export const API_CREATE_DOCTOR = async (userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "post",
    url: `/doctor/`,
    data,
  };

  return API_CONFIG(config);
};

export const API_UPDATE_DOCTOR_COVER = async (id, userData) => {
  var FormData = require("form-data");
  var data = new FormData();
  data.append("file", userData);

  var config = {
    method: "put",
    url: `/doctorPicture/${id}`,
    data,
  };

  return API_CONFIG(config);
};

export const API_GET_DOCTOR_BY_ID = async (id) => {
  var config = {
    method: "get",
    url: `/doctor/${id}`,
  };

  return API_CONFIG(config);
};

export const API_UPDATE_DOCTOR = async (id, userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "put",
    url: `/doctor/${id}`,
    data,
  };

  return API_CONFIG(config);
};

export const API_DEL_DOCTOR_BY_ID = async (id) => {
  var config = {
    method: "delete",
    url: `/doctor/${id}`,
  };
  return API_CONFIG(config)
    .then((e) => {
      return Swal.fire("สำเร็จ!", "ลบสำเร็จ!", "success");
    })
    .catch((e) => {
      return Swal.fire({
        icon: "error",
        title: e?.response?.data?.error,
        text: e?.response?.data?.message,
      });
    });
};

export const API_GET_HOSPITAL = async () => {
  var config = {
    method: "get",
    url: `/hospital/`,
  };

  return API_CONFIG(config);
};

export const API_GET_SHARING_FAV = async () => {
  var config = {
    method: "get",
    url: `/sharing?order=favorite`,
  };

  return API_CONFIG(config);
};

export const API_GET_SHARING_FAV_ORDER = async () => {
  var config = {
    method: "get",
    url: `/sharing`,
    // url: `/sharing?order=favorite`,
  };

  return API_CONFIG(config);
};
export const API_GET_ELEARNING_FAV_ORDER = async () => {
  var config = {
    method: "get",
    url: `/elearning?order=favorite`,
  };

  return API_CONFIG(config);
};
export const API_UPDATE_GALLERY_PHOTO = async (id, userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "put",
    url: `/galleryPhoto/${id}`,
    data,
  };

  return API_CONFIG(config);
};

export const API_DEL_GALLERY_PHOTO_BY_ID = async (id) => {
  var config = {
    method: "delete",
    url: `/galleryPhoto/${id}`,
  };
  return API_CONFIG(config)
    .then((e) => {
      return Swal.fire("สำเร็จ!", "ลบสำเร็จ!", "success");
    })
    .catch((e) => {
      return Swal.fire({
        icon: "error",
        title: e?.response?.data?.error,
        text: e?.response?.data?.message,
      });
    });
};

export const API_CREATE_FAQ = async (userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "post",
    url: `/faq/`,
    data,
  };

  return API_CONFIG(config);
};

export const API_GET_FAQ_BY_ID = async (id, userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "get",
    url: `/faq/${id}`,
    data,
  };

  return API_CONFIG(config);
};

export const API_UPDATE_FAQ = async (id, userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "put",
    url: `/faq/${id}`,
    data,
  };

  return API_CONFIG(config);
};

export const API_DELETE_FAQ = async (id) => {
  var config = {
    method: "delete",
    url: `/faq/${id}`,
  };

  return API_CONFIG(config);
};

export const API_CREATE_HOSPITAL = async (userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "post",
    url: `/hospital/`,
    data,
  };

  return API_CONFIG(config);
};

export const API_GET_HOSPITAL_BY_ID = async (id, userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "get",
    url: `/hospital/${id}`,
    data,
  };

  return API_CONFIG(config);
};

export const API_UPDATE_HOSPITAL = async (userData) => {
  var data = JSON.stringify(userData);

  var config = {
    method: "put",
    url: `/hospital`,
    data,
  };

  return API_CONFIG(config);
};

export const API_DELETE_HOSPITAL = async (id) => {
  var config = {
    method: "delete",
    url: `/hospital/${id}`,
  };

  return API_CONFIG(config);
};

export const API_GET_ISFIRSTLOGIN = async () => {
  var config = {
    method: "get",
    url: `/isfirstlogin`,
  };

  return API_CONFIG(config);
};

export const API_GET_MANUAL = async () => {
  var config = {
    method: "get",
    url: `/manual`,
    responseType: "blob",
  };

  return API_CONFIG(config).then((response) => {
    FileDownload(response.data, "manual.pdf");
  });
};

export const API_GET_RANDOMSHARINGTAG = async (type) => {
  var config = {
    method: "get",
    url: `/randomSharingTag?type=${type}`,
  };

  return API_CONFIG(config);
};

export const API_GET_RANDOMDOCTOR = async (type) => {
  var config = {
    method: "get",
    url: `/randomDoctorTag?type=${type}`,
  };

  return API_CONFIG(config);
};

export const API_GET_RANDOMELEARNINGTAG = async (type) => {
  var config = {
    method: "get",
    url: `/randomElearningTag?type=${type}`,
  };

  return API_CONFIG(config);
};

export const API_GET_RANDOMPROTOTYPEHOSPITALTAG = async () => {
  var config = {
    method: "get",
    url: `/randomPrototypeHospitalTag`,
  };

  return API_CONFIG(config);
};

export const API_GET_POLICY = async () => {
  var config = {
    method: "get",
    url: `/policy`,
    responseType: "blob",
  };

  return API_CONFIG(config).then((response) => {
    FileDownload(response.data, "policy.pdf");
  });
};

export const API_GET_HOMEVIDEOLINK = async () => {
  var config = {
    method: "get",
    url: `/homeVideoLink`,
  };

  return API_CONFIG(config);
};

export const API_PUT_HOMEVIDEOLINK = async (value) => {
  var config = {
    method: "put",
    url: `/homeVideoLink`,
    data: {
      value,
    },
  };

  return API_CONFIG(config);
};
