import Sidebar from "components/Sidebar";
import { SPRING_LIST } from "resources/consts";

const Crud = () => {
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
            <h3>Crud</h3>
            <p>Create, Retrive, Update e Delete</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crud;
