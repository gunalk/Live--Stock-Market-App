import { configureStore } from "@reduxjs/toolkit"
import Reducer from "../store/slice"

export const store=configureStore({
  reducer:{
    user:Reducer
  }
})