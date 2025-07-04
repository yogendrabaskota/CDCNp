import { configureStore } from '@reduxjs/toolkit'
import bookSlice from './bookSlice'
const store = configureStore({
    reducer : {
        books : bookSlice,
    }
})

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>