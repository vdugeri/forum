import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "localforage";

import userReducer from "./user/user.reducer";
import topicsReducer from "./topics/topics.reducer";
import postsReducer from "./posts/posts.reducer";
import messagesReducer from "./messages/messages.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"]
};

const rootReducer = combineReducers({
  user: userReducer,
  topics: topicsReducer,
  posts: postsReducer,
  messages: messagesReducer
});

export default persistReducer(persistConfig, rootReducer);
