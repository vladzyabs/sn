import {createSelector} from 'reselect'
import {RootStateType} from '../rootStore'
import {UserType} from './usersType'

export const getUsers = (state: RootStateType): UserType[] => state.usersData.users

export const getUsersSelector = createSelector(getUsers, (users: UserType[]) => {
   return users.filter(u => true)
})

export const getPageSize = (state: RootStateType) => state.usersData.pageSize

export const getTotalCount = (state: RootStateType) => state.usersData.totalCount

export const getCurrentPage = (state: RootStateType) => state.usersData.currentPage

export const getIsLoading = (state: RootStateType) => state.usersData.isLoading

export const getIsFollowingProgress = (state: RootStateType) => state.usersData.followingInProgress
