import React from 'react'
import styles from './Profile.module.scss'
import defPhoto from '../../assets/img/user-logo.png'
import {ProfileInfoType} from '../../redux/profilePage/profileType'
import ProfileStatus from './ProfileStatus'
import {useDispatch, useSelector} from 'react-redux'
import {uploadUserPhoto} from '../../redux/profilePage/profileAction'
import {RootStateType} from '../../redux/rootStore'

type PropsUserInfoType = {
   userInfo: ProfileInfoType
   status: string
   isOwner: boolean
   updateStatus: (status: string) => void
}

function UserInfo(props: PropsUserInfoType) {
   const dispatch = useDispatch()
   const photoLoading = useSelector<RootStateType, boolean>(state => state.profileData.photoLoading)

   if (!props.userInfo) return null

   const photo = typeof props.userInfo.photos.large === 'string' ? props.userInfo.photos.large : defPhoto

   const onChangePhoto = (e: any) => {
      if (e.target.files.length) {
         if (window.confirm('Are you sure you want to change the photo?')) {
            dispatch(uploadUserPhoto(e.target.files[0]))
         }
      }
   }

   return (
      <div className={styles.userInf}>
         <div className={styles.userPhoto}>
            {photoLoading && <div className={styles.photoLoading}>loading...</div>}
            <img src={photo} alt=""/>
            {
               props.isOwner && <input type="file" className={styles.photoUpload} onChange={onChangePhoto}/>
            }
         </div>
         <div className={styles.aboutUser}>
            <div className={styles.userName}>
               <h1>{props.userInfo.fullName}</h1>
               <p>{props.userInfo.aboutMe}</p>
               {props.isOwner
                  ? <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                  : <span className={styles.statusOffEditMode}>{props.status}</span>}
            </div>
            <div className={styles.userDesc}>
               {
                  props.userInfo.contacts.facebook &&
                  <p>facebook: <a href={props.userInfo.contacts.facebook}>{props.userInfo.contacts.facebook}</a></p>
               }
               {
                  props.userInfo.contacts.github &&
                  <p>github: <a href={props.userInfo.contacts.github}>{props.userInfo.contacts.github}</a></p>
               }
               {
                  props.userInfo.contacts.instagram &&
                  <p>instagram: <a href={props.userInfo.contacts.instagram}>{props.userInfo.contacts.instagram}</a>
                  </p>
               }
               {
                  props.userInfo.contacts.twitter &&
                  <p>twitter: <a href={props.userInfo.contacts.twitter}>{props.userInfo.contacts.twitter}</a></p>
               }
               {
                  props.userInfo.contacts.vk &&
                  <p>vk: <a href={props.userInfo.contacts.vk}>{props.userInfo.contacts.vk}</a></p>
               }
               {
                  props.userInfo.contacts.youtube &&
                  <p>youtube: <a href={props.userInfo.contacts.youtube}>{props.userInfo.contacts.youtube}</a></p>
               }
               {
                  props.userInfo.contacts.website &&
                  <p>website: <a href={props.userInfo.contacts.website}>{props.userInfo.contacts.website}</a></p>
               }
            </div>
         </div>
      </div>
   )
}

export default React.memo(UserInfo)
