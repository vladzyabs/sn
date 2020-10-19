import React from 'react'
import styles from './Profile.module.scss'
import ProfileStatus from './ProfileStatus'
import {ProfileInfoType} from '../../redux/profilePage/profileType'

type ProfileDataPropsType = {
   status: string
   isOwner: boolean
   userInfo: ProfileInfoType
   updateStatus: (status: string) => void
}

function ProfileData(props: ProfileDataPropsType) {
   if (!props.userInfo) {return null}
   return(
      <div className={styles.aboutUser}>
         <div className={styles.userName}>
            <h1>{props.userInfo.fullName}</h1>
            <p>{props.userInfo.aboutMe}</p>
            {props.isOwner
               ? <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
               : <span className={styles.statusOffEditMode}>{props.status}</span>}
         </div>
         <div className={styles.userDesc}>
            {props.userInfo.lookingForAJob && <div>Looking for a job</div>}
            {
               Object.keys(props.userInfo.contacts).map(key =>
                  // @ts-ignore
                  props.userInfo.contacts[key] === true
                     // @ts-ignore
                     ? <Contact value={props.userInfo.contacts[key]} title={key}/>
                     : null,
               )
            }
         </div>
      </div>
   )
}

function Contact(props: { title: string, value: string }) {
   return (
      <p>{props.title}: <a href={props.value}>{props.value}</a></p>
   )
}

export default React.memo(ProfileData)
