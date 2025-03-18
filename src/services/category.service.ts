import { axiosClassic, axiosWithAuth } from '../api/api.interceptor'
import { ICategory } from '../types/category.interface'

const CATEGORY = 'categories'

export const CategoryService = {
	async getAll() {
		return await axiosClassic<ICategory[]>({
			url: CATEGORY,
			method: 'GET'
		})
	},

	async getById(categoryId: number | string) {
		return await axiosClassic<ICategory>({
			url: `${CATEGORY}/${categoryId}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return await axiosClassic<ICategory>({
			url: `${CATEGORY}/by-slug${slug}`,
			method: 'GET'
		})
	},

	async create() {
		return await axiosWithAuth<ICategory>({
			url: CATEGORY,
			method: 'POST'
		})
	},

	async update(categoryId: number | string, name: string) {
		return await axiosWithAuth<ICategory>({
			url: `${CATEGORY}/${categoryId}`,
			method: 'PUT',
			data: { name }
		})
	},

	async delete(categoryId: number | string) {
		return await axiosWithAuth<ICategory>({
			url: `${CATEGORY}/${categoryId}`,
			method: 'DELETE'
		})
	}
}
