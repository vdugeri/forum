import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "localforage";

import userReducer from "redux/user/user.reducer";
import topicsReducer from "redux/topics/topics.reducer";
import postsReducer from "redux/posts/posts.reducer";
import messagesReducer from "redux/messages/messages.reducer";

const persistConfig = {
  key: "forum",
  storage,
  whitelist: ["user", "topics", "posts"]
};

const rootReducer = combineReducers({
  user: userReducer,
  topics: topicsReducer,
  posts: postsReducer,
  messages: messagesReducer
});

export default persistReducer(persistConfig, rootReducer);
