import Sidebar from "components/Sidebar";
import { ANGULAR_LIST } from "resources/consts";

const CreateComponent = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={ANGULAR_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>Criando componente</h3>
            <ul>
              <li>Para criar um componente podemos utilizar o CLI;</li>
              <li>O comando é: ng generate nome-componente;</li>
              <li>Todos os arquivos necessários serão criados no projeto;</li>
              <li>
                Para importar o componente basta utilizar o seu selector em um
                HTML de outro componente.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateComponent;
