import Sidebar from "components/Sidebar";
import { UNITY_LIST } from "resources/consts";

const Unity = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={UNITY_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>Unity</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unity;
