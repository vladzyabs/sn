import React from 'react'
import {NavLink} from 'react-router-dom'
import userLogo from '../../assets/img/user-logo.png'
import {UserType} from '../../redux/usersPage/usersType'
import style from './Users.module.scss'
import {paths} from '../../layout/paths'

type PropsUsersType = {
   users: UserType[]
   pageSize: number
   totalCount: number
   currentPage: number
   onFollow: (id: number) => void
   onUnfollow: (id: number) => void
   onPageChanged: (page: number) => void
   isFollowingProgress: number[]
   onFollowChanged: (value: boolean, id: number) => void
}

function Users(props: PropsUsersType) {
   debugger
   let pagesCount = Math.ceil(props.totalCount / props.pageSize)
   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   return (
      <div className={style.users}>
         <h1>Users</h1>
         <div>
            {
               pages.map(p => {
                  return <span key={p} className={props.currentPage === p ? style.selectedPage : ''}
                               onClick={() => props.onPageChanged(p)}>{p}</span>
               })
            }
         </div>
         {props.users.map(user => <div key={user.id} className={style.user}>
            <div className={style.userPhoto}>
               <NavLink to={paths.profile + '/' + user.id}>
                  <img className={style.userPhotoPic} src={user.photos.small || userLogo} alt=""/>
               </NavLink>
               {user.followed
                  ?
                  <button className={style.userBtn}
                          onClick={() => props.onUnfollow(Number(user.id))}
                          disabled={props.isFollowingProgress.some(id => id === user.id)}>unsubscribe</button>
                  : <button className={style.userBtn}
                            onClick={() => props.onFollow(Number(user.id))}
                            disabled={props.isFollowingProgress.some(id => id === user.id)}>subscribe</button>
               }
            </div>
            <div className={style.userInf}>
               <div className={style.userName}>
                  <span>{user.name}</span>
                  <span>{user.status}</span>
               </div>
               <div className={style.userLocation}>
                  <span>{'user.location.county'}</span>
                  <span>{'user.location.city'}</span>
               </div>
            </div>
         </div>)}
      </div>
   )
}

export default Users
