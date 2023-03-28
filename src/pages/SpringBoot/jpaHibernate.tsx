import Sidebar from "components/Sidebar";
import { SPRING_LIST } from "resources/consts";

const JpaHibernate = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={SPRING_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>Mapeamento objeto-relacional</h3>
            <br />

            <p>
              Antigamente, a maior dificuldade de usar o paradigma orientado a
              objetos era a comunicação com o banco de dados relacional. Sendo
              que, o banco de dados tem outro paradigma que é o relacional. Com
              isso, tinha-se um esforço enorme para programar essa interação
              entre os paradigmas diferentes. No passado, era usado o pacote
              JDBC, sendo que era necessário fazer a tradução do objeto para o
              banco de dado relacional e vice-versa. Antes de existir as
              ferramentas objeto-relacional, era necessário programar "na mão".
              Martin Fowler estimou que com as ferramentes, foi reduzido 30% do
              esfoço de se fazer um sistema.
            </p>

            <hr />
            <h3>JPA</h3>
            <p>
              Java Persistence API &#40;JPA&#41; é a especificação padrão da
              plataforma Java EE &#40;pacote javax.persistence&#41; para
              mapeamento objeto-relacional e persistência de dados.
            </p>
            <p>JPA é apenas uma especificação &#40;JSR 338&#41;</p>
            <p>
              Para trabalhar com JPA é preciso incluir no projeto uma
              implementação da API &#40;ex: Hibernate&#41;.
            </p>
            <p>Principais classes JPA:</p>
            <p>
              EntityManager: Um objeto EntityManager encapsula uma conexão com a
              base de dados e serve para efetuar operações de acesso a dados
              &#40;inserção, remoção, deleção, atualização&#41; em entidades
              &#40;clientes, produtos, pedidos, etc.&#41; por ela monitoradas em
              um mesmo contexto de persistência.
            </p>
            <p>
              Instaciar um EntityManager é a grosso modo conectar com o banco de
              dados.
            </p>
            <p>
              O EntityManger pode monitorar as entidades. Objetos monitorados
              pelo EntityManager estão em um mesmo contexto de persistência.
            </p>
            <p>
              EntityManagerFactory é utilizado para instaciar objetos
              EntityManager
            </p>
            <h3>Mapeando classes com JPA</h3>
            <p>
              Utilizar @Entity em cima da class da camada domain. Sempre
              escolher o import da javax.persistente pois é a especificação da
              JPA. É uma boa prática escolher a especificação, caso seja
              necessário trocar a implementação, o Hibernate vai estar
              funcionando.
            </p>
            <p>Em seguida, colocar @Table&#40;name = "nome-tabela"&#41;</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JpaHibernate;
