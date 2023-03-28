import Sidebar from "components/Sidebar";
import { CSS_LIST } from "resources/consts";

const PaddingMargin = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={CSS_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>Modelo de caixa</h3>
            <p>
              Os elementos HTML funcionam como se fossem caixas. Dito isso,
              conseguimos aplicar espaçamentos nas caixas, utilizando padding e
              margin.
            </p>
            <h4>Padding</h4>
            <p>
              O padding é o espaçamento interno das caixas. Ele funciona
              aumentando o tamanho da caixa. Exemplo: .classe-customizada &#123;
              padding-left: 10px; &#125;.
              <br /> Com isso, seria aumentado 10 px para esquerda o elemento
              que utilizar está classe.
            </p>
            <h4>Margin</h4>
            <p>
              O margin é o espaçamento externo das caixas. Ele funciona
              aumentando a distância entre as caixas. Exemplo:
              .classe-customizada &#123; margin-left: 10px; &#125;. Com isso, o
              elemento se distanciaria 10px para esquerda de outro elemento.
              <br />
              OBS: quando temos dois elementos um em cima e outro em baixo, se
              aplicado uma margin bottom 10px no elemento de cima e 20 px no
              elemento de baixo, as margin não vão se somar e dar 30px. O que
              vai acontecer é que o elemento que tem a maior margem vai
              prevalecer, no caso 20px. Esse comportamento é padrão e se chama
              margin collapse. Apenas ocorre com bottom e top.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaddingMargin;
