import { configureStore } from '@reduxjs/toolkit'
import { popularMoviesApi } from '../api/movieApi'


export const store = configureStore({
  reducer: {
    [popularMoviesApi.reducerPath]:popularMoviesApi.reducer
  },
  devTools: true,
  middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware()
        .concat(popularMoviesApi.middleware)
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch