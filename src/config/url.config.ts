export const PUBLIC_URL = {
	root: (url = '') => `${url ? url : ''}`,

	home: () => PUBLIC_URL.root('/'),
	auth: () => PUBLIC_URL.root('/auth'),
	catalog: (query = '') => PUBLIC_URL.root(`/catalog${query}`),

	product: (slug = '') => PUBLIC_URL.root(`/product/${slug}`),
	category: (slug = '') => PUBLIC_URL.root(`/category/${slug}`)
}

export const CABINET_URL = {
	root: (url = '') => `/cabinet${url ? url : ''}`,

	home: () => CABINET_URL.root('/'),
	favorites: () => CABINET_URL.root('/favorites')
}

export const STORE_URL = {
	root: (url = '') => `/store${url ? url : ''}`,

	home: () => STORE_URL.root('/'),
	products: () => STORE_URL.root('/products'),
	productEdit: (id = '') => STORE_URL.root(`/products/${id}`),
	categories: () => STORE_URL.root('/categories'),
	categoryCreate: () => STORE_URL.root('/categories/create'),
	categoryEdit: (id = '') => STORE_URL.root(`/categories/${id}`),
	reviews: () => STORE_URL.root('/reviews'),
	settings: () => STORE_URL.root('/settings')
}
