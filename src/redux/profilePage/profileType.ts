// profile type
export type PostsType = {
    id: string
    postValue: string
    countLike: number
}
export type ProfileType = {
    posts: PostsType[]
    newPosts: string
}