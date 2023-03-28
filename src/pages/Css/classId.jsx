import Sidebar from "components/Sidebar";
import { CSS_LIST } from "resources/consts";
import classIdImg from "../../assets/imgs/css/class-id.png";

const ClassId = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={CSS_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>Classes e ID</h3>
            <h4>Classes</h4>
            <p>
              As classes servem para selecionar um subconjunto de elementos sem
              alterar os outros. Podemos criar uma classe e customizar
              diferentes parágrafos, sem alterar todos os parágrafos. As classes
              permitem que o CSS e Javascript selecionar e acessar elementos
              específicos através dos seletores de classe ou funções como o
              método DOM document.getElementsByClassName.
            </p>
            <h4>ID</h4>
            <p>
              O ID funciona igual as classes, porém a recomendação é utilizar
              apenas 1 ID por página. Com isso, podemos fazer modificações
              únicas utilizando JS.
            </p>
            <img src={classIdImg} alt="class id img" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassId;
