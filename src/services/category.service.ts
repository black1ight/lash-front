import { axiosClassic, axiosWithAuth } from '../api/api.interceptor'
import { ICategory, ICategoryInput } from '../types/category.interface'

const CATEGORY = 'categories'

export const CategoryService = {
	async getAll() {
		return await axiosClassic<ICategory[]>({
			url: CATEGORY,
			method: 'GET'
		})
	},

	async getById(categoryId: number | string) {
		const { data } = await axiosWithAuth<ICategory>({
			url: `${CATEGORY}/${categoryId}`,
			method: 'GET'
		})
		return data
	},

	async getBySlug(slug: string) {
		const { data: category } = await axiosClassic<ICategory>({
			url: `${CATEGORY}/by-slug/${slug}`,
			method: 'GET'
		})
		return category
	},

	async create(data: ICategoryInput) {
		return await axiosWithAuth<ICategory>({
			url: CATEGORY,
			method: 'POST',
			data
		})
	},

	async update(categoryId: number | string, data: ICategoryInput) {
		return await axiosWithAuth<ICategory>({
			url: `${CATEGORY}/${categoryId}`,
			method: 'PUT',
			data
		})
	},

	async delete(categoryId: number | string) {
		return await axiosWithAuth<ICategory>({
			url: `${CATEGORY}/${categoryId}`,
			method: 'DELETE'
		})
	}
}
