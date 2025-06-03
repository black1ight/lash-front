import { IProduct } from './product.interface'

export interface ICartItem {
	id: number
	product: IProduct
	quantity: number
	price: number
}

type ICartItemWithAction = Omit<ICartItem, 'id'> & {
	action: string
}

export interface ICartInitialState {
	items: ICartItem[]
	targetItem: ICartItemWithAction | null
}

export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
	type: 'minus' | 'plus'
}
