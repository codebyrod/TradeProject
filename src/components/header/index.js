import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'
import Logo from '../../img/logo.png'
import LoginImg from '../../img/login.png'

function Header() {
  return (
        <S.Container>
          <S.Nav>
            <S.BoxLogo>
              <Link to="/">
                  <img src={Logo} alt="Logo"/>
              </Link>
            </S.BoxLogo>
            <S.BoxItem>
              <S.ListItem>
                <Link to="/register">Cadastre-se</Link>
              </S.ListItem>
              <S.ListItem>
                <Link /* to="/about" */ to="/">Sobre</Link>
              </S.ListItem>
              <S.ListItem>
                <Link /* to="/start-investing" */ to="/">Começe a investir</Link>
              </S.ListItem>
              <S.ListItem>
                <Link /* to='/simulator' */ to="/">Simulador</Link>
              </S.ListItem>
            </S.BoxItem>
            <S.BoxBtn>
              <S.Btn to='/login'>
                <img src={LoginImg} alt='' />
                <p>Login</p>
                </S.Btn>
            </S.BoxBtn>
          </S.Nav>
        </S.Container>
  )
}

export default Header;