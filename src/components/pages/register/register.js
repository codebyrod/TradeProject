import React from 'react'
import * as S from './style'
import { Link } from 'react-router-dom'
import LogoName from '../../../img/logoname.png'

export function Register() {
  return (
    <div>
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
        <input  type='text' placeholder='Nome completo' />
        <input type='number' placeholder='CPF' />
          <input type='email' placeholder='E-mail'/>
          <input type='email' placeholder='Confirmação de email' />
          <input type='password' placeholder='Senha'/>
      </S.BoxInput>
          <S.BtnRegister>Cadastrar</S.BtnRegister>
      <S.BoxRedirect>
        <S.BtnLogin to='/login'>Já tem cadastro? Faça login</S.BtnLogin>
      </S.BoxRedirect>
      </S.Box>
    </S.Container>
    </div>
  )
}
