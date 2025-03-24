import { useGetStatistics } from '../../../../hooks/queries/statistics/useGetStatistics'
import MainStatisticsItem from './MainStatisticsItem'

type Props = {}

const MainStatistics = (props: Props) => {
	const { main } = useGetStatistics()
	return (
		<div className='grid grid-cols-4 gap-4 text-center'>
			{main?.data.length
				? main.data.map(item => (
						<MainStatisticsItem key={item.name} item={item} />
				  ))
				: 'Немає данних'}
		</div>
	)
}

export default MainStatistics
