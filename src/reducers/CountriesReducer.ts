import { AnyAction } from "redux";

interface IState {
  info: string;
}
const initialState: IState = {
  info: "black",
};
const CountriesReducer = (state = initialState, actions: AnyAction) => {
  switch (actions.type) {
    case "GET_INFO": {
      return {
        info: "black",
      };
    }
    default:
      return state;
  }
};

export default CountriesReducer;
