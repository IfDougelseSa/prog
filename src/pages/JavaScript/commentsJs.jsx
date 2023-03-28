import Sidebar from "components/Sidebar";
import { JAVASCRIPT_LIST } from "resources/consts";

const CommentsJs = () => {
    return (
        <>
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-4">
                <Sidebar list={JAVASCRIPT_LIST} />
              </div>
              <div className="col-8 base-card">
              <h3>Comentários</h3>
              <p>Para comentar uma linha usar "//";</p>
              <p>Para comentar mais de uma linha "/**/".</p>
              </div>
            </div>
          </div>
        </>
      );
}

export default CommentsJs;