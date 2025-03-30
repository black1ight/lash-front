import {
	FormControl,
	FormField,
	FormItem,
	FormMessage
} from '@/src/components/ui/Form'
import { Input } from '@/src/components/ui/Input'
import { AuthType, IAuthData } from '@/src/types/auth.types'
import { UseFormReturn } from 'react-hook-form'
import { validEmail } from './valid-email'

interface AuthFieldsProps {
	form: UseFormReturn<IAuthData, any, undefined>
	isPending: boolean
	type?: AuthType
}

export function AuthFields({ form, isPending, type }: AuthFieldsProps) {
	const isReg = type === 'register' ? true : false
	return (
		<>
			<FormField
				control={form.control}
				name='email'
				rules={{
					required: "Поле обов'язкове",
					pattern: {
						value: validEmail,
						message: 'Некорректна адреса'
					}
				}}
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<Input
								{...field}
								value={field.value || ''}
								placeholder='Email'
								type='email'
								disabled={isPending}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name='password'
				rules={{
					required: "Поле обов'язкове",
					minLength: {
						message: 'Мінімум 6 символів',
						value: 6
					}
				}}
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<Input
								{...field}
								value={field.value || ''}
								placeholder='Password'
								type='password'
								disabled={isPending}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	)
}
