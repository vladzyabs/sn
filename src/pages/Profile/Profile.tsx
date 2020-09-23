import React from 'react'
import UserInfo from './UserInfo'
import styles from './Profile.module.scss'
import MyPosts from './MyPosts'
import {ProfileInfoType} from '../../redux/profilePage/profileType'
import Preloader from '../../components/common/Preloader/Preloader'

type PropsProfileType = {
   isOwner: boolean
   posts: any
   status: string
   profileInfo: ProfileInfoType
   updateStatus: (status: string) => void
   addPost: (value: string) => void
   addLike: (id: string) => void
}

function Profile(props: PropsProfileType) {

   if (!props.profileInfo) {
      return <Preloader/>
   }

   return (
      <div className={styles.profile}>

         <UserInfo isOwner={props.isOwner}
                   userInfo={props.profileInfo}
                   status={props.status}
                   updateStatus={props.updateStatus}/>

         <MyPosts posts={props.posts}
                  addPost={props.addPost}
                  addLike={props.addLike}/>

      </div>
   )
}

export default React.memo(Profile)
