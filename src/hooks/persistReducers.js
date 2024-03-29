/* eslint-disable no-unused-expressions */
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "Findyouhero",
      storage,
      blacklist: process.env.NODE_ENV === "production" && ["auth", "user"],
      whitelist: process.env.NODE_ENV === "development" && ["auth", "user"],
    },
    reducers
  );

  return persistedReducer;
};
