import axios from 'axios'
import * as actionTypes from './actionTypes'
// import { fromJS } from 'immutable';

export const changeLogin = (value) => ({
  type: actionTypes.CHANGE_LOGIN,
  value
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
      const data = res.data.data;
      if (data) {
        console.log('成功');
        
        dispatch(changeLogin(true))
      } else {
        console.log('登陆失败');
        
        alert('登陆失败')
      }
    })

  }
}