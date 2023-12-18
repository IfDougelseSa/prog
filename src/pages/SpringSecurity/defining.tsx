import Sidebar from "components/Sidebar";
import { SPRING_SECURITY_LIST } from "resources/consts";
import firstApproach from "../../assets/imgs/spring-security/firstApproach.png";

const Defining = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-start">
					<div className="col-4">
						<Sidebar list={SPRING_SECURITY_LIST} />
					</div>
					<div className="col-8 base-card">
						<h3>Definindo e gerenciando usuários</h3>
						<p>
							Criando usuários dentro da memória da nossa aplicação spring boot.
							Com isso, podemos usa-los durante o login da nossa aplicacao web
						</p>
						<h4>Primeira abordagem</h4>

						<img
							src={firstApproach}
							alt="First Approach img"
							className="img-fluid"
						/>

						<p>
							Não recomendada para aplicacões em producão porque as pessoas
							podem ver o usuário e senha dentro do código.
						</p>
						<p>
							Para criar vários usuários dentro da memória da nossa aplicação
							Spring, é necessário criar um Bean do tipo
							InMemoryUserDetailsManager. Essa é uma das classes que extendem a
							interface userDetailsManager.
						</p>
						<p>
							Para criar os usuários, passwords e autoridades, temos a classe
							User disponível dentro do Spring Security Framework. Alem disso,
							podemos usar o password encoder padrão, no entanto, não é uma boa
							abordadem para aplicações em produção. Depois, definimos o
							usuario, senha e autoridades e invocamos o método build.
						</p>

						<p>
							Criamos o método que retorna um InMemoryUserDetailsManager. Além
							disso, usamos o @Bean annotation, o retorno
							InMemoryUserDetailsManager vai ser convertido para um bean e
							aproveitado pelo Spring Security Framework. Primeiro importamos
							UserDetails interface seguindo da class User.
						</p>
						<p>
							Com a ajuda da User class, invocamos um método chamado
							withDefaultPasswordEncoder. O time do spring boot não tem nenhum
							plano para remover esse método, eles marcam o mesmo como
							depreciado porque é considerado insecurdo para o ambiente de
							produção. Como estamos apenas utilizando para configurar usuário
							na memória, não tem problema.
						</p>
						<p>
							Logo em seguinda, temos a User class que implementa a interface
							UserDetails. Por isso, quando instanciamos a classe user com o
							tipo UserDetails, não temos nenhum erro.
						</p>
						<p>
							Depois, configuramos o username, password e authorities. Além
							disso, invocamos o método build, que vai criar um novo objeto
							User.
						</p>
						<p>Usando essa abordagem, podemos criar diversos usuários.</p>
						<p>
							Depois que criamos o usuarios, eles são passado para o construtor
							do InMemoryUserDetailsManager, que recebe vários usuários como
							argumento. Dentro dele, temos um loop for, que vai criar os
							usuários passados e guardar dentro da memória da nossa aplicação
							Spring.
						</p>
						<p>
							Com isso, é possível deletar os usuários configurados no
							application.properties.
						</p>
						<h4>
							Exame mais profundo sobre UserDetails Interface & User class
						</h4>
						<p>
							Usando a UserDetails interface e as classes que implementam ela,
							podemos representar com detalhes o usuário, como seu username,
							password, autoridades do usuário final que podem ser guardadas
							dentro do objeto da implementação das classes do UserDetails.
						</p>
						<p>
							Os métodos presentes na interface UserDetails são: getAuthorities,
							getPassword, getUsername, isAccountNonExperied,
							isAccountnonLocked, isCredentialsNonExpired, isEnabled.
						</p>
						<p>
							O time do springsecurity, não definiram apenas esses métodos, eles
							também definiram uma implementação simples para eles. Os quais
							podemos utilizar em nossos projetos do dia a dia. Podemos escrever
							nossas próprias implementações caso as padrões não nos
							satisfazerem. As implementações estão na classe User.
						</p>
						<p>
							Na classe User temos todos os métodos sobreescritos definidos na
							interface UserDetails. Os métodos tem apenas get, não possuindo
							setters, sendo assim, podemos apenas ler os atributos da classe.
						</p>
						<p>
							UserDetails e User é utilizado quando vamos carregar os detalhes
							do usuário do sistema de armazenamento (banco de dados, memória).
							Depois que os dados são carregados do banco de dados, esses dados
							serão compartilhados com o AuthenticationProviders. Dentro dos
							authentication providers, quando a autenticacão é um sucesso,
							esses provedores de autenticação são responsáveis por transformar
							toda essa informação com o sucesso dos detalhes da autenticação
							dentro do objeto de autenticação. O Authentication é responsavel
							por sabe se a autenticacao foi um sucesso ou não, para saber isso,
							é utilizado o AuthenticaionProviders. Dentro do
							AuthenticaitonProviders, sempre lidamos com um objeto de
							autenticação. Dentro do objeto de autenticacao, armazenamos
							uusername, senha, autoridades, se a autenticacao foi um sucesso ou
							não. No entanto, os detalha da userdetails não são armazenados,
							como isAccountNonExpried, etc.. Ou seja, o authenticationProviders
							vai pegar apenas o dados necesários e converter para um objeto de
							autenticação. A interface Principal representa o nome do
							individuo, login Id, nome da entidade.
						</p>
						<p>
							Authentication é o tipo de retorno em todos os cenários quando
							tentamos determinar se a autenticação foi um sucesso ou não. Como
							dentro do AuthenticationProvider e AuthenticationManager.
						</p>

						<p>
							UserDetails é o tipo de retorno em todos os cenários quando
							tentamos carregar os dados do usuário dos sistemas de
							armazenamentos. Como dentro do UserDetailsService &
							UserDetailsManager.
						</p>
						<p>
							Authentication interfacer extends Principal que vem da Java
							library e tem apenas um mmétodo getName(). Dentro de
							authentication temos métodos como, getPrinciapl, getCrendentials,
							getAuthorities, setAuthenticaded, isAuthenticated. O último é
							usado pelo framework para saber se dado usuário está autenticado
							ou não. setAuthenticaded é usado para definir o valor d
							eisAuthenticated.
						</p>
						<p>
							Primeiro buscamos as informacões do usuario no userDetails, quando
							as informações são validadas, convertemos o objeto para
							Authentication e guardamos as informações do usuário.
						</p>

						<h4>
							Exame profundo das interfaces UserDetailsService
							UserDetailsManager
						</h4>
						<p>
							A interface UserDetailsService foi construida para os cenários
							mais comuns, que é carregar os dados especificos do usuário. Sem
							carregar os dados do usuário nos sistemas de armazenamento, não
							podemos realizar a autenticação. Essa interface possui um método
							chamado loadUserByUsername. O qual passamos apenas o username, que
							é inserido pelo usuário final. Além disso, essa interface é
							extendida por outra interface que é a UserDetailsManager. Dentro
							dessa outra interface, podemos criar usuarios, atualizar, deletar,
							mudar o password e verificar se o usuário existe. Existem algumas
							classes que implementam essas interfaces. Todo esse ecosistema vai
							ser aproveitado pelo provider authentication que é o dao
							AuthenticationProvider. Caso não queira utilizar, basta criar sua
							própria lógica e definir seu próprio AuthenticationProvider.
						</p>
						<h4>Exame profundo da implementação do UserDetailsManager classes</h4>
						<p></p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Defining;
