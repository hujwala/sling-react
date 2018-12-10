import React,{ Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Login from './components/Login/Login';
console.log(process.env.REACT_APP_CONSUMER_KEY);

export default class App extends Component{
  render(){
    return(
      <div>
       <Router path="/login" history={browserHistory}>
           <Route path="/login" component={Login}/>
       </Router>
      </div>
    )
  }
}