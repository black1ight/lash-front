import {
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from '@/src/components/ui/Card'
import { ILastUsers } from '@/src/types/statistics.interface'
import { convertPrice } from '@/src/utils/converPrice'
import Image from 'next/image'

interface LastUsersProps {
	data: ILastUsers[]
}

export function LastUsers({ data }: LastUsersProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Покупці</CardTitle>
			</CardHeader>
			<CardContent className='space-y-3'>
				{data.length ? (
					data.map(user => (
						<div
							key={user.name}
							className='flex gap-2 bg-bg p-2 rounded-lg shadow'
						>
							<Image
								className='rounded-full object-cover'
								src={user.avatarPath}
								alt={user.name}
								width={40}
								height={40}
							/>
							<div>
								<p>{user.name}</p>
								<p>{user.email}</p>
							</div>
							<div>{convertPrice(user.total || 0)}</div>
						</div>
					))
				) : (
					<div>Немає покупців</div>
				)}
			</CardContent>
		</Card>
	)
}
