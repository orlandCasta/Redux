const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE": //reducer que agrega a favoritos
      return {
        ...state, //destructuramos el estado que ya tenemos
        /* este elemento es el que queremos, mylist, primero traemos
        los elementos del estado, los destructuramos ...state.mylist
        y como segundo valor pasamos el action.payload que es el elemento
        que queremos guardar */
        mylist: [...state.mylist, action.payload],
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };
    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "REGISTER_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "GET_VIDEO_SOURCE":
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          [],
      };
    default:
      //caso por defecto, retorna el estado como se encontro
      return state;
  }
};

export default reducer;
