import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'dark' | 'light'
	size: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeClasses = {
	sm: 'w-20',
	md: 'w-40',
	lg: 'w-60',
	xl: 'w-80'
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	size,
	...rest
}) => {
	return (
		<button
			{...rest}
			className={cn(
				`bg-linear-to-b from-rose-400 to-rose-600 text-white rounded-md h-10 flex items-center justify-center cursor-pointer transition hover:shadow-lg hover:shadow-rose-300 active:-translate-y-1 hover:scale-x-105`,
				sizeClasses[size],
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
