import { configureStore } from "@reduxjs/toolkit";
import subCategoriesReducer from "../services/slices/subCategorySlice";
import mainCategoriesReducer from "../services/slices/mainCategorySlice";

export default configureStore({
  reducer: {
    subCategories: subCategoriesReducer,
    mainCategories: mainCategoriesReducer,
  },
});
