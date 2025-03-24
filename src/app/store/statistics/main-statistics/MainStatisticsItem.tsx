import { IMainStatistics } from '@/src/types/statistics.interface'
import { convertPrice } from '@/src/utils/converPrice'
import CountUp from 'react-countup'
import { getIcon } from './statistics.util'

interface MainStatisticsItemProps {
	item: IMainStatistics
}

const MainStatisticsItem = ({ item }: MainStatisticsItemProps) => {
	console.log(item.id)
	const Icon = getIcon(item.id)
	return (
		<div className='bg-white col-span-1 rounded-lg p-2 shadow space-y-2 text-stone-500'>
			<div className='flex justify-between items-center gap-4 text-sm'>
				<h3>{item.name}</h3>
				<Icon strokeWidth={1.5} size={16} />
			</div>
			<h2 className='text-3xl py-4 text-stone-700'>
				{item.id !== 1 ? (
					<CountUp end={item.value} />
				) : (
					<CountUp end={item.value} formattingFn={convertPrice} />
				)}
			</h2>
		</div>
	)
}

export default MainStatisticsItem
