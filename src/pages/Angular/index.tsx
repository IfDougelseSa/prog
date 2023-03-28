import Sidebar from "components/Sidebar";
import { ANGULAR_LIST } from "resources/consts";

const Angular = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={ANGULAR_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>O que é Angular?</h3>
            <ul>
              <li>Um framework com base na lingaugem JavaScript;</li>
              <li>Utilizado para criação de SPAs;</li>
              <li>Possui arquitetura baseada em componentes;</li>
              <li>Muito utilizado em aplicações de grande porte;</li>
              <li>Compõe a stack MEAN;</li>
              <li>
                Angular 2+ é uma versão diferente do AngularJS
                &#40;clássico&#41;;
              </li>
              <li>
                Estrutura de organização do projeto bem definida, promove
                simplicidade e reaproveitamento de código;
              </li>
              <li>
                Sistema de tooling muito rico: CLI, módulo de HTTP, router e
                outros;
              </li>
              <li>Integração nativa com TypeScript;</li>
              <li>Mantido pelo Google.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Angular;
