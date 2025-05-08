import { IOrder } from './order.interface'
import { IProduct } from './product.interface'

export interface IUser {
	id: number
	email: string
	password: string
	phone: string
	avatarPath: string
	orders: IOrder[]
}

export interface IFullUser extends IUser {
	favorites: { product: IProduct }[]
}
