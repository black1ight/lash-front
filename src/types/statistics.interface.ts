export interface IMainStatistics {
	id: number
	name: string
	value: number
}

export interface IMonthlySales {
	data: string
	value: number
}

export interface ILastUsers {
	id: number
	name: string
	email: string
	avatarPath: string
	total: number
}

export interface IMiddleStatistics {
	monthlySales: IMonthlySales[]
	lastUsers: ILastUsers[]
}
