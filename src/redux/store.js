import { configureStore } from '@reduxjs/toolkit'
import { randomUserApi } from './services'

export const store = configureStore({
  reducer: {
    [randomUserApi.reducerPath]: randomUserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(randomUserApi.middleware),
})