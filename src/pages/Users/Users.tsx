import React from 'react'
import { UserType } from '../../redux/usersPage/usersType'
import styles from './Users.module.scss'
import User from './user'
import Paginator from '../../components/common/Paginator/Paginator'

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
   return (
      <div className={styles.users}>
         <h1>Users</h1>
         <div className={styles.paginator}>
            <Paginator onPageChanged={props.onPageChanged}
                       totalItemsCount={props.totalCount}
                       currentPage={props.currentPage}
                       pageSize={props.pageSize}
                       portionSize={10}/>
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
