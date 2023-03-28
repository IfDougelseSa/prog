import Sidebar from "components/Sidebar";
import { CONCEPTS_LIST } from "resources/consts";

const Concepts = () => {
  return (
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-4">
          <Sidebar
            list={CONCEPTS_LIST}
          />
        </div>
        <div className="col-8 base-card">
          <h3>Algoritmos, Automação e Programa de computador</h3>
          <p>
            Algoritmo: Sequência finita de instruções para se resolver um
            problema.
          </p>
          <p>
            Automação: Consiste em utilizar máquina(s) para executar o
            procedimento desejado de forma automática ou semiautomática
          </p>
          <p>
            Programa de computador: São algoritmos executados pelo computador. O
            computador é uma máquina que automatiza a execução de algoritmos
            computacionais (processamento de dados e cálculos).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Concepts;
