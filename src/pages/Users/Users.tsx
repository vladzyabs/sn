import React from 'react'
import { UserType } from '../../redux/usersPage/usersType'
import styles from './Users.module.scss'
import User from './user'

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
   let pagesCount = Math.ceil(props.totalCount / props.pageSize)
   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   return (
      <div className={styles.users}>
         <h1>Users</h1>
         <div>
            {
               pages.map(p => {
                  return <span key={p} className={props.currentPage === p ? styles.selectedPage : ''}
                               onClick={() => props.onPageChanged(p)}>{p}</span>
               })
            }
         </div>
         {props.users.map(user => <User key={user.id}
                                        user={user}
                                        isFollowingProgress={props.isFollowingProgress}
                                        onFollow={props.onFollow}
                                        onUnfollow={props.onUnfollow}/>)}
      </div>
   )
}

export default React.memo(Users)
