import Sidebar from "components/Sidebar";
import { SPRING_LIST } from "resources/consts";
import onionsImg from "../../assets/imgs/spring-boot/onions.png";

const Onions = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={SPRING_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>Camadas</h3>
            <p>
              <img src={onionsImg} alt="onions" className="img-fluid" />
            </p>
            <p>
              Frontend - Aplicação mostrada para o usuário, podendo ser: mobile,
              web, etc...
              <br />
              Aplicação que roda do lado do cliente.
            </p>
            <p>
              Backend - Parte que roda no servidor. O front end troca dados com
              o back end. Atualmente essa troca é feita por requisições HTTP
              &#40;REST/JSON&#41;.
            </p>
            <h3>Padrão camadas back end</h3>
            <p>
              As camadas são essencias para deixar o sistema flexível e
              facilidade para manutenção.
            </p>
            <p>
              Controladores REST - Responsáveis por receber as requisições. A
              interação que o usuário faz e manda para o back end.
            </p>
            <p>
              Data Transfer Objects &#40;DTO&#41; - Objetos simples para
              carregar os dados entre o controlador REST e a camada de serviços.
            </p>
            <p>
              Camada de serviço - Recebe as requisições dos controladores REST
              pelo DTO. Onde fica a lógica de negócio do sistema. Verificações,
              calcúlos são feitos nessa camada.
            </p>
            <p>
              Camada de acesso a dados - Operações básicas para acessar os dados
              no banco de dados &#40;Salvar, atualizar, deletar ou buscar&#41;.
            </p>
            <p>
              Entidades - Objeto controlado e monitorado para manter a
              integridade do banco de dados.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Onions;
