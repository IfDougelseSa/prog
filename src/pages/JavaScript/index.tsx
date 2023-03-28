import Sidebar from "components/Sidebar";
import { JAVASCRIPT_LIST } from "resources/consts";
import includeImg from "../../assets/imgs/javascript/include.png";
import inImg from "../../assets/imgs/javascript/in-script.png";
import exImg from "../../assets/imgs/javascript/ex-script.png";

const Javascript = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={JAVASCRIPT_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>O que é JavaScript??</h3>
            <p>
              JavaScript® &#40;às vezes abreviado para JS&#41; é uma linguagem
              leve, interpretada e baseada em objetos com funções de primeira
              classe, mais conhecida como a linguagem de script para páginas
              Web, mas usada também em vários outros ambientes sem browser, tais
              como node.js, Apache CouchDB e Adobe Acrobat. O JavaScript é uma
              linguagem baseada em protótipos, multi-paradigma e dinâmica,
              suportando estilos de orientação a objetos, imperativos e
              declarativos &#40;como por exemplo a programação funcional&#41;.
            </p>
            <p>
              O JavaScript como client-side permite aplicar dinâmica aos
              elementos da página web.
            </p>
            <p>
              O JavaScript é mantido atualmente pela W3C. <br />A W3C é o
              consórcio que cuida da padronização de tecnologias web &#40;HTML,
              CSS&#41;
            </p>
            <p>Cria por Brendan Eich em 1995. Nome: LiveScript. </p>
            <h3>Incluindo JavaScript em arquivos HTML5</h3>
            <img src={includeImg} alt="package" className="img-fluid" />
            <br />
            <br />
            <p>
              Quando o javascript é criado diretamente no arquivo HTML, o mesmo
              pode ser colocado dentro da tag head ou body. A diferença de
              colocar o JavaScript na tag head é que o script é carregado antes
              do carregamento do body. Atualmente, tem-se formas de corrigir o
              carregamento do script antes das tags.
            </p>
            <p>Em volta da estrutura do código usar: </p>
            <img src={inImg} alt="Script inside html" className="img-fluid" />
            <p>Arquivo externo</p>
            <img src={exImg} alt="Extern script" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Javascript;
