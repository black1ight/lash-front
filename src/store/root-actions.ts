import * as userActions from '@/src/store/user/user.actions'
import { cartSlice } from './cart/cart.slice'

export const rootActions = {
	...userActions,
	...cartSlice.actions
}
