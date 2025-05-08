import { PropsWithChildren } from 'react'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '../AlertDialog'

interface ConfirmModalProps {
	handleClick: () => void
	description?: string
}

export default function ConfirmModal({
	children,
	handleClick,
	description
}: PropsWithChildren<ConfirmModalProps>) {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Ви впевнені?</AlertDialogTitle>
					<AlertDialogDescription>
						{description ? description : 'цю дію буде неможливо відмінити'}
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Закрити</AlertDialogCancel>
					<AlertDialogAction
						onClick={() => handleClick()}
						className='bg-pink-600 hover:bg-pink-600/80'
					>
						Підтвердити
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
