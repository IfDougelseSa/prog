import Sidebar from "components/Sidebar";
import { CONCEPTS_LIST } from "resources/consts";

const Process = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={CONCEPTS_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>Processo básico</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
