import Sidebar from "components/Sidebar";
import { CONCEPTS_LIST } from "resources/consts";
import compileImg from "../../assets/imgs/concepts/compile.png";
import interImg from "../../assets/imgs/concepts/interpretation.png";
import hybridImg from "../../assets/imgs/concepts/hybrid.png";
import operationImg from "../../assets/imgs/concepts/operation.png";

const Program = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={CONCEPTS_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>Programa de computador</h3>
            <p>Para criar um programa de computador é necessário:</p>
            <p>
              1 - Uma linguagem de programação: regras léxicas e sintáticas para
              se escrever o programa;
            </p>
            <p>2- Uma IDE: software para editar e testar o programa;</p>
            <p>
              3 - Um compilador: software para transformar o código fonte em
              código objeto;
            </p>
            <p>
              4 - Um gerador de código ou máquina virtual: software que permite
              que o programa seja executado.
            </p>
            <h3>Linguagem de programação</h3>
            <h5>Léxica</h5>
            <p>
              É um conjunto de regras léxicas &#40;ortografia&#41; e sintáticas
              &#40;gramática&#41; para se escrever programas.
            </p>
            <p>
              Exemplo &#40;Português&#41;: <br />
              cachorro &#40;correto&#41; | caxorro &#40;errado&#41;
            </p>
            <p>
              Exemplo programação:
              <br />
              main &#40;correto&#41; | maim &#40;errado&#41;
            </p>
            <h5>Sintática</h5>
            <p>Diz respeito à correção das sentenças &#40;gramática&#41;.</p>
            <p>
              Exemplo &#40;Português&#41;: <br />O cachorro está com
              fome&#40;correto&#41; | A cachorro está com fome &#40;errado&#41;
            </p>
            <p>
              {" "}
              Exemplo programação:
              <br />x = 2 + y; &#40;correto&#41; | x = + 2 y; &#40;errado&#41;
            </p>
            <h3>IDE - Ambiente Integrado de Desenvolvimento</h3>
            <p>
              É um conjunto de softwares utilizado para a construção de
              programas.
            </p>
            <p>
              Exemplos: Code Blocks, Eclipse, NetBeans, Microsoft Visual Studio.
            </p>
            <h5>Funcionalidades de uma IDE</h5>
            <ul>
              <li>
                Edição de código fonte &#40;indentação, autocompletar, destaque
                de palavras, etc.&#41;
              </li>
              <li>Depuração e testes</li>
              <li>Contrução do produto final &#40;build&#41;</li>
              <li>Sugestão de modelos &#40;templates&#41;</li>
              <li>Auxiliar em várias tarefas do seu projeto</li>
              <li>Etc.</li>
            </ul>
            <h3>
              Compilação e interpretação Código fonte e objeto Máquina virtual
            </h3>
            <p>
              Código fonte: é aqeuele escrito pelo programador em linguagem de
              programação.
            </p>
            <h5>Compilação</h5>
            <p>
              Compilação: transforma o código fonte em código de objeto. Além
              disso, são criados dois arquivos: código objeto e código
              executável. <br /> Utilizado por linguagens como: C, C++, etc..
            </p>
            <img src={compileImg} alt="compile img" className="img-fluid" />
            <h5>Interpretação</h5>
            <p>
              Gradualmente o interpretador vai traduzindo o código fonte e
              interpretando o mesmo.
              <br />
              Exemplos: PHP,JavaScript, Python, Ruby, etc...
            </p>
            <img
              src={interImg}
              alt="interpretation img"
              className="img-fluid"
            />
            <h5>Abordagem híbrida</h5>
            <img src={hybridImg} alt="hybrid img" className="img-fluid" />
            <p>
              Exemplos de linguagens: Java &#40;JVM&#41;, C# &#40;Microsoft .NET
              Framework&#41;{" "}
            </p>
            <p>
              Quando o desenvolvedor entregar o código é necessário o arquivo
              pré compilado e a máquina virtual.
            </p>
            <h5>Vantagens</h5>
            <p>
              Compilação: <br />
              velocidade do programa; <br />
              auxílio do compilador antes da execução.
            </p>
            <p>
              Interpretação: <br />
              Flexibilidade de manutenção do aplicativo em produção;
              <br />
              Expressividade da linguagem;
              <br />
              Código fonte não precisa ser recompilador para rodar em
              plataformas diferentes.
            </p>
            <h5>Funcionamento</h5>
            <img
              src={operationImg}
              alt="operation img"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;
