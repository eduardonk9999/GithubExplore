import React from 'react';

import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="">
          <img src="https://avatars.githubusercontent.com/u/18013936?s=460&u=6031d67387fccad6039656b0368e1a608a3eba9c&v=4" alt="Eduardo Silva"/>
          <div>
            <strong>freeler</strong>
            <p>Repositorio de freelas</p>
          </div>
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;
