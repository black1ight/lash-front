import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { AuthService } from '../services/auth/auth.service'

export function useLogout() {
	const router = useRouter()
	const { mutate: logout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => AuthService.logout(),
		onSuccess: () => router.push('/auth')
	})
	return { logout }
}
