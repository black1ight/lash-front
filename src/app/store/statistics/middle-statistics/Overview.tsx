import {
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from '@/src/components/ui/Card'
import {
	ChartConfig,
	ChartContainer,
	ChartTooltipContent
} from '@/src/components/ui/Chart'
import { IMonthlySales } from '@/src/types/statistics.interface'
import { convertPrice } from '@/src/utils/converPrice'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

const chartConfig = {
	value: {
		label: 'Прибуток',
		color: '#2b7fff'
	}
} satisfies ChartConfig

interface OverviewProps {
	data: IMonthlySales[]
}

export function Overview({ data }: OverviewProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Прибуток</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer
					className='aspect-auto h-[310px] w-full'
					config={chartConfig}
				>
					<AreaChart
						accessibilityLayer
						data={data}
						margin={{ left: 12, right: 12 }}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='date'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
						/>
						<ChartTooltipContent
							labelFormatter={convertPrice}
							indicator='line'
						/>
						<Area
							dataKey='value'
							type='natural'
							fill='var(--color-value)'
							stroke='var(--color-value)'
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
