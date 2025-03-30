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
import { Input } from '@/src/components/ui/Input'
import ConfirmModal from '@/src/components/ui/modals/ConfirmModal'
import { useCreateCategory } from '@/src/hooks/queries/categories/useCreateCategory'
import { useDeleteCategory } from '@/src/hooks/queries/categories/useDeleteCategory'
import { useUpdateCategory } from '@/src/hooks/queries/categories/useUpdateCategory'
import { ICategory, ICategoryInput } from '@/src/types/category.interface'
import { Trash } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface ICategoryForm {
	category?: ICategory | null
}

export function CategoryForm({ category }: ICategoryForm) {
	const { createCategory, isLoadingCreateCategory } = useCreateCategory()
	const { updateCategory, isLoadingUpdateCategory } = useUpdateCategory()
	const { deleteCategory, isLoadingDeleteCategory } = useDeleteCategory()

	const title = category ? 'Редагувати' : 'Створити'
	const description = category
		? 'Редагувати категорію'
		: 'Створити нову категорію'
	const action = category ? 'Зберегти' : 'Створити'

	const form = useForm<ICategoryInput>({
		mode: 'onChange',
		values: category || {
			name: ''
		}
	})

	const onSubmit: SubmitHandler<ICategoryInput> = data => {
		if (category) updateCategory(data)
		else createCategory(data)
	}

	return (
		<div className='space-y-4'>
			<div className='flex items-center'>
				<Heading title={title} description={description} />
				{category && (
					<ConfirmModal handleClick={() => deleteCategory()}>
						<Button
							className='ml-auto cursor-pointer bg-pink-600 hover:bg-pink-600/80'
							size='icon'
							variant='default'
							disabled={isLoadingDeleteCategory}
						>
							<Trash className='size-4' />
						</Button>
					</ConfirmModal>
				)}
			</div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
					<div>
						<FormField
							control={form.control}
							name='name'
							rules={{
								required: "Назва обов'язкова"
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Назва</FormLabel>
									<FormControl>
										<Input
											{...field}
											placeholder='Назва категорії'
											disabled={
												isLoadingCreateCategory || isLoadingUpdateCategory
											}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button
						variant='default'
						disabled={isLoadingCreateCategory || isLoadingUpdateCategory}
					>
						{action}
					</Button>
				</form>
			</Form>
		</div>
	)
}
