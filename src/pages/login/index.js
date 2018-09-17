import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store'

import {
  LoginWrapper,
  LoginBox,
  Input,
  Buttom,

} from './style'

class Login extends PureComponent {
  render() {
    const { loginState } = this.props
    if (!loginState) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" innerRef={(input) => { this.account = input }} />
            <Input placeholder="密码" innerRef={(input) => { this.password = input }} type="password" />
            <Buttom onClick={() => this.props.login(this.account, this.password)}>提交</Buttom>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/' />
    }
  }
}

const mapStateToProps = (state) => ({
  loginState: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
  login(accountElement, passwordElement) {
    dispatch(actionCreators.login(accountElement.value, passwordElement.value))

  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
