import { errorCatch } from '@/app/api/api.helper'
import { removeFromStorage } from '@/app/services/auth/auth.helper'
import { AuthService } from '@/app/services/auth/auth.service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthData, IAuthResponse } from './user.interface'

export const authAction = createAsyncThunk<IAuthResponse, IAuthData>(
	'auth',
	async (data, thunkApi) => {
		console.log(data)
		try {
			const response = await AuthService.main(data.type, { ...data.data })
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

// // login
// export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
//   "auth/login",
//   async (data, thunkApi) => {
//     try {
//       const response = await AuthService.main("login", data);
//       return response;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error);
//     }
//   }
// );

// logout
export const logout = createAsyncThunk('auth/logout', async () => {
	removeFromStorage()
})

// checkAuth
export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewToken()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				thunkApi.dispatch(logout())
			}
			return thunkApi.rejectWithValue(error)
		}
	}
)
