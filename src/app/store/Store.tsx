'use client'

import Heading from '@/src/components/ui/Heading'
import { FC } from 'react'
import MainStatistics from './statistics/main-statistics/MainStatistics'
import { MiddleStatistics } from './statistics/middle-statistics/MiddleStatistics'

const Store: FC = () => {
	return (
		<div className='space-y-4'>
			<Heading title='Статистика' />
			<MainStatistics />
			<MiddleStatistics />
		</div>
	)
}

export default Store
