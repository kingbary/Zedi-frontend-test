import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const randomUserApi = createApi({
  reducerPath: 'randomUserApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://randomuser.me/api/1.4/?results=10&seed=foobar"
  }),
  endpoints: (builder) => ({
    getAllUsersByNum: builder.query({
      query: (num) => `page=${num}`
    })
  })
})

export const { useGetAllUsersByNumQuery } = randomUserApi