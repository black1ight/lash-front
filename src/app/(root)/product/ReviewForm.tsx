'use client'

import { Button } from '@/src/components/ui/Button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/src/components/ui/Form'
import Heading from '@/src/components/ui/Heading'
import { Textarea } from '@/src/components/ui/Textarea'
import { useCreateReview } from '@/src/hooks/queries/reviews/useCreateReview'
import { useUpdateReview } from '@/src/hooks/queries/reviews/useUpdateReview'
import { useProfile } from '@/src/hooks/useProfile'
import { IProduct } from '@/src/types/product.interface'
import { IReview, IReviewInput } from '@/src/types/review.interface'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Rating } from 'react-simple-star-rating'

interface ReviewFormProps {
	product: IProduct
	review: IReview | null
	setCurrentReview: () => void
	setNewReview: () => void
}

export function ReviewForm({
	product,
	review,
	setCurrentReview,
	setNewReview
}: ReviewFormProps) {
	const [inputValue, setInputValue] = useState<string>('')

	const { createReview, isLoadingCreate } = useCreateReview()
	const { updateReview, isLoadingUpdate } = useUpdateReview()

	const { profile } = useProfile()

	const queryClient = useQueryClient()

	const title = review ? 'Редагувати відгук' : 'Додати новий відгук'
	const description = review
		? 'Внесіть зміни та натисніть кнопку підтвердження'
		: 'Напишіть свої думки про цей товар'
	const action = review ? 'Зберегти' : 'Створити'

	const form = useForm<IReviewInput>({
		mode: 'onChange',
		values:
			review && profile
				? {
						reviewId: review.id,
						productId: product?.id!,
						text: review.text,
						rating: review.rating
				  }
				: {
						reviewId: -1,
						productId: product?.id!,
						text: '',
						rating: 0
				  }
	})

	// Сделать лоадер после создания комментария до обновления всех коментариев!
	// Пофиксить редактирование отзыва.

	const onSubmit: SubmitHandler<IReviewInput> = data => {
		if (review) updateReview(data)
		else createReview(data)
		setCurrentReview()
		setNewReview()
	}

	const onCancelHandler = () => {
		setCurrentReview()
		setNewReview()
	}

	return (
		<div className='space-y-4'>
			<div className='flex'>
				<Heading
					title={title}
					description={description}
				/>
			</div>

			<div>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-4'
					>
						<div className='space-y-6'>
							<FormField
								control={form.control}
								name='rating'
								rules={{
									required: "Оцінка обов'язкова"
								}}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Ваша оцінка</FormLabel>
										<FormControl>
											<Rating
												onClick={rate => field.onChange(rate)}
												initialValue={field.value}
												SVGstyle={{ display: 'inline-block' }}
												size={30}
												allowHover={true}
												transition
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							></FormField>
							<FormField
								control={form.control}
								name='text'
								rules={{
									required: "Текст відгуку обов'язковий"
								}}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Відгук</FormLabel>

										<FormControl></FormControl>

										<Textarea
											className='h-40'
											rows={5}
											placeholder='Текст відгуку'
											disabled={isLoadingCreate || isLoadingUpdate}
											{...field}
										/>
										<FormMessage />
									</FormItem>
								)}
							></FormField>
						</div>
						<div className='flex gap-4'>
							<Button
								type='submit'
								className='mt-4 cursor-pointer'
								variant='default'
								disabled={isLoadingCreate || isLoadingUpdate}
							>
								{action}
							</Button>
							<Button
								onClick={onCancelHandler}
								type='button'
								className='mt-4 cursor-pointer'
								variant='default'
							>
								Відмінити
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	)
}
