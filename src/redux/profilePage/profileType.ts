// profile type
export type ProfileInfoType = {
    aboutMe: null | string
    contacts: {
        facebook: null | string
        github: null | string
        instagram: null | string
        mainLink: null | string
        twitter: null | string
        vk: null | string
        website: null | string
        youtube: null | string
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: null | any
    photos: {
        large: null | string
        small: null | string
    }
    userId: number | string
} | null
export type PostsType = {
    id: string
    postValue: string
    countLike: number
}
export type ProfileStateType = {
    profileInfo: ProfileInfoType
    posts: PostsType[]
    newPosts: string
}