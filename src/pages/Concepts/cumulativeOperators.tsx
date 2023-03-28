import Sidebar from "components/Sidebar";
import { CONCEPTS_LIST } from "resources/consts";
import cumulativeOperatorsImg from "../../assets/imgs/concepts/cumulative-operators.png";


const CumulativeOperators = () => {
    return (
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-4">
              <Sidebar list={CONCEPTS_LIST} />
            </div>
            <div className="col-8 base-card">
              <h3>Operadores de atribuição cumulativos</h3>
              <p>Forma abreviada de escrever</p>
              <img
                  src={cumulativeOperatorsImg}
                  alt="cumulative operators img"
                  className="img-fluid"
                />
            </div>
          </div>
        </div>
      );

}

export default CumulativeOperators;