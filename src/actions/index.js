//El payload es la informacion que vamos a trasmitir
export const setFavorite = (payload) => ({
  type: "SET_FAVORITE",
  payload,
});

//El payload es la informacion que vamos a trasmitir
export const deleteFavorite = (payload) => ({
  type: "DELETE_FAVORITE",
  payload,
});

//El payload es la informacion que vamos a trasmitir
export const loginRequest = (payload) => ({
  type: "LOGIN_REQUEST",
  payload,
});

//El payload es la informacion que vamos a trasmitir
export const logoutRequest = (payload) => ({
  type: "LOGOUT_REQUEST",
  payload,
});

//El payload es la informacion que vamos a trasmitir
export const registerRequest = (payload) => ({
  type: "REGISTER_REQUEST",
  payload,
});

//El payload es la informacion que vamos a trasmitir
export const getVideoSource = (payload) => ({
  type: "GET_VIDEO_SOURCE",
  payload,
});
