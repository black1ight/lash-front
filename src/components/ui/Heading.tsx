import cn from 'clsx'
import { FC } from 'react'

interface IHeading {
	className?: string
	title: string
	description?: string
}

const Heading: FC<IHeading> = ({ className, title, description }) => {
	return (
		<div className='space-y-3'>
			<h1 className={cn('font-semibold text-3xl', className)}>{title}</h1>
			{description && <span>{description}</span>}
		</div>
	)
}

export default Heading
