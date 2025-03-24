import { cva, VariantProps } from 'class-variance-authority'
import cn from 'clsx'
import { LoaderCircle } from 'lucide-react'

const iconVariants = cva('', {
	variants: {
		size: {
			default: 'size-9',
			sm: 'size-6'
		}
	},
	defaultVariants: {
		size: 'default'
	}
})

type TypeIconVariants = VariantProps<typeof iconVariants>

export const Loader = ({ size }: TypeIconVariants) => {
	return <LoaderCircle className={cn(iconVariants({ size }))} />
}
