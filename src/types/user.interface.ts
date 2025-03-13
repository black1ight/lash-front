import { IProduct } from './product.interface'

export interface IUser {
	id: number
	email: string
	password: string
	phone: string
	avatarPath: string
}

export interface IFullUser extends IUser {
	favorites: { product: IProduct }[]
}
