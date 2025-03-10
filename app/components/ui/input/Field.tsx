import cn from 'clsx'
import { forwardRef } from 'react'
import { IField } from './field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{ Icon, placeholder, error, className, type = 'text', style, ...rest },
		ref
	) => {
		return (
			<div className={cn('relative w-full pb-4', className)} style={style}>
				<label>
					{Icon && <Icon />}
					<span className={`text-sm opacity-70`}>{placeholder}</span>
					<input
						ref={ref}
						type={type}
						placeholder={placeholder}
						{...rest}
						className={
							'w-full border border-stone-300 rounded-md p-2 placeholder:font-light placeholder:text-sm'
						}
					/>
					{error && (
						<div className={'absolute text-sm text-rose-500'}>{error}</div>
					)}
				</label>
			</div>
		)
	}
)

export default Field
