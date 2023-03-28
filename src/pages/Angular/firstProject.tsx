import Sidebar from "components/Sidebar";
import { ANGULAR_LIST } from "resources/consts";

const FirstProject = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={ANGULAR_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>Primeiro projeto Hello World</h3>
            <ul>
              <li>
                Primeiramente vamos instalar o CLI do Angular com: npm install
                -g @angular/cli;
              </li>
              <li>
                Agora podemos criar projetos mais facilmente, utilizaremos o: ng
                new "nome";
              </li>
              <li>Para testar o projeto basta digitar o comando: ng serve;</li>
              <li>
                Podemos alterar os arquivos dentro da pasta app para refletir
                mudanças no navegador.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstProject;
