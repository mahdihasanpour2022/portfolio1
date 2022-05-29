const initialMenuState = {
  sidemenu: false,
}

const menuReducer = (state = initialMenuState, action) => {
  switch (action.type) {
    case "OPEN_SIDEMENU":
      return { ...state, sidemenu: action.payload };
    case "CLOSE_SIDEMENU":
      return { ...state, sidemenu: action.payload };
    default:
      return state;
  }
}
export default menuReducer;