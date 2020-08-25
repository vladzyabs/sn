import React from 'react'
import {HashRouter} from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import {RootStateType} from './redux/rootStore'
import {connect, ConnectedProps} from 'react-redux'
import {thunkGetAuthData} from './redux/authReducer/authAction'
import './style/App.scss'

type PropsAppType = PropsFromRedux & {}

class App extends React.Component<PropsAppType> {
   componentDidMount(): void {
      this.props.thunkGetAuthData()
   }

   render() {
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
      isAuth: state.auth.isAuth,
   }
}

const connector = connect(mstp, {thunkGetAuthData})

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(App)