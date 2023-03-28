import Sidebar from "components/Sidebar";
import { SPRING_LIST } from "resources/consts";


const Create = () => {

    return(
        <>
        <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
          <Sidebar
                list={SPRING_LIST}
              />
          </div>
          <div className="col-8 base-card">
              <h3>Criando projeto</h3>
              <p>
                1 - Acessar https://start.spring.io<br/><br/>
                2 -  Preencher dados
                <ul>
                  <li>Group - domínio da empresa invertido</li>
                  <li>Artefato -  nome do Projeto</li>
                  <li>Description - Descrição do projeto</li>
                  </ul>
                3 - Adicionar dependências
                <ul>
                  <li>Spring Web</li>
                  <li>Spring Data JPA</li>
                  <li>H2 database</li>
                  <li>PostgreSQL Driver</li>
                  <li>Spring Boot DevTools</li>                
                </ul>
                4 - Gerar o projeto e colocar na sua workspace. Além disso, importar na sua IDE.<br/><br/>

                5 - (SpringBoot) - clicar em local e rodar o servidor. Depois, acessar http://localhost:8080/
                <br/><br/>
              </p>

          </div>
        </div>
      </div>
        </>
    )
}

export default Create;