'use client'

import { useActions } from '@/src/hooks/useActions'
import { useAuth } from '@/src/hooks/useAuth'
import { useAuthRedirect } from '@/src/hooks/useAuthRedirect'
import { IEmailPassword } from '@/src/store/user/user.interface'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/src/components/ui/button/Button'
import Heading from '@/src/components/ui/Heading'
import Field from '@/src/components/ui/input/Field'
import { validEmail } from './valid-email'

const Auth: FC = () => {
	useAuthRedirect()
	const { isLoading } = useAuth()
	const { authAction } = useActions()
	const [type, setType] = useState<AuthType>('login')

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		authAction({ data, type })
		reset()
	}
	return (
		<section className='flex items-center justify-center w-full h-screen bg-bg'>
			<div className='max-w-[300px] shadow-md rounded-md p-6 bg-white'>
				<Heading title='Auth' className='capitalize py-4 text-center' />
				<form onSubmit={handleSubmit(onSubmit)} className=''>
					<Field
						placeholder='email'
						error={errors.email?.message}
						{...formRegister('email', {
							required: 'Email is required',
							pattern: {
								value: validEmail,
								message: 'Please enter a valid email address'
							}
						})}
					/>
					<Field
						type='password'
						placeholder='password'
						error={errors.password?.message}
						{...formRegister('password', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Min length should more 6 symbols'
							}
						})}
					/>
					<Button
						type='submit'
						className='mx-auto mt-4'
						size='md'
						variant='dark'
					>
						Submit
					</Button>
				</form>

				<div
					onClick={() => setType(type === 'login' ? 'register' : 'login')}
					className='text-center opacity-60 pt-4  hover:cursor-pointer hover:opacity-90 hover:underline hover:underline-offset-4 decoration-1'
				>
					{type === 'login'
						? "You don't have an account?"
						: 'Already have an account?'}
				</div>
			</div>
		</section>
	)
}

export default Auth
