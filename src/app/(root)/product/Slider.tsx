import { FC, useState } from 'react'

interface SliderProps {
	slides: string[]
}

const Slider: FC<SliderProps> = ({ slides }) => {
	const [current, setCurrent] = useState(0)

	const prevSlide = () => {
		setCurrent(current === 0 ? slides.length - 1 : current - 1)
	}

	const nextSlide = () => {
		setCurrent(current === slides.length - 1 ? 0 : current + 1)
	}

	return (
		<div className='relative hidden max-sm:block col-span-3 mx-auto overflow-hidden'>
			<div
				className='flex transition-transform duration-500'
				style={{ transform: `translateX(-${current * 100}%)` }}
			>
				{slides.map((slide, index) => (
					<div key={index} className='w-full flex-shrink-0'>
						<img
							src={slide}
							alt={`Slide ${index}`}
							className='w-full h-auto aspect-square object-cover'
						/>
					</div>
				))}
			</div>

			<button
				onClick={prevSlide}
				className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded'
			>
				‹
			</button>
			<button
				onClick={nextSlide}
				className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded'
			>
				›
			</button>
		</div>
	)
}

export default Slider
