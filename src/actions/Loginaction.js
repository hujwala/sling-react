import { browserHistory } from 'react-router';
import {  SIGNUP_IN_PROCESS,
          SIGNUP_AUTH_SUCESS,
          SIGNUP_AUTH_FAILED } from '../Constant'


 export const sendingSignUpRequest = (userDict) => {
      return(dispatch) => {
      dispatch({ type: SIGNUP_IN_PROCESS });
       fetch('https://ums.q.sling.com/v5/sessions',
          {
          method: 'POST',
        header: {
            'Access-Control-Allow-Origin':'*'
          },
          body: JSON.stringify(userDict),
          Authorization: {
            'Consumer Key': '',
            'Consumer Secret':''
          },
        }).then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson.token);
            if(responseJson.success === true){
                 dispatch({
                  type: SIGNUP_AUTH_SUCESS,
                  payload: responseJson
              }, browserHistory.push('/home'))
            }else{
                 dispatch({
                  type: SIGNUP_AUTH_FAILED,
                  payload: 'Error Occured'
              })
            }
          }).catch(error => dispatch({
          type: SIGNUP_AUTH_FAILED,
          payload: error
      }));
   }

 }



