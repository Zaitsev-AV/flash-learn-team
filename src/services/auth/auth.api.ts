import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { AuthMeResponseType } from '@/services/auth/auth.api.types.ts'
import { baseURL } from '@/services/common/common.api.ts'

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL, credentials: 'include' }),
  endpoints: build => {
    return {
      authMe: build.query<AuthMeResponseType, void>({
        query: () => {
          return {
            method: 'GET',
            url: `auth/me`,
          }
        },
      }),
      signUp: build.mutation({
        query: body => {
          return {
            method: 'POST',
            url: 'auth/sign-up',
            body,
          }
        },
      }),
      login: build.mutation({
        query: arg => {
          return {
            method: 'POST',
            url: 'auth/login',
            arg,
          }
        },
      }),
    }
  },
})

export const { useAuthMeQuery, useSignUpMutation, useLoginMutation } = authAPI
