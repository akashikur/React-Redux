import { createStore } from "redux";
import storeWord from "./reducer/historyreducer";

const store = createStore(storeWord);
export default store;
