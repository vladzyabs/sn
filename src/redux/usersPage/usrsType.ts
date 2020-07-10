export type UserType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        county: string
    }
}

export type UsersType = UserType[]

