export const PRODUCT = 'products'

export type TypeProduct = {
	name: string
	description?: string
	price: number
	images: string[]
	categoryId: number
}

export type TypeDataFilters = {
	sort?: enumProductSort
	searchTerm?: string
	page?: string | number
	perPage?: string | number
}

export enum enumProductSort {
	RANK = 'rank',
	DISCOUNT = 'discount',
	HIGH_PRICE = 'high_price',
	LOW_PRICE = 'low_price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

export enum enumProductSortUk {
	rank = 'рейтинг',
	discount = 'знижки',
	high_price = 'від дорожчих',
	low_price = 'від дешевих',
	newest = 'нові',
	oldest = 'старі'
}
