import styled from 'styled-components'

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
`

export const LoginBox = styled.div`
  padding-top: 20px;
  width: 400px;
  height: 220px;
  margin: 50px auto;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,0.1)
`

export const Input = styled.input`
  display: block;
  margin: 10px auto;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #000;
`

export const Buttom = styled.div`
  cursor: pointer;
  margin: 20px auto;
  width: 220px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background: #3194d0;
  border-radius: 6px;
  text-align: center;
`