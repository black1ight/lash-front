import { Ellipsis } from 'lucide-react'
import { useState } from 'react'

interface ReviewItemMenuProps {
	setCurrentReview: () => void
	deleteReview: () => void
}

const menuItems = ['редагувати', 'видалити']

export function ReviewItemMenu({
	setCurrentReview,
	deleteReview
}: ReviewItemMenuProps) {
	const [isOpen, setIsOpen] = useState(false)
	const clickItemHandler = (menuProperty: string) => {
		menuProperty === 'редагувати' && setCurrentReview()
		menuProperty === 'видалити' && deleteReview()
		setIsOpen(false)
	}
	return (
		<div className='ml-auto relative'>
			<Ellipsis onClick={() => setIsOpen(!isOpen)} />
			{isOpen && (
				<ul className='absolute right-0 bg-white rounded-lg shadow'>
					{menuItems.map((item, id) => {
						return (
							<li
								onClick={() => clickItemHandler(item)}
								className={`text-neutral-600 bg-neutral-50 active:bg-white cursor-pointer px-4 py-3 ${
									id !== menuItems.length - 1 && 'border-b'
								} ${id === 0 && 'rounded-t-lg'} ${
									id === menuItems.length - 1 && 'rounded-b-lg'
								}`}
								key={item}
							>
								{item}
							</li>
						)
					})}
				</ul>
			)}
		</div>
	)
}
