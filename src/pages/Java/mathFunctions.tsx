import Sidebar from "components/Sidebar";
import { JAVA_LIST } from "resources/consts";
import mathFunctionsImg from "../../assets/imgs/java/math-functions.png";


const MathFunctions = () => {
    return (
        <>
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-4">
                <Sidebar list={JAVA_LIST} />
              </div>
              <div className="col-8 base-card">
                <h3>Funções matemáticas</h3>
                <img src={mathFunctionsImg} alt="math functions img" className="img-fluid"/>
              </div>
            </div>
          </div>
        </>
      );

}

export default MathFunctions;