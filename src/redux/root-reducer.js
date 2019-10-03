import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "localforage";

import userReducer from "./user/user.reducer";
import topicsReducer from "./topics/topics.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: []
};

const rootReducer = combineReducers({
  user: userReducer,
  topics: topicsReducer
});

export default persistReducer(persistConfig, rootReducer);
