import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Login extends PureComponent {
  render() {
    const { loginState } = this.props
    if (loginState) {
      return (
        <div>写文章</div>
      )
    } else {
      return <Redirect to='/login' />
    }
  }
}

const mapStateToProps = (state) => ({
  loginState: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
