import { IProduct } from '@/src/types/product.interface'
import { getDiscountPercent } from '@/src/utils/getDiscountPercent'
import cn from 'clsx'
import {
	ButtonHTMLAttributes,
	FC,
	PropsWithChildren,
	useEffect,
	useState
} from 'react'

interface ProductInfoLabelProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	product: IProduct
}

const targetDays = 7

const ProductInfoLabel: FC<PropsWithChildren<ProductInfoLabelProps>> = ({
	product,
	className
}) => {
	const [actionLabels, setActionLabels] = useState<string[]>([])

	const diffInMs = new Date().getTime() - new Date(product.createdAt).getTime()
	const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

	const currentValue = (): string => {
		if (diffInDays < targetDays) {
			return 'new'
		}
		if (product.discount > 0) {
			return getDiscountPercent(product.price, product.discount)
		}
		return ''
	}

	useEffect(() => {
		let count = []
		if (diffInDays < targetDays) count.push('new')
		if (product.discount > 0) count.push('sale')

		setActionLabels(count)
	}, [diffInDays, targetDays, product.discount])

	return (
		<div className='absolute z-10 bottom-2 right-2 space-y-1'>
			{actionLabels.length > 0 &&
				actionLabels.map(el => {
					return (
						<div
							key={el}
							className={cn(
								' w-12 h-12 flex justify-center items-center rounded-full text-white shadow',
								{
									'bg-rose-400/80': el === 'sale',
									'bg-teal-400/80': el === 'new'
								},
								className
							)}
						>
							{el === 'sale'
								? getDiscountPercent(product.price, product.discount)
								: el}
						</div>
					)
				})}
		</div>
	)
}

export default ProductInfoLabel
