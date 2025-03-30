import { PUBLIC_URL } from '@/src/config/url.config'
import { AuthService } from '@/src/services/auth/auth.service'
import { AuthType, IAuthData } from '@/src/types/auth.types'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export function useAuthForm(authType: AuthType) {
	const router = useRouter()

	const form = useForm<IAuthData>({
		mode: 'onChange'
	})

	const { mutate, isPending } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthData) => AuthService.main(authType, data),
		onSuccess() {
			form.reset()
			toast.success('Авторизація успішна')
			router.replace(PUBLIC_URL.home())
		},
		onError(error) {
			if (error.message) {
				toast.error(error.message)
			} else {
				toast.error('Помилка при авторизації')
			}
		}
	})

	const onSubmit: SubmitHandler<IAuthData> = data => {
		mutate(data)
	}

	return { onSubmit, form, isPending }
}
