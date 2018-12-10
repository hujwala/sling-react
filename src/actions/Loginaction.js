import { browserHistory } from 'react-router';
import {  SIGNUP_IN_PROCESS,
          SIGNUP_AUTH_SUCESS,
          SIGNUP_AUTH_FAILED } from '../Constant'
 export const sendingSignUpRequest = (userDict) => {
      return(dispatch) => {
        debugger;
      dispatch({ type: SIGNUP_IN_PROCESS });
       fetch('https://ums.q.sling.com/v5/sessions',
          {
          method: 'POST',
        header: {
            'Access-Control-Allow-Origin':'*'
          },
          body: JSON.stringify(userDict),
          Authorization: {
            'Consumer Key': (process.env.REACT_APP_CONSUMER_KEY),
            'Consumer Secret': (process.env.REACT_APP_CONSUMER_SECRET)
          },
        }).then((response) => response.json())
          .then((responseJson) => {
            const { token } = responseJson.token
            const { state } = process.env.REACT_APP_STATE
            const { vendorId } = process.env.REACT_APP_VENDORID

            if(responseJson.success === true){
                 dispatch({
                  type: SIGNUP_AUTH_SUCESS,
                  payload: responseJson
              }, browserHistory.push('https://pitangui.amazon.com/spa/skill/account-linking-status.html?vendorId=${vendorId}#state=${state}&access_token=${handle}&token_type=Bearer'))
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



