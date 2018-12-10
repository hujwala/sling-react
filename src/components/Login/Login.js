import React,{ Component } from 'react';
import  { connect } from 'react-redux';
import  { sendingSignUpRequest } from '../../actions/Loginaction';

import './Login.css'
//u have import login , signup ad route

class Login extends Component{


  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  signUpBtnPressed(e){
    e.preventDefault();
    const { email, password } = this.state;
    let user = {
      "email": email,
      "password": password
    }

    this.props.sendingSignUpRequest(user)
  }

  showLoadingMessage(){
    if(this.props.loading){
      return (
        <div><label>Loading</label></div>
        )
    }
  }
  render(){
    return(
   <form id="signup-form">
  <h2>Sling Login </h2>
    <div className="container">
    <div className="row">
    <div className="col-sm-7 col-xs-12 col-sm-offset-1">
    <div className="col-sm-7">
    <div className="form-group">
    <label for="name">Email</label>
    <label for="name"></label>
    <input type="text"
    placeholder="Enter Email" name="psw"
    required
    onChange={(e) => this.setState({email: e.target.value})}
    value={this.state.email}
    //errorText = {this.state.emailError}
    />
    </div>
    </div>
    <div className="form-group">
    <label for="company">Password</label>
    <input type="password"
    placeholder="Password"
    required
    onChange={(pwd) => this.setState({password: pwd.target.value})}
    value={this.state.password}
    //errorText = {this.state.passwordError}
    />
    </div>
        <input type="submit" id ="submit-button" value="Login" onClick={(e) => this.signUpBtnPressed(e)}>
        </input>

    </div>
    </div>
    </div>
    </form>
      )
  }
}

const mapStateToProps = ({ loginData }) => {
  const { loading,
   successStatus,
   successMessage,
   errorStatus,
   errorMessage } = loginData
   console.log(`success :${successMessage}`)
   console.log(`error :${errorMessage}`)

   return { loading, successStatus,successMessage, errorStatus, errorMessage}
 }

 export default connect( mapStateToProps, { sendingSignUpRequest })(Login);