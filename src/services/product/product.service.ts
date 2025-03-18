import { axiosClassic, axiosWithAuth } from '@/src/api/api.interceptor'
import { IProduct, IProductsData } from '@/src/types/product.interface'
import { PRODUCT, TypeDataFilters, TypeProduct } from './product.types'

export const ProductService = {
	async getAll(queryData = {} as TypeDataFilters) {
		const { data } = await axiosClassic<IProductsData>({
			url: PRODUCT,
			method: 'GET',
			params: queryData
		})
		return data
	},

	async getById(productId: number | string) {
		return await axiosClassic<IProduct>({
			url: `${PRODUCT}/${productId}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return await axiosClassic<IProduct>({
			url: `${PRODUCT}/by-slug${slug}`,
			method: 'GET'
		})
	},

	async getByCategory(categorySlug: string, queryData = {} as TypeDataFilters) {
		const { data } = await axiosClassic<IProductsData>({
			url: `${PRODUCT}/by-category/${categorySlug}`,
			method: 'GET',
			params: queryData
		})
		return data
	},

	async getSimilar(productId: string) {
		return await axiosClassic<IProduct>({
			url: `${PRODUCT}/similar${productId}`,
			method: 'GET'
		})
	},

	async create(data: TypeProduct) {
		return await axiosWithAuth<IProduct>({
			url: PRODUCT,
			method: 'POST',
			data
		})
	},

	async update(productId: number | string, name: string) {
		return await axiosWithAuth<IProduct>({
			url: `${PRODUCT}/${productId}`,
			method: 'PUT',
			data: { name }
		})
	},

	async delete(productId: number | string) {
		return await axiosWithAuth<IProduct>({
			url: `${PRODUCT}/${productId}`,
			method: 'DELETE'
		})
	}
}
