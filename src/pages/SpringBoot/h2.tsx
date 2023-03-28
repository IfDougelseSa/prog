import Sidebar from "components/Sidebar";
import { SPRING_LIST } from "resources/consts";

const H2 = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={SPRING_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>h2</h3>
            <p>
              <code>
                &lt;dependency&gt;
                <br />
                &nbsp;&lt;groupId&gt;com.h2database&lt;groupId/&gt;
                <br />
                &nbsp;&lt;artifactId&gt;h2&lt;artifactId/&gt;
                <br />
                &nbsp;&lt;scope&gt;runtime&lt;scope/&gt;
                <br />
                &lt;dependency/&gt;
              </code>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default H2;
