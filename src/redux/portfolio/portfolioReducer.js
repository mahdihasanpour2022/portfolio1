import {portfolio_LC} from "../../local_storage/localStorage";

const initialPortfolioState = {
  portfolio: []
}
const portfolioReducer = (state = initialPortfolioState, action) => {
  switch (action.type) {
    case "GET_PORTFOLIO":
      portfolio_LC(action.payload)
      return { ...state, portfolio: action.payload };
    default:
      return state;
  }
}
export default portfolioReducer;