import { IProduct } from '@/src/types/product.interface'
import cn from 'clsx'
import Image from 'next/image'
import { FC, useState } from 'react'

interface ProductImagesProps {
	product: IProduct
}

const ProductImages: FC<ProductImagesProps> = ({ product }) => {
	const [currentImage, setCurrentImage] = useState<string>(product.images[0])
	return (
		<div className='relative max-sm:hidden col-span-1 space-y-1'>
			<Image
				width={0}
				height={0}
				sizes='100vw'
				className='w-full h-auto aspect-square object-cover border'
				src={currentImage}
				alt={product.name}
			/>
			{product.images.length > 1 && (
				<div className='absolute w-20 shrink-0 flex gap-1'>
					{product.images.map(img => (
						<Image
							width={80}
							height={80}
							className={cn(
								'object-cover aspect-square border cursor-pointer hover:shadow-lg hover:scale-105 transition',
								{ 'border-neutral-600': currentImage === img }
							)}
							src={img}
							alt={product.name}
							key={img}
							onClick={() => setCurrentImage(img)}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default ProductImages
