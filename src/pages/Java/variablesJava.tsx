import Sidebar from "components/Sidebar";
import { JAVA_LIST } from "resources/consts";
import primitiveImg from "../../assets/imgs/java/primitive.png";

const VariablesJava = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={JAVA_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>Variáveis Java</h3>

            <p>
              Os dados de um programa em execução são armazenados em variáveis.
            </p>
            <p>
              Em programação, uma variável é uma porção de memória &#40;RAM&#41;
              utilizada para armazenar dados durante a execução dos programas.
            </p>
            <h5>Sintaxe Java</h5>
            <p>tipo nome = valor-inicial;</p>
            <p>Uma variável possui: nome, tipo, valor e endereço.</p>
            <h5>Tipos primitivos em Java</h5>
            <img src={primitiveImg} alt="primitive img" className="img-fluid" />
            <h5>Bit</h5>
            <p>
              Um bit pode armazenar 2 valores possíveis &#40;0 ou 1&#41; <br />{" "}
              Cada bit = 2 possibilidades <br /> 8 bits: <br /> 2x2x2x2x2x2x2x2
              = 256 possibilidades.
            </p>
            <h5>Nomes de variáveis</h5>
            <ul>
                <li>Não pode começar com dígito</li>
                <li>Não pode ter espaço em branco</li>
                <li>Não usar acentos ou til</li>
                <li>Sugestão: use o padrão "camel case"</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default VariablesJava;
