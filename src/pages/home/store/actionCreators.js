import axios from 'axios'
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';


const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  articleList: result.articleList,
  recommendList: result.recommendList,
  topicList: result.topicList
})

const addHomeList = (result,page) => ({
  type: actionTypes.ADD_HOME_DATA,
  list: fromJS(result),
  page: fromJS(page)
})

const showTop = () => ({
  type: actionTypes.SHOW_TOP
})

const hideTop = () => ({
  type: actionTypes.HIDE_TOP
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result))
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1))
    })
  }
}

export const toggleTopShow = (show) => {
  return (dispatch) => {
    if (show) {
      dispatch(showTop())
    } else {
      dispatch(hideTop())
    }
  }
}