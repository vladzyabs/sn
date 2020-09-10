import React from 'react'
import {HashRouter} from 'react-router-dom'
import {compose} from 'redux'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import {RootStateType} from './redux/rootStore'
import {connect, ConnectedProps} from 'react-redux'
import './style/App.scss'
import Preloader from './components/common/Preloader/Preloader'
import {initialize} from './redux/appReducer/appAction'
import {getInitialized} from './redux/appReducer/appSelectors';
import {getIsAuth} from './redux/authReducer/authSelectors';

type PropsAppType = PropsFromRedux & {}

class App extends React.Component<PropsAppType> {
   componentDidMount(): void {
      this.props.initialize()
   }

   render() {
      if (!this.props.initialized) {
         return <Preloader/>
      }
      return (
         <HashRouter>
            <div className="App">
               <Header/>
               <Navbar/>
               <Main/>
               <Footer/>
            </div>
         </HashRouter>
      )
   }
}

const mstp = (state: RootStateType) => {
   return {
      isAuth: getIsAuth(state),
      initialized: getInitialized(state),
   }
}

const connector = connect(mstp, {initialize})

type PropsFromRedux = ConnectedProps<typeof connector>

export default compose<React.ComponentType>(
   connector,
)(App)
