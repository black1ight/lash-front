import { useQuery, useQueryClient } from '@tanstack/react-query'
import { removeFromStorage } from '../services/auth/auth.helper'
import { AuthService } from '../services/auth/auth.service'
import { UserService } from '../services/user.service'

export const useProfile = () => {
	const { data: profile, isLoading } = useQuery({
		queryKey: ['get-profile'],
		queryFn: () => UserService.getProfile(),
		select: ({ data }) => data
	})
	const queryClient = useQueryClient()
	const logout = async () => {
		removeFromStorage()
		await AuthService.logout()
		queryClient.resetQueries()
	}

	return { profile, isLoading, logout }
}
