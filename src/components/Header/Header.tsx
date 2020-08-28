import React from 'react'
import styles from './Header.module.scss'
import {RootStateType} from '../../redux/rootStore'
import {connect, ConnectedProps} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {paths} from '../../layout/paths'
import {thunkLogout} from '../../redux/authReducer/authAction'
import Icon, {iconsName, iconsPrefix} from '../Icon/Icon'

class Header extends React.Component<PropsFromRedux & {}> {
   render() {
      return (
         <header className={styles.header}>
            <div className={styles.logo}>SN</div>
            <div className={styles.auth}>
               {
                  this.props.isAuth
                     ? <div>{this.props.login}</div>
                     : <div>
                        <NavLink className={styles.headerLink} to={paths.login}>
                           Login
                           <Icon size={'xs'} prefix={iconsPrefix.fas} iconName={iconsName.signInAlt}/>
                        </NavLink>
                     </div>
               }
               {this.props.isAuth && <span className={styles.headerLink} onClick={() => this.props.thunkLogout()}>
                  logout
                  <Icon size={'xs'} prefix={iconsPrefix.fas} iconName={iconsName.signOutAlt}/>
               </span>}
            </div>
         </header>
      )
   }
}

const mstp = (state: RootStateType) => {
   return {
      login: state.auth.login,
      isAuth: state.auth.isAuth,
   }
}

const connector = connect(mstp, {thunkLogout})

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Header)
