import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger
} from '@/src/components/ui/Sheet'
import { Menu } from 'lucide-react'
import { HeaderMenu } from './HeaderMenu'

export function BurgerMenu() {
	return (
		<div className='max-sm:block hidden'>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant='ghost' size='icon'>
						<Menu />
					</Button>
				</SheetTrigger>
				<SheetContent side='right' className='bg-black/90'>
					<SheetTitle className='hidden'></SheetTitle>
					<HeaderMenu className='p-2 flex-col items-center h-full' />
					<SheetDescription className='hidden'></SheetDescription>
				</SheetContent>
			</Sheet>
		</div>
	)
}
