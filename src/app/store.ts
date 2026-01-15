import { configureStore } from '@reduxjs/toolkit'
import type { Action } from '@reduxjs/toolkit'
import postsReducer from "../features/posts/postsSlice"

interface CounterState {
  value: number
}


export const store = configureStore({
  // Pass in the root reducer setup as the `reducer` argument
  reducer: {
    posts: postsReducer
  }
})

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch; 
export type RootState = ReturnType<typeof store.getState> // derived from store definition


//Note redux is a plain js library w/ state, so we need to use redux w/ react