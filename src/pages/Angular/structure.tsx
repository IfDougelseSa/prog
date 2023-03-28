import Sidebar from "components/Sidebar";
import { ANGULAR_LIST } from "resources/consts";

const StructureAngular = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={ANGULAR_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>Estrutura do Angular</h3>
            <ul>
              <li>node_modules: dependências do projeto;</li>
              <li>src: onde vamos programas a aplicação;</li>
              <li>src/app: pasta principal para componentes, services e etc;</li>
              <li>Os componentes são dividos em partes: TS, HTML, CSS e testes.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default StructureAngular;
