import Sidebar from "components/Sidebar";
import { SPRING_LIST } from "resources/consts";

const Resource = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
          <Sidebar
                list={SPRING_LIST}
              />
          </div>
          <div className="col-8 base-card">
            <h3>Resource</h3>
            <p>
              O resource implementa o controlador rest. São os recursos serão
              disponibilizados para as aplicações utilizarem. As apis são
              implementadas pelos controladores REST.
            </p>
            <p>1 - Criar pacote java com resources no final</p>
            <p>
              2 - Sempre que o recurso tiver haver com uma entidade, criar o
              nome da classe com a nomenclatura NomeResource
            </p>
            <p>
              3 - Para configurar no spring que a classe vai ser um resource,
              usar annotation @RestController em cima da classe.
            </p>
            <p>
              4 - Além do RestController, usar a annotation
              @RequestMapping&#40;value = "nome-da-rota"&#41;. Normalmente, a
              rota do recurso é colocada no plural.
            </p>
            <p>
              5 - Criar um método com o retorno ResponseEntity. O ResponseEntity
              encapsula uma resposta HTTP. Além disso, é um generics, podendo
              definir o tipo do dado que vai estar no corpo da resposta. Colocar
              o nome do método pertinente com o que ele vai fazer. Colocar
              annotation @GetMapping &#40;Depende de qual requisição rest será
              utilizada&#41; em cima do método. <br /> <br />
              Exemplo: public ResponseEntity&lt;Retorno&gt; findAll&#40; &#41;
              <br /> &#123; <br /> return ResponseEntity.ok&#40;
              &#41;.body&#40;list&#41; <br /> &#125; <br /> .ok&#40; &#41;
              Signififca que a requisição foi realizada com sucesso
              &#40;200&#41; <br /> .body&#40; &#41; Vai ser o retorno da
              resposta.
            </p>
            <p>
              OBS: As annotations são uma forma enxuta de configurar alguma
              coisa no seu código. É uma forma de usar algo que ja foi
              implementado. A annotation vai efetuar um pré-processamento ao
              compilar a classe que vai ser disponibilzada como recurso.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resource;
