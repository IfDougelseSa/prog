import Sidebar from "components/Sidebar";
import { SPRING_SECURITY_LIST } from "resources/consts";
import defaultSecurity from "../../assets/imgs/spring-security/default-security.png";
import ourSecurity from "../../assets/imgs/spring-security/our-security.png";
import requestMatchers from "../../assets/imgs/spring-security/request-matchers.png";
import denyPermit from "../../assets/imgs/spring-security/deny-permit.png";

const ChangeConfiguration = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-start">
					<div className="col-4">
						<Sidebar list={SPRING_SECURITY_LIST} />
					</div>
					<div className="col-8 base-card">
						<h3>Alterando configurações padrões</h3>
						<p>
							Por padrão, todos os endpoints possuem segurança quando utilizamos
							spring security.
						</p>
						<p>
							A classe SpringBootWeSecurityConfiguration possue um método
							chamado defaultSecurityFilterChain que aceita HttpSecurity como
							parâmetro. O codigo abaixo mostra o método.
						</p>
						<img
							src={defaultSecurity}
							alt="Default security img"
							className="img-fluid"
						/>
						<p>
							Com o HttpSecurity é invocado o método authorizeHttpRequests.
							Depois, é possível ver que qualquer requisição precisa de
							autenticação. Além disso, com o formLogin, podemos dizer que a
							requisição está vindo de uma aplicação UI. Com httpBasic a
							requisicão está vindo pelo postman com as credenciais. Depois, o
							método build é acionado, retornando um objeto SecurityFilterChain.
							Com a annotation @Bean, qualquer objeto retornando o spring vai
							manter dentro do Spring context.
						</p>
						<p>
							Java docs: ** * The default configuration for web security. It
							relies on Spring Security's * content-negotiation strategy to
							determine what sort of authentication to use. If * the user
							specifies their own @link SecurityFilterChain bean, this will
							back-off * completely and the users should specify all the bits
							that they want to configure as * part of the custom security
							configuration
						</p>
						<p>
							Com isso, se quisermos definir nosso próprio requerimentos para o
							tipo de seguranç com ajuda do spring security, precisamos escrever
							nosso próprio bean do SecurityFilterChain. Com isso, qualquer
							SecurityFilterChain bean utilizado pelo desenvolvedor, esse método
							não sera mais utilizado.
						</p>
						<p>
							Para criar uma classe de configuração, criar uma classe com um
							nome que de para entender e utilizar a annotation @Configuration.
							Com essa annotation, dizemos para o spring boot que temos certas
							configurações definidas dentro da classe. Quando a aplicação
							começar, vai ser escaneado todos os beans declarados dentro da
							classe. Com isso, basta ir na classe
							SpringBootWebSecurityConfiguration, copiar o método
							defaultSecurityFilterChain e colar na sua classe criada.
						</p>

						<img
							src={ourSecurity}
							alt="Our security img"
							className="img-fluid"
						/>

						<p>Com isso, criamos nossa própria classe de configuração.</p>
						<p>
							O bean defaultSecurityFilterChain é importante quando queremos
							definir nossa prórpria segurança customizada.
						</p>
						<p>
							Para definirmos quais endpoints serão customizados, podemos
							utilizar o requestMatchers. Além disso, logo depois do
							requestMatchers podemos definir como o endpoint poderá ser
							acessado com os seguintes métodos: permitAll(), authenticaded(),
							denyAll() etc...
						</p>

						<img
							src={requestMatchers}
							alt="Request matchers img"
							className="img-fluid"
						/>
                        <br/><br/>
                        <p>Código para permitir ou rejeitar todos os endpoints.</p>
                        <img
							src={denyPermit}
							alt="Deny permit img"
							className="img-fluid"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default ChangeConfiguration;
