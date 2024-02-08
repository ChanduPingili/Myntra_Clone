import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchSlice from "./FetchSlice";
import bagSlice from "./bagSlice";


const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fetchSlice.reducer,
    bag : bagSlice.reducer,
  }
})

export default myntraStore;