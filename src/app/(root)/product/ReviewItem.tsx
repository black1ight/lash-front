import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger
} from '@/src/components/ui/Dialog'
import { useDeleteReview } from '@/src/hooks/queries/reviews/useDeleteReview'
import { IReview } from '@/src/types/review.interface'
import { formattedDate } from '@/src/utils/formattedDate'
import { Rating } from 'react-simple-star-rating'
import { ReviewItemMenu } from './ReviewItemMenu'

interface ReviewItemProps {
	item: IReview
	setCurrentReview: () => void
}

export function ReviewItem({ item, setCurrentReview }: ReviewItemProps) {
	const { deleteReview, isLoadingDelete } = useDeleteReview()

	const isEdit = item.createdAt !== item.updatedAt

	return (
		<li
			className={`h-[13rem] flex flex-col bg-neutral-100 rounded-lg px-4 py-2 space-y-2 shadow`}
			key={item.createdAt}
		>
			<div className='flex justify-between'>
				<div>
					<div className='font-semibold'>{item.user.email}</div>
					<Rating
						readonly
						initialValue={item.rating}
						SVGstyle={{ display: 'inline-block' }}
						size={16}
						allowFraction
						transition
					/>
				</div>
				<div className='flex flex-col'>
					<span>{formattedDate(item.createdAt)}</span>
					<ReviewItemMenu
						setCurrentReview={() => setCurrentReview()}
						deleteReview={() => deleteReview(item.id)}
					/>
				</div>
			</div>
			<p className='line-clamp-5 overflow-hidden'>{item.text}</p>
			{isEdit && (
				<div className='mt-auto ml-auto text-sm opacity-50 font-'>редаг.</div>
			)}
			{item.text.length > 325 && (
				<Dialog>
					<DialogTrigger>
						<span className='underline ml-auto cursor-pointer opacity-70 hover:opacity-100'>
							Читати далі
						</span>
					</DialogTrigger>
					<DialogTitle></DialogTitle>
					<DialogContent className='bg-neutral-100'>
						<div className='flex justify-between p-2'>
							<div>
								<div className='font-semibold'>{item.user.email}</div>
								<Rating
									readonly
									initialValue={item.rating}
									SVGstyle={{ display: 'inline-block' }}
									size={16}
									allowFraction
									transition
								/>
							</div>
							<span>{formattedDate(item.createdAt)}</span>
						</div>
						<p className='text-sm'>{item.text}</p>
					</DialogContent>
				</Dialog>
			)}
		</li>
	)
}
