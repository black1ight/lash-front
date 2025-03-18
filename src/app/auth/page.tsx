import { Metadata, NextPage } from 'next'
import Auth from './Auth'
export const metadata: Metadata = {
	title: 'Авторизація'
}
const Page: NextPage = async () => {
	return (
		<div>
			<Auth />
		</div>
	)
}

export default Page
