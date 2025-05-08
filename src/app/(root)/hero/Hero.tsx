import { SITE_DESCRIPTION } from '@/src/constants/seo.constants'

interface HeroProps {
	title: string
}

export function HeroSection({ title }: HeroProps) {
	return (
		<div className='px-4 py-2 bg-linear-90 from-neutral-200 to-neutral-100 border-l-4 border-pink-300'>
			<h1 className='text-xl'>{title}</h1>
			<span>{SITE_DESCRIPTION}</span>
		</div>
	)
}
