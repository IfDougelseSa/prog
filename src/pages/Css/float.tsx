import Sidebar from "components/Sidebar";
import { CSS_LIST } from "resources/consts";

const Float = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={CSS_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>Float</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Float;
