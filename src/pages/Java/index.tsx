import Sidebar from "components/Sidebar";
import { JAVA_LIST } from "resources/consts";
import exeImg from "../../assets/imgs/concepts/execution.png";

const Java = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={JAVA_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>Java</h3>
            <p>
              Java é uma linguagem de programação criada pela Sun Microsystems
              no meio da década de 1990. Adquirida pela Oracle Corporation em
              2010.
            </p>
            <p>
              Plataforma de desenvolvimento e execução
              <br />O java fornece Bibliotecas &#40;API&#41; e os ambientes de
              execução.
            </p>
            <h5>Problemas resolvidos e motivo de seu sucesso</h5>
            <ul>
              <li>Ponteiros/ gerenciamento de memória.</li>
              <li>
                Portabilidade falha: reescrever parte do código ao mudar de SO.
              </li>
              <li>Utilização em dispositivos diversos</li>
              <li>Custo</li>
            </ul>
            <h5>Aspectos notáveis</h5>
            <ul>
              <li>
                Código compilado para bytecode e executado em máquina virtual
                &#40;JVM&#41;.
              </li>
              <li>Portável, segura, robusta.</li>
              <li>Roda em vários tipos de dispositivos.</li>
              <li>Domina o mercado corporativo desde o fim do século 20.</li>
              <p>Padrão Android por muitos anos.</p>
            </ul>
            <h5>Edições</h5>
            <ul>
              <li>
                Java ME - Java Micro Edition - dispositivos embarcados e móveis
                - IoT.
              </li>
              <li>
                Java SE - Java Standard Edition - core - desktop e servidores.
              </li>
              <li>
                Java EE - Java Enterprise Edition - aplicações corporativas.
              </li>
            </ul>
            <h5>Plataforma JAVA SE</h5>
            <p>
              JVM - Java Virtual Machine <br />
              Máquina virtual do java - necessário para executar sistemas Java.
            </p>
            <img src={exeImg} alt="execution img" className="img-fluid" />
            <h5>Estrutura de uma aplicação Java</h5>
            <p>
              Java é uma linguagem orientada a objeto. A unidade básica de uma
              aplicação orientada a objeto é a classe. Todo código em Java tem
              que estar dentro de classes.
            </p>
            <p>
              Depois da classes temos os package, que é o agrupamento lógico de
              classes relacionadas.
            </p>
            <p>
              Depois do pacote, tem-se o conceito de módulo, que foi introduzido
              no Java 9+. O conceito de módulo é o agrupamento lógico de pacotes
              relacionados.
              <br />
              Run time é o agrupamento físico &#40;representados por
              arquivos&#41;. Cada build ou runtime é uma unidade física que pode
              ser instalada para rodar nos dispositivos.
            </p>
            <p>Aplicação é o agrupamento de módulos relacionados.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Java;
