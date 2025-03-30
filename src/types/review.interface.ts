import { IProduct } from './product.interface'
import { IUser } from './user.interface'

export type IReviewProduct = Pick<IProduct, 'name' | 'images'>

export interface IReview {
	id: number
	user: IUser
	createdAt: string
	text: string
	rating: number
	product: IReviewProduct
}
