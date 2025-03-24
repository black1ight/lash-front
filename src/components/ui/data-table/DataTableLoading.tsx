import { Loader } from 'lucide-react'
import { FC } from 'react'
import { Card, CardContent } from '../Card'
import { Skeleton } from '../Skeleton'

const DataTableLoading: FC = () => {
	return (
		<div>
			<Skeleton />
			<Skeleton />
			<Card>
				<CardContent>
					<div>
						<Loader />
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default DataTableLoading
