import Sidebar from "components/Sidebar";
import { CONCEPTS_LIST } from "resources/consts";
import comparativeOperatorsImg from "../../assets/imgs/concepts/comparative-operators.png";

const ComparativeExpressions = () => {
  return (
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-4">
          <Sidebar list={CONCEPTS_LIST} />
        </div>
        <div className="col-8 base-card">
          <h3>Expressões comparativas</h3>
          <p>
            São expressões que comparam uma coisa com outra e o resultado dela é
            igual a um valor verdade, ou seja, verdadeiro ou falso.
          </p>
          <img
              src={comparativeOperatorsImg}
              alt="comparative operators img"
              className="img-fluid"
            />
        </div>
      </div>
    </div>
  );
};

export default ComparativeExpressions;
