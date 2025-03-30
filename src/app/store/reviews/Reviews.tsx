'use client'

import { DataTable } from '@/src/components/ui/data-table/DataTable'
import DataTableLoading from '@/src/components/ui/data-table/DataTableLoading'
import Heading from '@/src/components/ui/Heading'
import { useGetReviews } from '@/src/hooks/queries/reviews/useGetReviews'
import { format } from 'date-fns'
import { IReviewColumn, reviewColumns } from './ReviewColumns'

export function Reviews() {
	const { reviews, isLoadingReviews } = useGetReviews()

	const formattedReviews: IReviewColumn[] = reviews
		? reviews.map(review => ({
				id: review.id,
				createdAt: format(new Date(review.createdAt), 'dd.MM.yyyy'),
				rating: Array.from({ length: review.rating })
					.map(() => '⭐')
					.join(''),
				username: review.user.email,
				product: {
					name: review.product.name,
					images: [review.product.images[0]]
				}
		  }))
		: []
	return (
		<div>
			{isLoadingReviews ? (
				<DataTableLoading />
			) : (
				<div className='space-y-4'>
					<div>
						<Heading
							title={`Відгуки(${reviews?.length})`}
							description='Всі відгуки магазину'
						/>
					</div>
					<div>
						<DataTable columns={reviewColumns} data={formattedReviews} />
					</div>
				</div>
			)}
		</div>
	)
}
