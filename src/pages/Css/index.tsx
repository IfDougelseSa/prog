import Sidebar from "components/Sidebar";
import { CSS_LIST } from "resources/consts";

const CSS = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={CSS_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>O que é CSS?</h3>
            <p>
              CSS significa Cascading style Sheet &#40;Folha de Estilo em
              Cascatas&#41;. Com o CSS é possível formatar os sites, dando
              estilo ao mesmo, controlando a aparência dos elementos HTML. CSS é
              uma linguagem para especificar como documentos são apresentados
              aos usuários
            </p>

            <h3>Sintaxe CSS</h3>
            <p>
              h1 &#123; <br />
              <br /> &nbsp;&nbsp;font-size: 20px; <br />
              &nbsp;&nbsp; color: red; <br />
              &#125;
            </p>
            <p>
              Primeiro selecionar o elemento HTML&#40;TAG ou Selector&#41; que
              quer mudar. Depois abrir chaves e colocar a propriedade seguida de
              dois pontos e seu valor seguido de ponto e vírgula.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CSS;
