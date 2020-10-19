import React from 'react'
import {ProfileInfoType} from '../../redux/profilePage/profileType'
import {useFormik} from 'formik'
import styles from './Profile.module.scss'
import {saveProfile} from '../../redux/profilePage/profileAction'
import {useDispatch} from 'react-redux'
import {SaveProfileParamsType} from '../../api/apiType'

type ProfileDataFormPropsType = {
   userInfo: ProfileInfoType
   formSubmit: (formData: any) => void
}

function ProfileDataForm(props: ProfileDataFormPropsType) {

   const {userInfo} = props
   const dispatch = useDispatch()

   const formik = useFormik({
      initialValues: {
         ...userInfo,
         fullName: userInfo.fullName || '',
         lookingForAJob: userInfo.lookingForAJob,
         lookingForAJobDescription: userInfo.lookingForAJobDescription || '',
         aboutMe: userInfo.aboutMe,
         contacts: {
            github: userInfo.contacts.github || '',
            vk: userInfo.contacts.vk || '',
            facebook: userInfo.contacts.facebook || '',
            instagram: userInfo.contacts.instagram || '',
            twitter: userInfo.contacts.twitter || '',
            website: userInfo.contacts.website || '',
            youtube: userInfo.contacts.youtube || '',
            mainLink: userInfo.contacts.mainLink || '',
         },
      },
      onSubmit: (values: SaveProfileParamsType) => {
         dispatch(saveProfile(userInfo.userId, values))
      },
   })

   return (
      <div className={styles.aboutUser}>
         <h1>Profile settings</h1>
         <form onSubmit={formik.handleSubmit}>
            <div className={styles.formData}>

               <div className={styles.formDataItem}>
                  <label>full name:
                     <input type="text" {...formik.getFieldProps('fullName')}/>
                  </label>
               </div>

               <div className={styles.formDataItem}>
                  <label>looking for a job
                     <input type="checkbox" {...formik.getFieldProps('lookingForAJob')}/>
                  </label>
               </div>

               <div className={styles.formDataItem}>
                  <label>looking for a job description
                     <textarea {...formik.getFieldProps('lookingForAJobDescription')}/>
                  </label>
               </div>

               <div className={styles.formDataItem}>
                  <label>about me
                     <textarea {...formik.getFieldProps('aboutMe')}/>
                  </label>
               </div>

               <h4>Contacts:</h4>

               {
                  Object.keys(userInfo.contacts).map(key => {
                     return <div key={key} className={styles.formDataItem}>
                        <label>{key}
                           <input {...formik.getFieldProps(`contacts.${key}`)}/>
                        </label>
                     </div>
                  })
               }

               <div className={styles.formDataItem}>
                  <button type="submit">Save</button>
               </div>
            </div>
         </form>
      </div>
   )
}

export default React.memo(ProfileDataForm)


// <div className={styles.formDataItem}>
//    <label>github
//    <input {...formik.getFieldProps('contacts.github')}/>
// </label>
// </div>
// <div className={styles.formDataItem}>
// <label>vk
// <input {...formik.getFieldProps('contacts.vk')}/>
// </label>
// </div>
// <div className={styles.formDataItem}>
// <label>facebook
// <input {...formik.getFieldProps('contacts.facebook')}/>
// </label>
// </div>
// <div className={styles.formDataItem}>
// <label>instagram
// <input {...formik.getFieldProps('contacts.instagram')}/>
// </label>
// </div>
// <div className={styles.formDataItem}>
// <label>twitter
// <input {...formik.getFieldProps('contacts.twitter')}/>
// </label>
// </div>
// <div className={styles.formDataItem}>
// <label>website
// <input {...formik.getFieldProps('contacts.website')}/>
// </label>
// </div>
// <div className={styles.formDataItem}>
// <label>youtube
// <input {...formik.getFieldProps('contacts.youtube')}/>
// </label>
// </div>
// <div className={styles.formDataItem}>
// <label>mainLink
// <input {...formik.getFieldProps('contacts.mainLink')}/>
// </label>
// </div>