export const convertPrice = (price: number) => {
	return price
		.toLocaleString('uk-UA', {
			style: 'currency',
			currency: 'UAH',
			minimumFractionDigits: 0
		})
		.replace('грн', '₴')
}
