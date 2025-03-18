import cn from 'clsx'
import { FC } from 'react'

interface IHeading {
	className?: string
	title: string
}

const Heading: FC<IHeading> = ({ className, title }) => {
	return (
		<h1 className={cn('font-semibold text-3xl mb-4', className)}>{title}</h1>
	)
}

export default Heading
