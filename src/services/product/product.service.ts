import { axiosClassic, axiosWithAuth } from '@/src/api/api.interceptor'
import {
	IProduct,
	IProductInput,
	IProductsData
} from '@/src/types/product.interface'
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
		const data = await axiosWithAuth<IProduct>({
			url: `${PRODUCT}/${productId}`,
			method: 'GET'
		})
		return data
	},

	async getBySlug(slug: string) {
		const { data } = await axiosClassic<IProduct>({
			url: `${PRODUCT}/by-slug/${slug}`,
			method: 'GET'
		})
		return data
	},

	async getByCategory(categorySlug: string, queryData = {} as TypeDataFilters) {
		const { data } = await axiosClassic<IProductsData>({
			url: `${PRODUCT}/by-category/${categorySlug}`,
			method: 'GET',
			params: queryData
		})
		return data
	},

	async getSimilar(productSlug: string) {
		const { data } = await axiosClassic<IProduct[]>({
			url: `${PRODUCT}/similar/${productSlug}`,
			method: 'GET'
		})
		return data
	},

	async create(product: TypeProduct) {
		const { data } = await axiosWithAuth<IProduct>({
			url: PRODUCT,
			method: 'POST',
			data: product
		})
		return data
	},

	async update(productId: string, inputData: IProductInput) {
		const { data } = await axiosWithAuth<IProduct>({
			url: `${PRODUCT}/${productId}`,
			method: 'PUT',
			data: inputData
		})
		return data
	},

	async delete(productId: number | string) {
		return await axiosWithAuth<IProduct>({
			url: `${PRODUCT}/${productId}`,
			method: 'DELETE'
		})
	}
}
