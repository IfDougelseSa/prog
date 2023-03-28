import Sidebar from "components/Sidebar";
import { SPRING_LIST } from "resources/consts";

const SpringBoot = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
          <Sidebar
                list={SPRING_LIST}
              />
          </div>
          <div className="col-8 base-card">
            <h3>Visão geral</h3>
            <p>
              O spring é um ecosistema de frameworks. Projeto antigo e maduro
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpringBoot;
