import React from 'react'
import styles from './Profile.module.scss'
import defPhoto from '../../assets/img/user-logo.png'
import {ProfileInfoType} from '../../redux/profilePage/profileType'
import {useDispatch, useSelector} from 'react-redux'
import {uploadUserPhoto} from '../../redux/profilePage/profileAction'
import {RootStateType} from '../../redux/rootStore'
import ProfileData from './ProfileData'
import ProfileDataForm from './ProfileDataForm'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {SaveProfileParamsType} from '../../api/apiType'

type PropsUserInfoType = {
   userInfo: ProfileInfoType
   status: string
   isOwner: boolean
   updateStatus: (status: string) => void
   saveProfile: (userID: number, profileData: SaveProfileParamsType) => void
}

function UserInfo(props: PropsUserInfoType) {
   const dispatch = useDispatch()
   const photoLoading = useSelector<RootStateType, boolean>(state => state.profileData.photoLoading)
   const [editMode, setEditMode] = React.useState<boolean>(false)

   if (Object.keys(props.userInfo).length === 0) {
      return null
   }

   const photo = typeof props.userInfo.photos.large === 'string' ? props.userInfo.photos.large : defPhoto

   const onChangePhoto = (e: any) => {
      if (e.target.files.length) {
         if (window.confirm('Are you sure you want to change the photo?')) {
            dispatch(uploadUserPhoto(e.target.files[0]))
         }
      }
   }

   const onChangeEditMode = () => setEditMode(prevState => !prevState)

   const onFormSubmit = (formData: any) => {
      props.saveProfile(props.userInfo.userId, formData)
      // onChangeEditMode()
   }

   return (
      <div className={styles.userInf}>

         <div className={styles.btnChangeEditMode}
              onDoubleClick={onChangeEditMode}><FontAwesomeIcon icon={'cog'}/></div>

         <div className={styles.userPhoto}>
            {photoLoading && <div className={styles.photoLoading}>loading...</div>}
            <img src={photo} alt=""/>
            {
               props.isOwner && <input type="file"
                                       className={styles.photoUpload}
                                       onChange={onChangePhoto}
               />
            }
         </div>

         {
            editMode
               ? <ProfileDataForm userInfo={props.userInfo}
                                  formSubmit={onFormSubmit}/>
               : <ProfileData status={props.status}
                              isOwner={props.isOwner}
                              userInfo={props.userInfo}
                              updateStatus={props.updateStatus}/>
         }

      </div>
   )
}

export default React.memo(UserInfo)
