import { instance } from '@/src/api/api.interceptor'
import { IProduct, IProductsData } from '@/src/types/product.interface'
import { PRODUCT, TypeDataFilters, TypeProduct } from './product.types'

export const ProductService = {
	async getAll(queryData = {} as TypeDataFilters) {
		return await instance<IProductsData>({
			url: PRODUCT,
			method: 'GET',
			params: queryData
		})
	},

	async getById(productId: number | string) {
		return await instance<IProduct>({
			url: `${PRODUCT}/${productId}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return await instance<IProduct>({
			url: `${PRODUCT}/by-slug${slug}`,
			method: 'GET'
		})
	},

	async getSimilar(productId: string) {
		return await instance<IProduct>({
			url: `${PRODUCT}/similar${productId}`,
			method: 'GET'
		})
	},

	async create(data: TypeProduct) {
		return await instance<IProduct>({
			url: PRODUCT,
			method: 'POST',
			data
		})
	},

	async update(productId: number | string, name: string) {
		return await instance<IProduct>({
			url: `${PRODUCT}/${productId}`,
			method: 'PUT',
			data: { name }
		})
	},

	async delete(productId: number | string) {
		return await instance<IProduct>({
			url: `${PRODUCT}/${productId}`,
			method: 'DELETE'
		})
	}
}
