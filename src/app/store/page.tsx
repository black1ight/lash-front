import { NO_INDEX_PAGE } from '@/src/constants/seo.constants'
import { Metadata, NextPage } from 'next'
import Store from './Store'

interface Props {}

export const metadata: Metadata = {
	title: 'Керування магазином',
	...NO_INDEX_PAGE
}

const Page: NextPage<Props> = ({}) => {
	return <Store />
}

export default Page
