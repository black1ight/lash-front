'use client'

import Heading from '@/src/components/ui/Heading'
import { IProduct } from '@/src/types/product.interface'
import { convertPrice } from '@/src/utils/converPrice'
import Image from 'next/image'
//
interface ProductProps {
	product: IProduct
	similarProducts: IProduct[]
}

export function Product({ product, similarProducts }: ProductProps) {
	return (
		<div>
			<Heading title={product.name} />
			<div className='grid grid-cols-3 gap-4'>
				<div className='col-span-1'>
					<Image
						width={0}
						height={0}
						sizes='100vw'
						style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover' }}
						src={product.images[0]}
						alt={product.name}
					/>
				</div>
				<div className='col-span-2 space-y-4'>
					<h3>{product.name}</h3>

					<div className='flex items-center p-4'>
						{product.discount > 0 && (
							<div
								className={`relative inline-block rotate-45 w-14 h-14 p-4 rounded-lg border border-black`}
							>
								<span className='absolute top-1/2 left-1/2 -translate-1/2 -rotate-45 opacity-80 mr-3 line-through'>
									{convertPrice(product.price)}
								</span>
							</div>
						)}

						<div
							className={`relative inline-block rotate-45 w-20 h-20 p-4 -bg-linear-45 from-black/80 from-40% to-black/60 rounded-lg ${
								product.discount > 0 && 'from-pink-600 to-pink-400'
							}`}
						>
							<span className='absolute top-1/2 left-1/2 -translate-1/2 -rotate-45 text-2xl text-white'>
								{convertPrice(
									product.discount > 0
										? product.price - product.discount
										: product.price
								)}
							</span>
						</div>
					</div>
					<p>{product.description}</p>
				</div>
			</div>
		</div>
	)
}
