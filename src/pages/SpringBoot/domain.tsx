import Sidebar from "components/Sidebar";
import { SPRING_LIST } from "resources/consts";
import packageImg from "../../assets/imgs/spring-boot/package.png";

const Domain = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={SPRING_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>Domain/Entities</h3>
            <p className="custom-p">
              1 - Criar pacote com nome domain ou Entities <br />
              Os pacotes devem ser criado depois do pacote base
              &#40;com.example.Exemplo.&#41;, caso contrário, não será
              reconhecido pelo Spring.
            </p>
            <img src={packageImg} alt="package" className="img-fluid" />
            <p className="custom-p">
              2 - Criar classe desejada, gerar getters e setters, construtor,
              equals e hash code.
              <br />
              Serializable: Padrão da linguagem java para converter os objetos
              em bits. Sendo assim, o objeto pode ser salvo em arquivos, trafegar pela rede, etc...
              <div className="custom-code">
                <p>package com.example.Exemplo.entities;</p>
                <p>import java.util.Objects;</p>
                <p>public class Category implements Serializable&#123;</p>
                <div className="custom-space">
                  private static final long serialVersionUID = 1L;
                  <br />
                  private Long id;
                  <br />
                  private String name;
                  <br />
                  <br />
                  public Category&#40;&#41; &#123;
                  <br />
                  <br />
                  &#125;
                  <br />
                  <br />
                  public Category&#40;Long id, String name&#41; &#123;
                  <p className="custom-return">
                    this.id = id; <br />
                    this.name = name;
                  </p>
                  &#125;
                  <br />
                  <br />
                  public Long getId&#40;&#41; &#123;
                  <br />
                  <p className="custom-return">return id;</p>&#125;
                  <br />
                  <br />
                  public Long setId&#40;Long id&#41; &#123;
                  <br />
                  <p className="custom-return">this.id = id;</p>&#125;
                  <br />
                  <br />
                  public String getName&#40;&#41; &#123;
                  <br />
                  <p className="custom-return">return name;</p>&#125;
                  <br />
                  <br />
                  public String setName&#40;String name&#41; &#123;
                  <br />
                  <p className="custom-return">this.name = name;</p>&#125;
                  <br />
                  <br />
                  @Override
                  <br />
                  public int hashCode&#40;&#41; &#123;
                  <br />
                  <p className="custom-return">
                    return Objects.hash&#40;id&#41;;
                  </p>
                  &#125;
                  <br />
                  <br />
                  @Override
                  <br />
                  public boolean equals&#40;Object id&#41; &#123;
                  <br />
                  <p className="custom-space">
                    if &#40;this === obj&#41;
                    <br />
                    <span className="custom-space">return true;</span>
                    <br />
                    if &#40;this === null&#41;
                    <br />
                    <span className="custom-space">return false;</span>
                    <br />
                    if &#40;getClass&#40;&#41; != obj.getClass&#40;&#41;&#41;
                    <br />
                    <span className="custom-space">return false;</span>
                    <br />
                    Category other = &#40;Category&#41; obj;
                    <br />
                    <span className="custom-space">
                      return Objects.equals&#40;id, other.id&#41;;
                    </span>
                    <br />
                  </p>
                  &#125;
                  <br />
                  <br />
                </div>
                &#125;
              </div>
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Domain;
