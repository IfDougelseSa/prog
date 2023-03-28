import Sidebar from "components/Sidebar";
import { CSS_LIST } from "resources/consts";
import InlineImg from "../../assets/imgs/css/inline.png";
import InternalImg from "../../assets/imgs/css/internal.png";
import ExternalImg from "../../assets/imgs/css/external.png";

const IncludeCss = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={CSS_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>Formas de incluir CSS</h3>
            <p>
              Existem 3 formas de incluir o css no documento HTML: Extenal style
              sheet, Internal style sheet e Inline style.
            </p>
            <h4>Inline Style</h4>
            <p>
              É quando o css é incluido diretamente na tag do documento html
            </p>
            <img src={InlineImg} alt="Inline img" className="img-fluid" />
            <br />
            <br />
            <h4>Internal Style Sheet</h4>
            <p>
              Quando o css é incluido no html, porém dentro do head. Sendo
              assim, é possível usar os seletores HTML.
            </p>
            <img src={InternalImg} alt="Internal img" className="img-fluid" />
            <br />
            <br />
            <h4>External Style Sheet</h4>
            <p>
              Quando o css é incluindo em outro arquivo, mas linkando no html. O
              link deve ser dentro ta tag head. Além disso, o externa é o mais
              utilizado, pois criamos um único arquivo e podemos adicona-lo em
              várias páginas apenas com o link.
            </p>
            <img src={ExternalImg} alt="External img" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default IncludeCss;
