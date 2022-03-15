import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import * as S from './style'
import Home from '../main/home'
import Register from '../pages/register'
import Login from '../pages/login'
import Logo from '../../img/logo.png'
import LoginImg from '../../img/login.png'

function Header() {
  return (
    <Router>
      <S.Container>
        <S.Nav>
          <S.BoxLogo>
            <Link exact to="/">
                <img src={Logo} alt="Logo"/>
            </Link>
          </S.BoxLogo>
          <S.BoxItem>
            <S.ListItem>
              <a href="/">Cadastre-se</a>
            </S.ListItem>
            <S.ListItem>
              <a href="/">Sobre</a>
            </S.ListItem>
            <S.ListItem>
              <a href="/">Começe a investir</a>
            </S.ListItem>
            <S.ListItem>
              <a href="/">Simulador</a>
            </S.ListItem>
          </S.BoxItem>
          <S.BoxBtn>
            <S.Btn href='#' >
              <img src={LoginImg} alt='' />
              <p>Login</p>
              </S.Btn>
          </S.BoxBtn>
        </S.Nav>
      </S.Container>
      <Switch>
        <Route>
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default Header;