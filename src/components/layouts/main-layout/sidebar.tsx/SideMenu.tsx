import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger
} from '@/src/components/ui/Sheet'
import { ArrowRightFromLine } from 'lucide-react'
import Category from './category/Category'

export function SideMenu() {
	return (
		<div className='max-sm:block absolute z-[100] top-24 left-0 hidden'>
			<Sheet>
				<SheetTrigger asChild>
					<Button
						variant='ghost'
						size='icon'
						className='rounded-r-full bg-black/20'
					>
						<ArrowRightFromLine />
					</Button>
				</SheetTrigger>
				<SheetContent
					side='left'
					className='px-4 pt-10 z-[110] text-white/50 bg-black/90'
				>
					<SheetTitle className='hidden'></SheetTitle>
					<Category />
					<SheetDescription className='hidden'></SheetDescription>
				</SheetContent>
			</Sheet>
		</div>
	)
}
