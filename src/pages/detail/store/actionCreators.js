import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const changeDetail = (title,content) => ({
  type: actionTypes.CHANGE_DETAIL,
  title: fromJS(title),
  content: fromJS(content)
})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id='+id).then((res) => {
      dispatch(changeDetail(res.data.data.title, res.data.data.content))
    }).catch((err) => {
      console.log(err);
    })
  }
}