import Sidebar from "components/Sidebar";
import { CSS_LIST } from "resources/consts";

const Selectors = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={CSS_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>Seletores CSS</h3>
            <h4>O que é um seletor?</h4>
            <p>
              Você já conheceu os seletores. Um seletor CSS é a primeira parte
              de uma regra CSS. É um padrão de elementos e outros termos que
              informam ao navegador quais elementos HTML devem ser selecionados
              para que os valores de propriedade CSS dentro da regra sejam
              aplicados a eles. O elemento ou elementos que são selecionados
              pelo seletor são referidos como o assunto do seletor .
            </p>
            <p>
              Em artigos anteriores, você conheceu alguns seletores diferentes e
              aprendeu que existem seletores que direcionam o documento de
              maneiras diferentes - por exemplo, selecionando um elemento como
              h1, ou uma classe como .special.
            </p>
            <h4>Lista de seleção</h4>
            <p>
              Quando temos dois seletores com o mesmo assunto, é possível juntas
              os mesmo. <br /> h1, .special &#123; color: blue; &#125;
              <br />
              Com isso, nosso código fica menos verboso e criamos uma "lista de
              seleção". Além disso, é válido dar um espaço entre os seletores,
              para uma melhor leitura.
              <br />
              h1,
              <br /> .special &#123; color: blue; &#125;
              <br />
              Caso tenha algum erro de sintaxe, e for agrupado dessa forma,
              todos os seletores que estiverem na lista não funcionarão. A regra
              será considerada inválida.
            </p>
            <h4>Tipos de seletores</h4>
            <h5>Seletores de tipo, classe e ID</h5>
            <p>.h1 &#123; &#125; .special &#123; &#125; #test &#123; &#125;</p>
            <h5>Seletores de atributos</h5>
            <p>a&#91;title&#93; &#123; &#125;</p>
            <p>
              Seleção com base na presença de um atributo com valor específico
            </p>
            <p>a&#91;href="https://example.com"&#93; &#123; &#125;</p>
            <h4>Pseudo classes e pseudo-elementos</h4>
            <p>
              Este grupo de seletores inclui pseudo classes, que definem o
              estilo de certos estados de um elemento. A :hoverpseudoclasse, por
              exemplo, seleciona um elemento apenas quando ele está sendo
              passado pelo ponteiro do mouse:
            </p>
            <p>
              Também inclui pseudoelementos, que selecionam uma determinada
              parte de um elemento em vez do próprio elemento. Por exemplo,
              ::first-linesempre seleciona a primeira linha de texto dentro de
              um elemento (a p no caso abaixo), agindo como se a tivesse span
              sido colocado em volta da primeira linha formatada e então
              selecionado. <br />
              p::first-line &#123; &#125;
            </p>
            <h4>Combinadores</h4>
            <p>
              O grupo final de seletores combina outros seletores para
              direcionar os elementos em nossos documentos. O seguinte, por
              exemplo, seleciona parágrafos que são filhos diretos de article
              elementos usando o combinador filho &#8250;:
              <br />
              article &#8250; p &#123; &#125;
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Selectors;
