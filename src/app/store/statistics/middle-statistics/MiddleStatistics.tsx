import { useGetStatistics } from '@/src/hooks/queries/statistics/useGetStatistics'
import { LastUsers } from './LastUsers'
import { Overview } from './Overview'

export function MiddleStatistics() {
	const { middle } = useGetStatistics()
	return (
		<div className='grid grid-cols-4 gap-4'>
			{middle?.data.monthlySales.length || middle?.data.lastUsers.length ? (
				<>
					<div className='col-span-3'>
						<Overview data={middle.data.monthlySales} />
					</div>
					<div className='col-span-1'>
						<LastUsers data={middle.data.lastUsers} />
					</div>
				</>
			) : (
				<div>Інформація відсутня</div>
			)}
		</div>
	)
}
