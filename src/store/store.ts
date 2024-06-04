import { configureStore } from "@reduxjs/toolkit";
import TodosSlice from "./slices/TodosSlice";


const store = configureStore({
    reducer:{
        todosData : TodosSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store