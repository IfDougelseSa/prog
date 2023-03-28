import Sidebar from "components/Sidebar";
import { CONCEPTS_LIST } from "resources/consts";


const ConditionalTernary = () => {
    return (
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-4">
              <Sidebar list={CONCEPTS_LIST} />
            </div>
            <div className="col-8 base-card">
              <h3>Expressão condicional ternária</h3>
            </div>
          </div>
        </div>
      );

}

export default ConditionalTernary;