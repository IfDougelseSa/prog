import Sidebar from "components/Sidebar";
import { CSS_LIST } from "resources/consts";

const WaysToStyle = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={CSS_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>Formas de estilizar</h3>
            <h4>Inline</h4>
            <p>
              Pode-se estilar os elementos diretamente na tag HTML. Basta usar o
              inline style sheet.
            </p>
            <h4>Internal/External style sheet </h4>
            <p>
              Pode-se criar uma folha interna ou externa. Depois disso,
              selecionar a tag HTML que deseja estilizar. Além disso, é possível
              selecionar diversar tags. Exemplo: p, h1 &#123; color: orange;
              &#125;
            </p>
            <h4>Classes/IDS</h4>
            <p>Pode-se criar classes ou IDS para estilizar subconjuntos.</p>
            <h4>Classes/IDS combinado com tag HTML</h4>
            <p>
              Pode-se estilizar o elemento HTML seguido da classe. Com isso,
              todos os elementos HTML que tiverem a classe serão estilizados.
            </p>
            <p>
              Exemplo: li.nomeclasse &#123; color: orange; &#125;
              <br /> Significa "pegue qualquer elemento li que tenha uma classe
              nomeclasse. <br />
              Caso seja feito isso, não é possível adicionar a class para outro
              elemento HTML. O que poderia ser feito é adicionar o elemento HTML
              juntamente.
              <br />
              li.nomeclasse, span.nomeclasse &#123; color: orange; &#125;
            </p>
            <h4>Estilização baseado na localização no documento</h4>
            <p>
              Para estilizar baseado na localização de alguma tag, podemos
              utilizar o combinador descendente. Exemplo: li em &#123; color:
              orange; &#125;. Com isso, todos os em que estiverem dentro de uma
              li serão selecionados &#123;todos elementos descendente serão
              selecionados &#125;. OBS: se fosse colocado uma vírgula entre
              eles, todas li e em seriam selecionados, não apenas todos em
              dentro das li.
            </p>
            <p>
              Além disso, é possível estilizar tags que vem diretamente após a
              outra, utilizando o combinador adjacente. Exemplo: h1 + p
              &#123;color: red&#125;. Com isso, se a tag p estiver no mesmo
              nível e após a tag h1, ela será modificada.
            </p>
            <h4>Estilizando baseado no estado</h4>
            <p>É possível estilzar baseado no estado. Uma das tag que podemos estilzar baseada no estado é a.<br/></p>
            <p>Links não visitados <br/> a:link &#123;color: red&#125;</p>
            <p>Links visitados <br/> a:visited &#123;color: red&#125;</p>
            <p>Links Hover, quando passar o cursor do mouse sobre o link <br/> a:hover &#123;color: red&#125;</p>
            <p>Links Ativos, quando clicados <br/> a:active &#123;color: red&#125;</p>
            <p>OBS: a ordem deve ser mantida na formatação dos estados.</p>

            <h4>Combinando seletores e combinadores</h4>
            <p>Pode-se combinar os seletores com combinadores. Exemplo: div span + p .special &#123;color: red&#125;</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaysToStyle;
