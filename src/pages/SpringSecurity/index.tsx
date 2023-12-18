import Sidebar from "components/Sidebar";
import { SPRING_SECURITY_LIST } from "resources/consts";

import password from "../../assets/imgs/spring-security/password.png";
import page from "../../assets/imgs/spring-security/page.png";
import session from "../../assets/imgs/spring-security/session.png";
import conf from "../../assets/imgs/spring-security/conf.png";
import servlet from "../../assets/imgs/spring-security/servlet.png";
import springFlow from "../../assets/imgs/spring-security/springflow.png";

const SPRINGSECURITY = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-start">
					<div className="col-4">
						<Sidebar list={SPRING_SECURITY_LIST} />
					</div>
					<div className="col-8 base-card">
						<h3>O que é Spring Security?</h3>
						<p>
							O @ComponentScan é uma anotação no Spring Framework, uma estrutura
							de desenvolvimento de aplicativos Java para facilitar a criação de
							aplicativos empresariais. Essa anotação é usada para especificar o
							pacote base a ser escaneado em busca de componentes gerenciados
							pelo Spring.
						</p>
						<p>
							Se todas as suas classes anotadas com @Component, @Service,
							@Repository, ou outras anotações relacionadas ao Spring estiverem
							no mesmo pacote (ou em subpacotes) que a classe de configuração
							onde você está usando @ComponentScan, então, teoricamente, o
							@ComponentScan pode não ser estritamente necessário. O Spring, por
							padrão, procura componentes apenas no mesmo pacote (e subpacotes)
							da classe que possui a anotação @SpringBootApplication,
							@Configuration ou @ComponentScan. Portanto, se todas as suas
							classes componentes estão no mesmo pacote ou em subpacotes do
							pacote onde a anotação @ComponentScan está presente, o Spring deve
							conseguir detectar automaticamente esses componentes durante a
							varredura padrão.
						</p>

						<p>
							Para adicionar o spring security em um projeto spring, basta
							apenas adicionar a dependências dos spring security.
						</p>
						<p>
							Ao adicionar as dependências do spring security e recarregar o
							projeto, todos os endpoints vão estar seguros por padrão. Com
							isso, quando tentar acessar algum endpoint, vai aparecer uma
							página de login padrão do Spring Security. Para conseguir acessar,
							o spring boot gera uma senha aleátoria que pode ser encontrada no
							console. Além disso, um usuário padrão para logar (user)
						</p>

						<img
							src={password}
							alt="Password spring img"
							className="img-fluid"
						/>
						<br />
						<br />
						<img src={page} alt="Login page spring img" className="img-fluid" />

						<p>
							Quando logamos apenas uma vez para acessar os endpoints com
							segurança, ao atualizarmos a página o spring security não vai
							pedir a senha novamente. Ele vai pedir apenas na primeira
							requisição. Isso acontece porque debaixo dos panos o framework
							cuida de guardar a ID SESSION ou os detalhes do token. Portanto,
							se o mesmo navegador for utilizado, não será necessário autenticar
							novamente.
						</p>

						<img
							src={session}
							alt="Session stored spring img"
							className="img-fluid"
						/>

						<p>
							É possível configurar seu próprio password e senha. Para isso,
							bastar ir em resoureces - application.properties e colocar as
							seguintes informações: spring.security.user.name
							spring.security.user.password
						</p>

						<img src={conf} alt="Conf spring img" className="img-fluid" />
						<p>
							Todo projeto spring boot tem um application.properties. Caso não
							saiba qual utilizar, basta acessar a documentação oficial do
							spring boot
							(https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html)
						</p>

						<h4>Introdução servlet & filters</h4>

						<img
							src={servlet}
							alt="Servlet e filters img"
							className="img-fluid"
						/>

						<p>
							Qualquer aplicação Java aceita requisição ou envia resposta
							através do protocolo HTTP. Nossos navegadores apenas entendem HTTP
							protocolo. Usando HTTP protocolo o navegador envia uma requisição
							para aplicação java, no entanto, o Java não é capaz de entender
							esses HTTP protocolos, com isso, tem-se um meio de campo entre o
							Java e o navegador, que é chamado de solid container ou web
							servers. Podendo ser o Apach Tomcat, que é um container sólido. O
							trabalho dos containers é converter a mensagem HTTP que eles
							recebem para requisição HTTP objeto sólida. E o mesmo objeto vai
							ser dado para o Java core ou o framework que estamos utilizando
							dentro de nossa aplicação web. A mesma coisa acontece ao
							contrário. Caso o java envie uma requisição, o servlet container
							vai pegar o HTTP solid resposta e converter para HTTP mensagem,
							sendo assim, o navegador sera capaz de entender. Atualmente não é
							mais necessário configurar os servlets, o spring boot faz o
							trabalho por baixo dos panos. Além dos servlets, temos os filters
							em nossas aplicações web, que são um tipo especial de servlets, o
							qual podemos interceptar requisições que vao para nossa aplicação
							web. No filtes podemos configurar alguma lógica antes de nossa
							logica negocial executar.
						</p>

						<h4>Spring Security Flow</h4>
						<img src={springFlow} alt="Spring flow img" className="img-fluid" />

						<p>
							O spring security possui mais de 20 filters. Durante o processo de
							login, o spring security filters vai pegar o username e password e
							converter em um objeto de autenticação no passo 2. Objeto de
							autenticacao é o padrão principal do spring security para guardar
							o detalhes do usuário. Quando o objedo de autenticação é formado,
							o spring security filters vai entregar a requisição para o
							gerenciador de autenticação. O gerenciador de autenticação é uma
							interface ou classe de gerenciamento, que vai gerenciar a logica
							de autenticação atual. Basicamente, ele vai checar quais
							provedores de autenticação estão disponíveis na aplicação web. É
							possível definir diversos provedores de autenticação. Dentro do
							provedores de autenticação, podemos definir a lógica de
							autenticação que queremos. Qualquer tipo de lógica de autenticação
							podemos escrever dentro dos provedores de autenticação. É
							responsabildiade do gerenciador de autenticação identificar todas
							provedores de autenticação disponiveis para determinada
							requisição. O gerenciador de autenticação vai testar todos os
							provedores de autenticação antes de voltar a resposta para o
							usuário. Caso todos deem errados, não vai ser possível logar. Além
							disso, é possível deixar para o spring security prover classes e
							interfaces para fazer o login, que são: user details manages e
							user detail service. No provedores de autenticação, podemos
							escrever qualquer lógica de autenticacaão. No entanto, podemos
							deixar o padrão do spring security. Além disso, como estamos
							utilizando senhas, não queremos guardar-los em formatos de textos.
							Com isso, temos a encriptação que são os passwords encoder.
							Userdetails manager/service trabalham juntos com o password
							enconder para determinar se a credencial do usuário é válida ou
							não. Com isso, quando a resposta volta, o spring vai tentar
							guardar o objeto de autenticacao que foi guardado em autenticacao
							no security context, se a autenticacao deu certo ou nao, session
							id. Com isso, se o usuário conseguiu logar, o spring security não
							vai perguntar novamente seus dados para acessar determinada
							requisição.
						</p>
						<h4>Filters Spring Security</h4>
						<p>AuthorizationFilter</p>
						<p>
							Vai restringir o acesso na URL que o usuário está tentando
							acessar. Se você estiver tentando acessar determinada URL, esse
							filtro vai barrar e te enviar para o próximo filtro disponível.
							Caso esteja tentando entrar em URL segura, o próximo filtro
							disponível é default login pagen generating filter. Uma página de
							login é mostrada com a ajuda desse filtro. Quando o usuário entra
							com seu login e senha, o próximo filtro é
							usernamepassowrdauthenticationfilter. Dentro desse filtro tem um
							método chamado attempt authentication. A responsabilidade desse
							filtro é extrair o username e password da requisicao HTTP. Com o
							username e password vai formar um
							usernenamepasswordauthenticationtoken. A classe tem uma interface
							do authentication(que guarda a senha e o login passo 2). Depois
							disso, vai para o authentication manager que também é uma
							interface. Dentro do spring temos a classe providerManager que é
							uma implementação do authetication manager. Caso de certo o
							primeiro provedor de autenticacao, o spring não vai testar o
							segundo. No entanto, se o primeiro falhar, o gerenciador de
							autenticacao vai testar todos os provedores, até um dar certo.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default SPRINGSECURITY;
