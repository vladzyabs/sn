export type UserType = {
    name: string
    id: string | number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}

export type UsersStateType = {
    users: UserType[]
    totalCount: number
    pageSize: number
    currentPage: number
}
