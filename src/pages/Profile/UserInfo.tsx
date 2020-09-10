import React from 'react'
import styles from './Profile.module.scss'
import defPhoto from '../../assets/img/user-logo.png'
import {ProfileInfoType} from '../../redux/profilePage/profileType'
import ProfileStatus from './ProfileStatus'

type PropsUserInfoType = {
   userInfo: ProfileInfoType
   status: string
   updateStatus: (status: string) => void
}

function UserInfo(props: PropsUserInfoType) {
   if (!props.userInfo) return null

   const photo = typeof props.userInfo.photos.large === 'string' ? props.userInfo.photos.large : defPhoto
   return (
      <div className={styles.userInf}>
         <div className={styles.userPhoto}>
            <img src={photo} alt=""/>
         </div>
         <div className={styles.aboutUser}>
            <div className={styles.userName}>
               <h1>{props.userInfo.fullName}</h1>
               <p>{props.userInfo.aboutMe}</p>
               <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={styles.userDesc}>
               {props.userInfo.contacts.facebook &&
               <p>facebook: <a href={props.userInfo.contacts.facebook}>{props.userInfo.contacts.facebook}</a></p>}
               {props.userInfo.contacts.github &&
               <p>github: <a href={props.userInfo.contacts.github}>{props.userInfo.contacts.github}</a></p>}
               {props.userInfo.contacts.instagram &&
               <p>instagram: <a href={props.userInfo.contacts.instagram}>{props.userInfo.contacts.instagram}</a>
               </p>}
               {props.userInfo.contacts.twitter &&
               <p>twitter: <a href={props.userInfo.contacts.twitter}>{props.userInfo.contacts.twitter}</a></p>}
               {props.userInfo.contacts.vk &&
               <p>vk: <a href={props.userInfo.contacts.vk}>{props.userInfo.contacts.vk}</a></p>}
               {props.userInfo.contacts.youtube &&
               <p>youtube: <a href={props.userInfo.contacts.youtube}>{props.userInfo.contacts.youtube}</a></p>}
               {props.userInfo.contacts.website &&
               <p>website: <a href={props.userInfo.contacts.website}>{props.userInfo.contacts.website}</a></p>}
            </div>
         </div>
      </div>
   )
}

export default UserInfo
