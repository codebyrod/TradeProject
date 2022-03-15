import React from "react";
import Header from "./components/header/index";
import { GlobalStyle } from "./components/globalstyle";

function App() {
  return (
    <div>
      <Header />
      <GlobalStyle />
    </div>
  );
}

export default App;

/* Nosso cliente fictício será a empresa Oliveira Trade e foi solicitado pelo board da empresa que seja desenvolvido uma forma de Sign in e Sign up de usuários. Devemos permitir que seja criado um usuário no sistema, com os campos mínimos de cadastro normal para Pessoa Física. O usuário deve ser notificado que o cadastro foi concluído com sucesso e, a partir deste ponto, ser possível executar login. NÃO É MANDATÓRIO o desenvolvimento de uma interface front end, já que o board aceita como entrega - um serviço que possa ser consumido e executar as atividades requisitadas, desde que o desenvolvedor crie uma boa entrega com o manual de como utilizar o serviço. CONSIDERAÇÕES FINAIS: esperamos que consiga executar até o final, entretanto, mesmo que não consiga concluir totalmente, pedimos que entregue o que conseguir.
 */

