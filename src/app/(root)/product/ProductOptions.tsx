import cn from 'clsx'
import { useState } from 'react'

const colorsStyles = {
	blue: 'bg-blue-500',
	pink: 'bg-pink-500'
} as const

type ColorKey = keyof typeof colorsStyles

interface ProductOptionsProps {
	colors: ColorKey[]
}

export function ProductOptions({ colors }: ProductOptionsProps) {
	const [selectedColor, setSelectedColor] = useState<string>(colors[0])
	return (
		<div className='py-2 space-y-2'>
			<h3>Кольор:</h3>
			<ul className='flex gap-2'>
				{colors.map(color => {
					return (
						<button
							key={color}
							onClick={() => setSelectedColor(color)}
							type='button'
							className={cn(
								'w-6 h-6 rounded-full border-2',
								colorsStyles[color as ColorKey],
								selectedColor === color && 'ring-2 ring-black ring-offset-2'
							)}
							aria-label={`Выбрать цвет ${color}`}
						/>
					)
				})}
			</ul>
		</div>
	)
}
