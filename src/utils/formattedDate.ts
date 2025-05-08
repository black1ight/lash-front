import { format } from 'date-fns'

export function formattedDate(date: string) {
	const result = date ? format(new Date(date), 'dd.MM.yyyy') : ''
	return result || ''
}
