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
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/src/components/ui/Select'
import { Textarea } from '@/src/components/ui/Textarea'
import { useCreateProduct } from '@/src/hooks/queries/products/useCreateProduct'
import { useDeleteProduct } from '@/src/hooks/queries/products/useDeleteProduct'
import { useUpdateProduct } from '@/src/hooks/queries/products/useUpdateProduct'
import { ICategory } from '@/src/types/category.interface'
import { IProduct, IProductInput } from '@/src/types/product.interface'
import { SubmitHandler, useForm } from 'react-hook-form'

interface ProductFormProps {
	product?: IProduct | null
	categories: ICategory[]
}

export function ProductForm({ product = null, categories }: ProductFormProps) {
	const { createProduct, isLoadingCreate } = useCreateProduct()
	const { updateProduct, isLoadingUpdate } = useUpdateProduct()
	const { deleteProduct, isLoadingDelete } = useDeleteProduct()

	const title = product ? 'Редагувати' : 'Створити'
	const description = product
		? 'Редагувати інформацію про товар'
		: 'Додати новий товар'
	const action = product ? 'Зберегти' : 'Створити'

	const form = useForm<IProductInput>({
		mode: 'onChange',
		values: product
			? {
					name: product?.name || '',
					description: product?.description || '',
					images: product?.images || [],
					categoryId: product?.category.id || 0,
					discount: product?.discount || 0,
					price: product?.price || 0
			  }
			: {
					name: '',
					description: '',
					images: [],
					categoryId: 0,
					discount: 0,
					price: 0
			  }
	})

	const onSubmit: SubmitHandler<IProductInput> = data => {
		if (product) updateProduct(data)
		else createProduct(data)
	}

	return (
		<div className='space-y-4'>
			<div>
				<Heading title={title} description={description} />
				{/* {product && (
        
      )} */}
			</div>
			<div>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
						<FormField
							control={form.control}
							name='images'
							rules={{
								required: 'Мінімум - одне зображення'
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Зображення</FormLabel>
									<FormControl>
										<Input
											placeholder='URL зображення'
											disabled={isLoadingCreate || isLoadingUpdate}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						></FormField>
						<div className='grid grid-cols-4 gap-4 space-y-4 items-start'>
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
												placeholder='Назва товару'
												disabled={isLoadingCreate || isLoadingUpdate}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							></FormField>

							<FormField
								control={form.control}
								name='price'
								rules={{
									required: "Ціна обов'язкова"
								}}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Ціна</FormLabel>
										<FormControl>
											<Input
												placeholder='Ціна товару'
												disabled={isLoadingCreate || isLoadingUpdate}
												{...field}
												onChange={event => {
													const numericValue = parseFloat(event.target.value)
													field.onChange(
														!isNaN(numericValue)
															? numericValue
															: event.target.value
													)
												}}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							></FormField>
							<FormField
								control={form.control}
								name='discount'
								rules={{
									required: "Знижка обов'язкова"
								}}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Знижка</FormLabel>
										<FormControl>
											<Input
												placeholder='Знижка на товар'
												disabled={isLoadingCreate || isLoadingUpdate}
												{...field}
												onChange={event => {
													const numericValue = parseFloat(event.target.value)
													field.onChange(
														!isNaN(numericValue)
															? numericValue
															: event.target.value
													)
												}}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							></FormField>
							<FormField
								control={form.control}
								name='categoryId'
								rules={{
									required: "Категорія обов'язкова"
								}}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Категорія</FormLabel>
										<Select
											disabled={isLoadingCreate || isLoadingUpdate}
											onValueChange={field.onChange}
											defaultValue={categories[0]?.name || ''}
										>
											<FormControl>
												<SelectTrigger className='w-full'>
													<SelectValue placeholder='Категорія товару' />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectGroup>
													{categories.map(category => (
														<SelectItem
															value={category.name}
															key={category.name}
														>
															{category.name}
														</SelectItem>
													))}
												</SelectGroup>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							></FormField>
						</div>
						<FormField
							control={form.control}
							name='description'
							rules={{
								required: "Опис обов'язковий"
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Опис</FormLabel>
									<FormControl>
										<Textarea
											placeholder='Опис товару'
											disabled={isLoadingCreate || isLoadingUpdate}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						></FormField>
						<Button
							type='submit'
							className='mt-4 cursor-pointer'
							variant='default'
							disabled={isLoadingCreate || isLoadingUpdate}
						>
							{action}
						</Button>
					</form>
				</Form>
			</div>
		</div>
	)
}
