import React, { PureComponent } from 'react'
import { ListItem, ListInfo, ListInfo2, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {
          list.map((item, index) => {
            if (item.get('img')) {
              return (
                <Link key={index} to={'/detail/' + item.get('id')}>
                  <ListItem>
                    <img className='list-img' src={item.get('img')} alt="" />
                    <ListInfo>
                      <h3 className='title'>{item.get('title')}</h3>
                      <p className='desc'>{item.get('desc')}</p>
                    </ListInfo>
                  </ListItem>
                </Link>
              )
            } else {
              return (
                <ListItem key={index}>
                  <ListInfo2>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo2>
                </ListItem>
              )
            }
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatchToProps = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
