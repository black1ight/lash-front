import MainLayout from '@/src/components/layouts/main-layout/MainLayout'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return <MainLayout>{children}</MainLayout>
}
