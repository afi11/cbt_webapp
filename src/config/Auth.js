import { c_admin, c_student } from "./code";

const setToken = (token, iduser, expired, expired_month, tipeAkun) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user_id", iduser);
  localStorage.setItem("expired", expired);
  localStorage.setItem("month_expired", expired_month);
  localStorage.setItem("account", tipeAkun);
};

const getTokenAndUserId = () => {
  const now = new Date();
  let token = localStorage.getItem("token");
  let userId = localStorage.getItem("user_id");
  let expired = localStorage.getItem("expired");
  let account = localStorage.getItem("account");
  let month_expired = localStorage.getItem("month_expired");
  let data = {
    token: token,
    userid: userId,
    account: account,
  };
  if (!token || !userId || !expired || !month_expired) {
    return null;
  }
  if (now.getMonth() <= parseInt(month_expired)) {
    if (now.getDate() >= parseInt(expired)) {
      destroyToken();
    } else {
      return data;
    }
  } else {
    destroyToken();
  }
};

const destroyToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user_id");
  localStorage.removeItem("expired");
  localStorage.removeItem("month_expired");
  localStorage.removeItem("account");
};

const isAuthenticated = () => {
  if (getTokenAndUserId()) return true;
  else return false;
};

const isAdminPage = () => {
  if (isAuthenticated()) {
    if (getTokenAndUserId().account === c_admin) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const isStudentPage = () => {
  if (isAuthenticated()) {
    if (getTokenAndUserId().account === c_student) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const hasLogin = () => {
  if (isAuthenticated()) {
    if (getTokenAndUserId().account === c_student) {
      return true;
    } else if (getTokenAndUserId().account === c_admin) {
      return true;
    }
  } else {
    return false;
  }
};

const Auth = {
  setToken,
  getTokenAndUserId,
  destroyToken,
  isAuthenticated,
  isStudentPage,
  isAdminPage,
  hasLogin,
};

export default Auth;
