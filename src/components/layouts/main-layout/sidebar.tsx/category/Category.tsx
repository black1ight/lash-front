import { CategoryService } from '@/src/services/category.service'
import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io'

const Category: FC = () => {
	const { data: categories } = useQuery({
		queryKey: ['get-categories'],
		queryFn: () => CategoryService.getAll(),
		select: ({ data }) => [{ name: 'Всі', slug: '' }, ...data]
	})

	const currentPath = usePathname().split('/').at(-1)
	return (
		<div className='text-text'>
			<h3 className='uppercase text-sm font-semibold tracking-wide opacity-80'>
				Категорії:
			</h3>
			<div className='rounded-lg py-2'>
				<ul className='flex flex-col gap-2 py-1 border-l pl-3 text-sm'>
					{categories?.map(category => {
						return (
							<li className='relative' key={category.name}>
								<Link
									className={cn('gap-1 cursor-pointer hover:text-pink-500', {
										'text-pink-500': currentPath === category.slug,
										'text-text': currentPath !== category.slug
									})}
									href={
										category.slug === '' ? '/' : `/category/${category.slug}`
									}
								>
									<span className='pl-5'>{category.name}</span>
									<span className='absolute left-0 top-[5px]'>
										{currentPath === category.slug ? (
											<IoMdRadioButtonOn />
										) : (
											<IoMdRadioButtonOff opacity={0.5} />
										)}
									</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Category
