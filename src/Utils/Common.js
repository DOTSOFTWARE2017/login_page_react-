// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("refreshtoken");
};


export const removeUserToken=()=>{
  sessionStorage.removeItem("token");
}

export const getToken = () => {
  return sessionStorage.getItem('token') || null;
}

// set the token and user from the session storage
export const setUserSession = (token, refreshtoken) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("refreshtoken", refreshtoken);
};
export const getTokenRefresh = () => {
  return sessionStorage.getItem('refreshtoken') || null;
}
