'use client'

import { FC, useState } from 'react'

import { Button } from '@/src/components/ui/Button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/src/components/ui/Card'
import { Form } from '@/src/components/ui/Form'
import { AuthType } from '@/src/types/auth.types'
import { AuthFields } from './AuthFields'
import { useAuthForm } from './useAuthForm'

const Auth: FC = () => {
	const [type, setType] = useState<AuthType>('login')

	const { onSubmit, form, isPending } = useAuthForm(type)

	return (
		<div>
			<Card>
				<CardHeader>
					<CardTitle>
						{type === 'register' ? 'Створити аккаунт' : 'Увійти в аккаунт'}
					</CardTitle>
					<CardDescription>
						Увійдіть або створіть обліковий запис, щоб доєднатися до зручного та
						вигідного шопінгу.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form
							className='w-[300px] space-y-4'
							onSubmit={form.handleSubmit(onSubmit)}
						>
							<AuthFields form={form} isPending={isPending} type={type} />
							<Button className='w-40' disabled={isPending}>
								{type === 'register' ? 'Створити' : 'Увійти'}
							</Button>
						</form>
					</Form>
				</CardContent>
				<CardFooter>
					<Button
						onClick={() =>
							setType(prev => (prev === 'register' ? 'login' : 'register'))
						}
						variant={'link'}
					>
						{type === 'register'
							? 'Вже маєте аккаунт?'
							: 'Ще не маєте аккаунт?'}
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}

export default Auth
