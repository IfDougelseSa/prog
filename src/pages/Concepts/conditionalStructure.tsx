import Sidebar from "components/Sidebar";
import { CONCEPTS_LIST } from "resources/consts";
import simpleStructureImg from "../../assets/imgs/concepts/simple-structure.png";
import compositeStructureImg from "../../assets/imgs/concepts/composite-structure.png";
import chainingStructureImg from "../../assets/imgs/concepts/chaining-structure.png";
import chainingStructure2Img from "../../assets/imgs/concepts/chaining-structure-2.png";

const ConditionalStructure = () => {
  return (
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-4">
          <Sidebar list={CONCEPTS_LIST} />
        </div>
        <div className="col-8 base-card">
          <h3>Estrutura condicional</h3>
          <p>
            É uma estrutura de controle que permite definir que um certo bloco
            de comandos somente será executado dependendo de uma condição.
          </p>
          <p>
            Caso tenha apenas um comando dentro da estrutura condicional, as
            chaves são opcionais.
          </p>
          <img
            src={simpleStructureImg}
            alt="simple structure img"
            className="img-fluid"
          />
          <img
            src={compositeStructureImg}
            alt="composite structure img"
            className="img-fluid"
          />
          <img
            src={chainingStructureImg}
            alt="chaining structure img"
            className="img-fluid"
          />

          <p>
            Pelo motivo da chave ser opcional quando tem-se um comando, é
            possível tirar a chave do else e juntar o inf na mesma linha,
            ficando mais limpo o código.
          </p>
          <img
            src={chainingStructure2Img}
            alt="chaining structure img 2"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default ConditionalStructure;
