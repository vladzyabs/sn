import React from 'react'
import styles from './Users.module.scss'
import { NavLink } from 'react-router-dom'
import { paths } from '../../layout/paths'
import userLogo from '../../assets/img/user-logo.png'
import { UserType } from '../../redux/usersPage/usersType'

type UserPropsType = {
   user: UserType
   isFollowingProgress: number[]
   onUnfollow: (id: number) => void,
   onFollow: (id: number) => void
}

const User = (props: UserPropsType) => {
   return (
      <div key={props.user.id} className={styles.user}>
         <div className={styles.userPhoto}>
            <NavLink to={paths.profile + '/' + props.user.id}>
               <img className={styles.userPhotoPic} src={props.user.photos.small || userLogo} alt=""/>
            </NavLink>
            {props.user.followed
               ?
               <button className={styles.userBtn}
                       onClick={() => props.onUnfollow(Number(props.user.id))}
                       disabled={props.isFollowingProgress.some(id => id === props.user.id)}>unsubscribe</button>
               : <button className={styles.userBtn}
                         onClick={() => props.onFollow(Number(props.user.id))}
                         disabled={props.isFollowingProgress.some(id => id === props.user.id)}>subscribe</button>
            }
         </div>
         <div className={styles.userInf}>
            <div className={styles.userName}>
               <span>{props.user.name}</span>
               <span>{props.user.status}</span>
            </div>
            {/*<div className={style.userLocation}>*/}
            {/*   <span>{'user.location.county'}</span>*/}
            {/*   <span>{'user.location.city'}</span>*/}
            {/*</div>*/}
         </div>
      </div>
   )
}

export default User
