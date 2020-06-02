import { createStore } from "redux";
import gameManagerReducer from "../hooks/useGameManager/duck/reducer";

export default createStore(gameManagerReducer);
