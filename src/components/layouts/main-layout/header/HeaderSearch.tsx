'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/src/components/ui/Input'
import { PUBLIC_URL } from '@/src/config/url.config'
import { Search, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function HeaderSearch() {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const router = useRouter()
	return (
		<div className='mx-auto flex items-center border-b border-white/50'>
			<Input
				className='border-none selection:bg-white/10'
				placeholder='Пошук'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
			/>
			<X
				onClick={() => setSearchTerm('')}
				className={`opacity-0 ${
					searchTerm && 'opacity-100'
				} text-white/50 hover:text-white cursor-pointer`}
			/>
			<Button
				disabled={!searchTerm}
				variant='ghost'
				size='icon'
				className='bg-transparent text-white/50 rounded-l-none border-l-0 cursor-pointer hover:bg-transparent hover:text-white'
				onClick={() =>
					router.push(PUBLIC_URL.catalog(`?searchTerm=${searchTerm}`))
				}
			>
				<Search size={20} />
			</Button>
		</div>
	)
}
