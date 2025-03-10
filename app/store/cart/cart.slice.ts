import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cart: null
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {}
})
