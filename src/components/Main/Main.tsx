import React, {Suspense} from 'react'
import {Switch, Route} from 'react-router-dom'
import {paths} from '../../layout/paths'
import style from './Main.module.scss'
import ProfileContainer from '../../pages/Profile/ProfileContainer'
import Preloader from '../common/Preloader/Preloader'

const Settings = React.lazy(() => import('../../pages/Settings/Settings'))
const News = React.lazy(() => import('../../pages/News/News'))
const Music = React.lazy(() => import('../../pages/Music/Music'))
const Login = React.lazy(() => import('../../pages/Login/Login'))
const NotFound = React.lazy(() => import('../../pages/NotFound/NotFound'))
const Dialogs = React.lazy(() => import('../../pages/Dialogs/Dialogs'))
const UsersContainer = React.lazy(() => import('../../pages/Users/UsersContainer'))

type PropsMainType = {}

function Main(props: PropsMainType) {
   return (
      <main className={style.main}>
         <Switch>

            <Route path={paths.main} exact>
               <Suspense fallback={<Preloader/>}><Login/></Suspense>
            </Route>

            <Route path={paths.profileWithId}><ProfileContainer/></Route>

            <Route path={paths.users}>
               <Suspense fallback={<Preloader/>}><UsersContainer/></Suspense>
            </Route>

            <Route path={paths.dialogs}>
               <Suspense fallback={<Preloader/>}><Dialogs/></Suspense>
            </Route>

            <Route path={paths.news}>
               <Suspense fallback={<Preloader/>}><News/></Suspense>
            </Route>

            <Route path={paths.music}>
               <Suspense fallback={<Preloader/>}><Music/></Suspense>
            </Route>

            <Route path={paths.settings}>
               <Suspense fallback={<Preloader/>}><Settings/></Suspense>
            </Route>

            <Route path={paths.login}>
               <Suspense fallback={<Preloader/>}><Login/></Suspense>
            </Route>

            <Suspense fallback={<Preloader/>}>
               <Route component={NotFound}/>
            </Suspense>

         </Switch>
      </main>
   )
}

export default React.memo(Main)
