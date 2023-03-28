import Sidebar from "components/Sidebar";
import { JAVA_LIST } from "resources/consts";
import operatorsImg from "../../assets/imgs/java/operators.png";

const Operators = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={JAVA_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>Operadores aritméticos</h3>
            <img src={operatorsImg} alt="operator img" className="img-fluid"/>
            <p>Ordem: esquerda para direita. O uso de parênteses serve para quebrar a precedência.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Operators;
