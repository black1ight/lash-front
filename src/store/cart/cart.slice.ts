import {
	IAddToCartPayload,
	ICartInitialState,
	IChangeQuantityPayload
} from '@/src/types/cart.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ICartInitialState = {
	items: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
			const isExistSize = state.items.find(
				item => item.product.id === action.payload.product.id
			)

			if (!isExistSize) {
				state.items.push({ ...action.payload, id: state.items.length })
			}
		},
		removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
			state.items = state.items
				.filter(item => item.id !== action.payload.id)
				.map((elem, index) => ({ ...elem, id: index }))
		},
		changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
			const { id, type } = action.payload
			const item = state.items.find(item => item.id === id)
			if (item) {
				if (type === 'plus') {
					item.quantity++
					item.price += item.product.price
				} else if (item.quantity > 1) {
					item.quantity--
					item.price -= item.product.price
				}
			}
		},
		reset: state => {
			state.items = []
		}
	}
})

export const { addToCart, changeQuantity, removeFromCart, reset } =
	cartSlice.actions
