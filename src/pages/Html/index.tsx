import Sidebar from "components/Sidebar";

const Html = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar
              list={[
                { link: "/html", titleLink: "O que é HTML?" },
                { link: "/html/comments", titleLink: "<!-- -->" },
              ]}
            />
          </div>
          <div className="col-8 base-card">
            <h3>O que é HTML?</h3>

            <q cite="https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Getting_started">
              (HyperText Markup Language) não é uma linguagem de programação, é
              uma linguagem de marcação utilizada para dizer ao seu navegador
              como estruturar a página web que você visita.
            </q>
            <hr />
            <h3>Anatomia HTML</h3>
            <br />

            <h6>Exemplo de tag HTML</h6>
            <br />
            <pre>
              <code>&lt;p&gt; Exemplo de tag html &lt;p /&gt;</code>
            </pre>
            <q cite="https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Getting_started">
              Tag de abertura: Consiste no nome do elemento ( neste caso: p ),
              envolvido entre parênteses angulares de abertura e fechamento.
              Isso indica onde o elemento começa, ou inicia a produzir efeito —
              neste caso, onde o parágrafo se inicia.
              <br />
              <p>
                Tag de fechamento: É o mesmo que a tag de abertura, exceto que
                este inclui uma barra diagonal antes do nome do elemento. Indica
                onde o elemento termina — neste caso, onde fica o fim do
                parágrafo. Falhar em incluir o fechamento de uma tag é um erro
                comum para iniciantes e pode levar a resultados estranhos.
              </p>
              <p>
                O conteúdo: Este é o conteúdo do elemento, que neste caso é
                somente texto.
              </p>
              <p>
                O elemento: A tag de abertura, mais a tag de fechamento, mais o
                conteúdo, é igual ao elemento.
              </p>
            </q>
            <p>
              Iniciando com HTML. MDN WEB DOCS. Acesso em: 29, novembro de 2022.
            </p>
            <hr />

            <h3>Aninhando elementos</h3>
            <p>
              Elementos podem ser inseridos dentro de outros elementos — isto é
              chamado de aninhamento. Se nós quisermos dizer que nosso gato é
              muito mal-humorado, nós poderemos envolver a palavra "muito" com o
              elemento&nbsp;
              <code>&lt;strong&gt;</code>, que significa enfatizar fortemente a
              palavra:
              <pre>
                <code>
                  &lt;p&gt; meu gato é &lt;strong&gt;muito mal-humorado
                  &lt;strong /&gt; &lt;p /&gt;
                </code>
              </pre>
            </p>
            <hr />
            <h3>Estrutura básica HTML</h3>
            <br />

            <pre>
              <code>&lt;!DOCTYPE html /&gt;</code>
            </pre>
            <p>
              Tipo de html que está utilizando, quando coloca html, por padrão
              será o html 5.
            </p>
            <pre>
              <code>&lt;html&gt; &lt;html /&gt;</code>
            </pre>
            <p>
              Ao abrir e fechar as tags html estamos definindo onde nosso html
              comeca e onde ele vai terminar
            </p>
            <pre>
              <code>&lt;head&gt; &lt;head /&gt;</code>
            </pre>
            <p>
              Estruturas que não aparecem diretamente no site - formatação, js,
              etc. Tirando algumas exceções.
            </p>
            <pre>
              <code>&lt;body&gt; &lt;body /&gt;</code>
            </pre>
            <p>Informações que aparecem diretamente no site.</p>
            <pre>
              <code>&lt;title&gt; &lt;title /&gt;</code>
            </pre>
            <p>Título da aba do navegador</p>
            <pre>
              <code>&lt;meta charset="utf-8"&gt;</code>
            </pre>
            <p>
              Tipo de codificação que vai ser utilizada na página web.
              Basicamente, define que pode utilizar acentos na página web
            </p>
            <pre>
              <code>
                &lt;!DOCTYPE html&gt; <br />
                &nbsp;&lt;html&gt; <br />
                &nbsp;&nbsp;&lt;head&gt; <br />
                &nbsp;&nbsp;&nbsp;&lt;title&gt; Título Aba &lt;title /&gt;
                <br />
                &nbsp;&nbsp;&lt;head /&gt;
                <br />
                &nbsp;&nbsp;&lt;body&gt; <br />
                &nbsp;&nbsp;&nbsp;Conteúdo site <br />
                &nbsp;&nbsp;&lt;body /&gt;
                <br />
                &nbsp;&lt;html /&gt;
              </code>
            </pre>
            <hr />
            <h3>Elementos bloco vs inline</h3>
            <q cite="https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Getting_started">
              Elementos em bloco formam um bloco visível na página — eles
              aparecerão em uma nova linha logo após qualquer elemento que venha
              antes dele, e qualquer conteúdo depois de um elemento em bloco
              também aparecerá em uma nova linha. Elementos em bloco geralmente
              são elementos estruturais na página que representam, por exemplo:
              parágrafos, listas, menus de navegação, rodapés etc. Um elemento
              em bloco não seria aninhado dentro de um elemento inline, mas pode
              ser aninhado dentro de outro elemento em bloco.
              <br /> Elementos inline (na linha) são aqueles que estão contidos
              dentro de elementos em bloco envolvem apenas pequenas partes do
              conteúdo do documento e não parágrafos inteiros ou agrupamentos de
              conteúdo. Um elemento inline não fará com que uma nova linha
              apareça no documento: os elementos inline geralmente aparecem
              dentro de um parágrafo de texto, por exemplo: um elemento{" "}
              <code> &nbsp;&lt;a&gt;</code>
              (hyperlink) ou elementos de ênfase como{" "}
              <code> &nbsp;&lt;em&gt;</code> ou{" "}
              <code> &nbsp;&lt;strong&gt;</code>.
            </q>
            <hr />
            <h3>Elementos vazios</h3>
            <q cite="https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Getting_started">
              Nem todos os elementos seguem o padrão acima de: tag de abertura,
              conteúdo, tag de fechamento. Alguns elementos consistem apenas em
              uma única tag, que é geralmente usada para inserir/incorporar algo
              no documento no lugar em que ele é incluído. Por exemplo, o
              elemento <code> &nbsp;&lt;img&gt;</code> insere uma imagem em uma
              página na posição em que ele é incluído:
            </q>
            <pre>
              <code>&nbsp;&lt;img src="link-imagem"&gt;</code>
            </pre>
            <hr />
            <h3>Atributos</h3>
            <q cite="https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Getting_started">
              <p>
                Atributos contém informação extra sobre o elemento, mas que você
                não deseja que apareça no conteúdo. Nete caso, o atributo class
                permite que você dê ao elemento um nome de identificação, que
                pode ser usada mais tarde para direcionar informação de estilo
                ao elemento e outras coisas.
              </p>
              <p>Um atributo deve conter:</p>
              <ol>
                <li>
                  Um espaço entre ele e o nome do elemento (ou o atributo
                  anterior, caso o elemento já contenha um ou mais atributos.)
                </li>
                <li>O nome do atributo, seguido por um sinal de igual.</li>
                <li>
                  Um valor de atributo, com aspas de abertura e fechamento em
                  volta dele.
                </li>
              </ol>
            </q>
            <hr />
            <h3>Atributos booleanos</h3>
            <q cite="https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Getting_started">
              Às vezes você verá atributos escritos sem valores — isso é
              permitido nos chamados atributos boleanos, e eles podem ter
              somente um valor, que é geralmente o mesmo nome do atributo. Por
              exemplo, o atributo disabled você pode atribuir para os elementos
              de entrada de formulários, se desejar que estes estejam
              desativados (acinzentados), para que o usuário não possa inserir
              nenhum dado neles.
            </q>
            <pre>
              <code>&nbsp;&lt;input type="text" disabled="disabled"&gt;</code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default Html;
