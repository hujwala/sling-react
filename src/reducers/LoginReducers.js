import {  SIGNUP_IN_PROCESS,
          SIGNUP_AUTH_SUCESS,
          SIGNUP_AUTH_FAILED } from '../Constant'

const INITIAL_STATE = {
   loading: false,
   successStatus: false,
   successMessage:'',
   errorStatus: false,
   errorMessage:''
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
     case SIGNUP_IN_PROCESS:
     return {
       ...state,
       loading: true
     }

     case SIGNUP_AUTH_SUCESS:
     return {
      ...state,
      ...INITIAL_STATE,
      successMessage: 'successfully logged In',
      successStatus:true
     }

     case SIGNUP_AUTH_FAILED:
     return {
      ...state,
      ...INITIAL_STATE,
      errorMessage:'User not found',
      errorStatus:true
     }

     default:
     return state;
  }
}