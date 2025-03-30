import StoreLayout from '@/src/components/layouts/store-layout/StoreLayout'
import { FC, PropsWithChildren } from 'react'

const layout: FC<PropsWithChildren> = ({ children }) => {
	return <StoreLayout>{children}</StoreLayout>
}

export default layout
