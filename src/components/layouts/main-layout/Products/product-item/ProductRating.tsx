'use client'

import { IProduct } from '@/src/types/product.interface'
import { getRating } from '@/src/utils/getRating'
import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

interface ProductRatingProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	product: IProduct
}

const ProductRating: FC<PropsWithChildren<ProductRatingProps>> = ({
	product,
	className
}) => {
	// const { data: rating } = useQuery({
	// 	queryKey: ['get product rating', product.id],
	// 	queryFn: () => ReviewsService.getAverageByProduct(product.id),
	// 	select: ({ data }) => data
	// })

	const [rating, setRating] = useState(getRating(product.reviews) || 0)

	return (
		<div className={cn('flex items-end gap-1 text-sm my-1', className)}>
			<Rating
				readonly
				initialValue={rating}
				SVGstyle={{ display: 'inline-block' }}
				size={20}
				allowFraction
				transition
			/>
			<span>({product.reviews.length})</span>
			<span>{product.rank}</span>
		</div>
	)
}

export default ProductRating
