import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})

export default (state = defaultState, action) => {

  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      })
    case actionTypes.ADD_HOME_DATA:
      return state.merge({
        articlePage: action.page,
        articleList: state.get('articleList').concat(action.list)
      })
    case actionTypes.SHOW_TOP:
      return state.set('showScroll', true)
    case actionTypes.HIDE_TOP:
      return state.set('showScroll', false)
    default:
      return state;
  }
}