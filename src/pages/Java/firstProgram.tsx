import Sidebar from "components/Sidebar";
import { JAVA_LIST } from "resources/consts";
import firstImg from "../../assets/imgs/java/first.png";

const FirstProgram = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={JAVA_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>Primeiro programa</h3>
            <p>
              Botão direito em cima de src -&gt; nomear a classe -&gt; marcar o
              public static void main string -&gt; finish.{" "}
            </p>
            <p>
              Toda aplicação precisa de um ponto de entrada, sendo assim, quando
              rodamos o código, o SO precisa saber por onde começa o mesmo. O
              método string args serve como esse ponto inicial.
            </p>
            <img src={firstImg} alt="first img" className="img-fluid" />
            <h5>Primeiro programa</h5>
            <div className="custom-code">
              <p>public class Main &#123;</p>
              <div className="custom-space">
                public static void main &#40;String &#91; &#93; args&#41; &#123;
                System.out.println&#40;"Hello World!"&#41;;
                <br />
                &#125;
              </div>
              &#125;
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstProgram;
