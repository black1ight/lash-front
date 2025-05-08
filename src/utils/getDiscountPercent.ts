export const getDiscountPercent = (price: number, discount: number) => {
	return `-${Math.round((discount / price) * 100)}%`
}
