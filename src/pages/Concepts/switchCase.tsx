import Sidebar from "components/Sidebar";
import { CONCEPTS_LIST } from "resources/consts";
import switchCaseImg from "../../assets/imgs/concepts/switch-case.png";

const SwitchCase = () => {
  return (
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-4">
          <Sidebar list={CONCEPTS_LIST} />
        </div>
        <div className="col-8 base-card">
          <h3>Switch Case</h3>
          <p>
            Quando se tem várias opções de fluxo a serem tratadas com base no
            valor de uma variável, ao invés de várias estruturas if-else
            encadeadas, alguns preferem utilizar a estrutura switch-case.
          </p>
          <img
            src={switchCaseImg}
            alt="switch case img"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default SwitchCase;
