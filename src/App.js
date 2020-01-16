import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Yaudadeh from './components/mtfckr'
import Home from './pages/home'
import Registrasi from './pages/registrasi'
import Login from './pages/login'
import Features from './pages/features'
// import MenuListComposition from './components/mtrl'

class App extends React.Component {
  state = {
    loading:true
  }

  // componentDidMount(){
  //   this.setState({loading:false})
  // }

  render() {
    // if(this.state.loading){
    //   return <div>LOADING...</div>
    // }
    return (
      <div className='kotak'>
        <Yaudadeh/>
        {/* <MenuListComposition/> */}
        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route path={'/registrasi'} exact component={Registrasi}/>
          <Route path={'/login'} exact component={Login}/>
          <Route path={'/features'} exact component={Features}/>
        </Switch>
      </div>
    );
  }
}
 
export default App;