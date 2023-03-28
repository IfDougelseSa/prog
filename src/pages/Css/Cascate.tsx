import Sidebar from "components/Sidebar";
import { CSS_LIST } from "resources/consts";
import PointsImg from "../../assets/imgs/css/points.png";

const Cascate = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={CSS_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>Cascata, herança e especifidade</h3>
            <h5>Cascata</h5>
            <p>
              Significa que a ordem das regras CSS é importante; quando se
              aplicam duas regras com especificidade igual, a que vier por
              último no CSS é a que será usada.
            </p>
            <h5>Especificade</h5>
            <p>
              A especificidade é como o navegador decide/verifica qual regra se
              aplica se várias regras têm seletores diferentes, que poderiam ser
              aplicadas ao mesmo elemento. É basicamente uma medição de qual das
              regras/caracteristicas específica será a mais indicada/específica
              de um seletor:
            </p>
            <p>
              Ordem de especificade: style inline &#62; seletor id &#62; seletor
              classes &#62; seletor geral{" "}
            </p>
            <ul>
              <li>
                Um seletor de elemento é menos específico - ele selecionará
                todos os elementos daquele tipo que aparecem em uma página -
                portanto, obterá uma pontuação mais baixa.
              </li>
              <li>
                Um seletor de classe é mais específico - ele selecionará apenas
                os elementos em uma página que possuem um valor de atributo de
                classe específico - portanto, obterá uma pontuação mais alta.
              </li>
            </ul>
            <p>
              Ou seja, se tivermos duas regras css, uma h1 aplicada para todos
              os h1 e outra uma classe aplicada em qualquer h1, a regra que vai
              prevalecer será a da classe, não importando a ordem da cascata. O
              porquê está relacionado com a pontuação mais alta da classe
              especifica.
            </p>

            <img src={PointsImg} alt="Points img" className="img-fluid" />
            <br />
            <br />
            <p>
              Podemos ver ta tabela pontos de especificade. Se tivermos dois
              seletores com ids, mas um desses seletores tiver um id a mais, ele
              ganhará mais pontos e será utilizado em detrimento do seletor com
              id a menos. E assim vai.... <br /> Se tivermos varios seletores de
              tags, o que tiver mais seletores terá mais pontos e suas regras
              serão utilizadas.
            </p>
            <p>
              Nota: Este foi apenas um exemplo aproximado para facilitar a
              compreensão. Na realidade, cada tipo de seletor tem seu próprio
              nível de especificidade que não pode ser substituído por seletores
              com um nível de especificidade inferior. Por exemplo, um milhão de
              seletores de classe combinados não seriam capazes de sobrescrever
              as regras de um seletor de id. Uma forma mais precisa de avaliar a
              especificidade seria pontuar os níveis de especificidade
              individualmente começando do mais alto e passando para o mais
              baixo quando necessário. Somente quando há um empate entre as
              pontuações do seletor dentro de um nível de especificidade, você
              precisa avaliar o próximo nível abaixo; caso contrário, você pode
              desconsiderar os seletores de nível de especificidade inferior,
              pois eles nunca podem substituir os níveis de especificidade mais
              altos.
            </p>
            <h4>!import</h4>
            <p>
              Existe uma parte especial do CSS que você pode usar para ignorar
              todos os cálculos acima, no entanto, você deve ter muito cuidado
              ao usá-la -! Importante. Isso é usado para tornar uma determinada
              propriedade e valor a coisa mais específica, substituindo assim as
              regras normais da cascata.
              <br /> p &#123;color: red !important; &#125;
              <br />
              Com isso, será o valor mais específico, não importando a
              especifidade. A única maneira de sobescrever essa especificação
              seria adicionar outra do mesmo nível após ela, ou adicionar o
              !important em uma especifidade mais alta.
            </p>
            <h5>Herança</h5>
            <p>
              Alguns valores de propriedade CSS definidos em elementos pais são
              herdados por seus elementos filhos e outros não. Por exemplo, se
              você definir uma cor e uma família de fontes em um elemento, todos
              os elementos dentro dele também serão estilizados com essa cor e
              fonte, a menos que você tenha aplicado cores e valores de fonte
              diferentes diretamente a eles.
            </p>
            <p>
              Algumas propriedades não herdam - por exemplo, se você definir um
              width de 50% em um elemento, todos os seus descendentes não terão
              uma largura de 50% da largura de seus pais. Se fosse esse o caso,
              CSS seria muito frustrante de usar!
            </p>
            <h5>Controlando Herança</h5>
            <table>
              <tr>
                <th>inherit</th>
                <th>initial</th>
                <th>unset</th>
                <th>revert</th>
              </tr>
              <tr>
                <td>
                  Define o valor da propriedade aplicada a um elemento
                  selecionado para ser o mesmo de seu elemento pai.
                  Efetivamente, isso "ativa a herança".
                </td>
                <td>
                  Define o valor da propriedade aplicada a um elemento
                  selecionado para o valor inicial dessa propriedade.
                </td>
                <td>
                  Restaura a propriedade com seu valor natural, o que significa
                  que se a propriedade é herdada naturalmente, ela age como
                  herdada, caso contrário, ela age como inicial.
                </td>
              </tr>
            </table>
            <h4>Redefinindo todos os valores</h4>
            <p>
              É possível redefinir os valores usando 'all'. .fix &#123;
              all:unset; &#125;.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cascate;
