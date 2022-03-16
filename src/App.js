import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { GlobalStyle } from "./components/globalstyle";
import Home from "./components/main/home"
import { Register } from "./components/pages/register/register";
import { Login } from "./components/pages/login/login";

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/* Nosso cliente fictício será a empresa Oliveira Trade e foi solicitado pelo board da empresa que seja desenvolvido uma forma de Sign in e Sign up de usuários. Devemos permitir que seja criado um usuário no sistema, com os campos mínimos de cadastro normal para Pessoa Física. O usuário deve ser notificado que o cadastro foi concluído com sucesso e, a partir deste ponto, ser possível executar login. NÃO É MANDATÓRIO o desenvolvimento de uma interface front end, já que o board aceita como entrega - um serviço que possa ser consumido e executar as atividades requisitadas, desde que o desenvolvedor crie uma boa entrega com o manual de como utilizar o serviço. 

CONSIDERAÇÕES FINAIS: esperamos que consiga executar até o final, entretanto, mesmo que não consiga concluir totalmente, pedimos que entregue o que conseguir.
FEATURES OBRIGATÓRIAS:

  -> Sign In
  -> Sign up
  -> Cadastro Pessoa Física
  -> Notificar o usuário que deu tudo certo o cadastro
  -> Encaminhar para página de Login após o cadastro concluido
  -> Executar login

 */

/* 
FEATURES A SEREM IMPLEMENTADAS:
  -> máscara de CPF
  -> validador de CPF
  -> Visualizar password ao clicar no olhinho


*/
