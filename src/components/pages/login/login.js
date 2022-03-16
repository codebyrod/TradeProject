import React from 'react'
import LogoName from '../../../img/logoname.png'
import { Link } from 'react-router-dom'
import * as S from './style'

export function Login() {
  return (
    <S.Container>
      <S.Box>
      <S.Presentation>
        <S.BoxImg>
          <Link to='/'>
            <img src={LogoName} alt='' />
          </Link>
        </S.BoxImg>
        <S.BoxTitle>
        <h2>Um mundo de possibilidades</h2>
        <p>Sabe, tchururu duh, com a gente tudo fica <span>blue</span></p>
        </S.BoxTitle>
      </S.Presentation>
      <S.BoxInput>
          <input type='email' placeholder='E-mail'/>
          <input type='password' placeholder='Senha'/>
      </S.BoxInput>
          <S.BtnLogin>Entrar</S.BtnLogin>
      <S.BoxRedirect>
        <S.BtnSupport to='/login'>Esqueci minha senha</S.BtnSupport>
        <S.BtnSupport to='/register'>Ainda não é cliente? Cadastre-se</S.BtnSupport>
      </S.BoxRedirect>
      </S.Box>
    </S.Container>
  )
}
