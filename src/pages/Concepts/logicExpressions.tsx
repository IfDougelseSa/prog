import Sidebar from "components/Sidebar";
import { CONCEPTS_LIST } from "resources/consts";
import logicOperatorsImg from "../../assets/imgs/concepts/logic-operators.png";
import truthTableAndImg from "../../assets/imgs/concepts/truth-table-and.png";
import truthTableOrImg from "../../assets/imgs/concepts/truth-table-not.png";
import truthTableNotImg from "../../assets/imgs/concepts/truth-table-or.png";

const LogicExpressions = () => {
  return (
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-4">
          <Sidebar list={CONCEPTS_LIST} />
        </div>
        <div className="col-8 base-card">
          <h3>Expressões lógicas</h3>
          <p>
            Assim como as expressões comparativas, são expressões que resultam
            em um valor verdade, ou seja, verdadeiro ou falso.
          </p>
          <img
            src={logicOperatorsImg}
            alt="logic operators img"
            className="img-fluid"
          />
            <img
            src={truthTableAndImg}
            alt="truth table and img"
            className="img-fluid"
          />
            <img
            src={truthTableOrImg}
            alt="truth table or img"
            className="img-fluid"
          />
            <img
            src={truthTableNotImg}
            alt="truth table not img"
            className="img-fluid"
          />
          <p>O operador "NÃO" inverte a condição.</p>
        </div>
      </div>
    </div>
  );
};

export default LogicExpressions;
