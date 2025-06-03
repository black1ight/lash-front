import { Button } from '@/src/components/ui/Button'
import { useGetReviews } from '@/src/hooks/queries/reviews/useGetReviews'
import { IProduct } from '@/src/types/product.interface'
import { IReview } from '@/src/types/review.interface'
import { useState } from 'react'
import { ReviewForm } from './ReviewForm'
import { ReviewItem } from './ReviewItem'

interface ReviewsProps {
	product: IProduct
}

export function Reviews({ product }: ReviewsProps) {
	const [currentReview, setCurrentReview] = useState<IReview | null>(null)
	const [newReview, setNewReview] = useState<boolean>(false)

	const { reviews } = useGetReviews(product.id, product.reviews)

	return (
		<div className='pt-10 text-sm divide-y [&>*]:py-10 [&>*:first-child]:pt-0 [&>*:last-child]:pb-0'>
			{(currentReview || newReview) && (
				<ReviewForm
					review={currentReview}
					product={product}
					setCurrentReview={() => setCurrentReview(null)}
					setNewReview={() => setNewReview(false)}
				/>
			)}
			<div className='space-y-6'>
				{!newReview && (
					<Button variant={'outline'} onClick={() => setNewReview(true)}>
						Залишити відгук
					</Button>
				)}
				<ul className='grid max-sm:grid-cols-1 grid-cols-3 gap-4'>
					{reviews.map((item, id) => {
						return (
							<ReviewItem
								item={item}
								setCurrentReview={() => setCurrentReview(item)}
								key={`${item.createdAt}`}
							/>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
