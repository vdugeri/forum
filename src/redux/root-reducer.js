import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "localforage";

import userReducer from "./user/user.reducer";
import topicsReducer from "./topics/topics.reducer";
import postsReducer from "./posts/posts.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["posts"]
};

const rootReducer = combineReducers({
  user: userReducer,
  topics: topicsReducer,
  posts: postsReducer
});

export default persistReducer(persistConfig, rootReducer);
