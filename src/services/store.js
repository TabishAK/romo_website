import { configureStore } from "@reduxjs/toolkit";
import subCategoriesReducer from "../services/slices/subCategorySlice";
import mainCategoriesReducer from "../services/slices/mainCategorySlice";
import tokenReducer from "../services/slices/tokenSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedTokenReducer = persistReducer(persistConfig, tokenReducer);

export default configureStore({
  reducer: {
    subCategories: subCategoriesReducer,
    mainCategories: mainCategoriesReducer,
    token: persistedTokenReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
