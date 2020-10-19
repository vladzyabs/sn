import React from 'react'
import {ProfileInfoType} from '../../redux/profilePage/profileType'
import {useFormik} from 'formik'
import styles from './Profile.module.scss'

type ProfileDataFormPropsType = {
   userInfo: ProfileInfoType
   formSubmit: (formData: any) => void
}

function ProfileDataForm(props: ProfileDataFormPropsType) {

   const {userInfo} = props

   const formik = useFormik({
      initialValues: {
         fullName: userInfo.fullName || '',
         lookingForAJob: userInfo.lookingForAJob,
         aboutMe: userInfo.aboutMe || '',
      },
      onSubmit: values => {
         props.formSubmit(values)
      },
   })

   return (
      <div className={styles.aboutUser}>
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
                  <label>about me
                     <textarea {...formik.getFieldProps('aboutMe')}/>
                  </label>
               </div>

               <div className={styles.formDataItem}>
                  <button type="submit">Save</button>
               </div>
            </div>
         </form>
      </div>
   )
}

export default React.memo(ProfileDataForm)