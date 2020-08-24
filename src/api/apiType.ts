export type ResponseType<T = {}> = {
   data: T
   resultCode: number
   messages: Array<string>
}

export type AuthMeDataType = {
   id: number
   email: string
   login: string
}

export type ProfileDataType = {
   userId: number
   lookingForAJob: boolean
   lookingForAJobDescription: string
   fullName: string
   aboutMe: string
   contacts: {
      github: string
      vk: string
      facebook: string
      instagram: string
      twitter: string
      website: string
      youtube: string
      mainLink: string
   }
   photos: {
      small: string | null
      large: string | null
   }
}

export type UserApiType = {
   id: number
   name: string
   status: string
   photos: {
      small: string | null
      large: string | null
   }
   followed: boolean
}

export type UsersDataType = {
   error: string
   totalCount: number
   items: UserApiType[]
}
