import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react'
import Icon, {iconsName, iconsPrefix} from '../../components/Icon/Icon'
import styles from './Profile.module.scss'

type ProfileStatusPropsType = {
   status: string
   updateStatus: (status: string) => void
}

const ProfileStatus = (props: ProfileStatusPropsType) => {

   const [editMode, setEditMode] = useState<boolean>(false)
   const [status, setStatus] = useState<string>(props.status)

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])

   const onEditMode = () => {
      setEditMode(true)
   }

   const offEditMode = () => {
      setEditMode(false)
      props.updateStatus(status)
   }

   const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
      setStatus(e.currentTarget.value)
   }

   const pressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.charCode === 13) {
         offEditMode()
      }
   }

   return (
      <div className={styles.status}>
         {
            editMode
               ?
               <input type="text" value={status} onKeyPress={pressEnter} onChange={changeStatus}
                      onBlur={offEditMode} autoFocus/>
               :
               <div>
                     <span onDoubleClick={onEditMode}
                           className={styles.statusOffEditMode}>{status || 'Enter status'}</span>
                  <span className={styles.statusIcon}>
                        <Icon size={'xs'} prefix={iconsPrefix.fas} iconName={iconsName.pen}/>
                     </span>
               </div>
         }
      </div>
   )
}

export default ProfileStatus
