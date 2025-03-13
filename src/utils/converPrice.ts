export const convertPrice = (price: number) => {
	return new Intl.NumberFormat('uk-UA', {
		style: 'currency',
		currency: 'UAH',
		minimumFractionDigits: 2
	}).format(price)
}
