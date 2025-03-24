import { StatisticService } from '@/src/services/statistics.service'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export const useGetStatistics = () => {
	const { data: main } = useQuery({
		queryKey: ['get main statistics'],
		queryFn: () => StatisticService.getMain()
	})

	const { data: middle } = useQuery({
		queryKey: ['get middle statistics'],
		queryFn: () => StatisticService.getMiddle()
	})

	return useMemo(() => ({ main, middle }), [main, middle])
}
