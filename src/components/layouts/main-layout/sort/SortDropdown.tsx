'use client'

import { enumProductSort } from '@/src/services/product/product.types'
import cn from 'clsx'
import {
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
	useRef,
	useState
} from 'react'

export interface SortDropdownProps {
	sortType: enumProductSort
	setSortType: Dispatch<SetStateAction<enumProductSort>>
}

const SortDropdown: FC<SortDropdownProps> = ({ sortType, setSortType }) => {
	const [showSort, setShowSort] = useState(false)
	const sortRef = useRef<HTMLDivElement>(null)

	const onClickOutside = (e: MouseEvent) => {
		if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
			setShowSort(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', onClickOutside)
		return () => {
			document.removeEventListener('click', onClickOutside)
		}
	}, [showSort])

	return (
		<div
			ref={sortRef}
			onClick={() => setShowSort(!showSort)}
			className='my-4 relative w-max ml-auto cursor-pointer select-none'
		>
			<div className='flex items-center gap-2'>
				<span className='pl-2'>sort by:</span>
				<div
					className={`${
						showSort ? 'bg-linear-0 from-rose-50 to-white' : 'bg-white'
					} py-1 rounded-lg w-28 px-4 shadow font-semibold hover:bg-linear-0 hover:from-rose-50 hover:to-white`}
				>
					{sortType}
				</div>
			</div>
			{showSort && (
				<ul className='w-28 absolute top-10 right-0 z-10 bg-white rounded-lg text-nowrap border-2 border-white shadow-2xl'>
					{(
						Object.keys(enumProductSort) as Array<keyof typeof enumProductSort>
					).map(key => {
						if (sortType !== enumProductSort[key])
							return (
								<li
									key={key}
									className={cn(
										'not-last:border-b border-stone-300 px-4 py-1 hover:bg-bg'
									)}
									onClick={() => setSortType(enumProductSort[key])}
								>
									{enumProductSort[key]}
								</li>
							)
					})}
				</ul>
			)}
		</div>
	)
}

export default SortDropdown
