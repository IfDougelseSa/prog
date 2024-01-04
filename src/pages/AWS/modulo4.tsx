import Sidebar from "components/Sidebar";
import { AWS_LIST } from "resources/consts";
import vpcImg from "../../assets/imgs/aws/vpc.png";
import gatewayImg from "../../assets/imgs/aws/gateway.png";
import gatewaypImg from "../../assets/imgs/aws/gatewayp.png";
import directImg from "../../assets/imgs/aws/direct.png";
import firstImg from "../../assets/imgs/aws/1.png";
import secondImg from "../../assets/imgs/aws/2.png";
import thirdImg from "../../assets/imgs/aws/3.png";
import fourthImg from "../../assets/imgs/aws/4.png";
import fifthImg from "../../assets/imgs/aws/5.png";
import sixthImg from "../../assets/imgs/aws/6.png";
import seventhImg from "../../assets/imgs/aws/7.png";
import eighthImg from "../../assets/imgs/aws/8.png";
import ninthImg from "../../assets/imgs/aws/9.png";
import tenthImg from "../../assets/imgs/aws/10.png";

const Modulo4 = () => {
	return (
		<div className="container">
			<div className="row justify-content-start">
				<div className="col-4">
					<Sidebar list={AWS_LIST} />
				</div>
				<div className="col-8 base-card">
					<h3>Módulo 4</h3>
					<h4>Objetivos de aprendizado</h4>

					<p>Neste módulo, você aprenderá a:</p>

					<li>
						<ul>Descrever os conceitos básicos de redes.</ul>
						<ul>
							Descrever a diferença entre recursos de redes públicas e privadas.
						</ul>
						<ul>
							Explicar como um gateway privado virtual funciona usando um
							cenário real.{" "}
						</ul>
						<ul>
							Explicar como uma rede privada virtual (VPN) funciona usando um
							cenário real.
						</ul>
						<ul>Descrever o benefício do AWS Direct Connect. </ul>
						<ul>Descrever o benefício das implantações híbridas. </ul>
						<ul>
							Descrever as camadas de segurança usadas em uma estratégia de TI.
						</ul>
						<ul>
							Descrever os serviços que os clientes usam para interagir com a
							rede global da AWS.
						</ul>
					</li>
					<h4>Amazon Virtual Private Cloud (Amazon VPC)</h4>
					<p>
						Rede virtual que permite isolar recursos na AWS, podendo ser público
						ou privado. Para separar os recursos públicos dos privados, criamos
						sub-redes (sub-conjuntos de endereços ips na VPC).
					</p>
					<h4>Conectividade com a AWS</h4>
					<p>
						VPC é basicamente sua rede privada na AWS. Com um VPC é possível
						definir endereços de IPS privados para os recursos na AWS. É
						necessário criar sub-redes para agrupar logicamente os recursos em
						subcojuntos da faixa de IPS da VPC. Por padrão as VPC impedem
						qualquer tipo de comunicação com a redes externas, mas em algumas
						VPCS, podemos querer conectivdade com a internet para recursos
						voltado ao público, como um servidor web. Em outras VPCS, podemos
						permitir somente quem ingressou na rede corporativa possa acessar
						certos recursos (como um aplicação interna do RH ou banco de dados
						da empresa).
					</p>
					<p>
						Para o tráfego público poder acessar a VPC é necessário um Gateway
						de internet (uma porta) que funciona como uma porta de entrada
						aberta ao público. Sem o Gateway de internet que é uma porta, não é
						possível alcançar os recursos da VPC.
					</p>
					<p>
						VPC com recursos privados internos. Para isso, utilizamos um Gateway
						privado que so vai deixar as pessoas entrarem se vierem de uma rede
						aprovada e não da internet. Essa porta privada é chamada de Gateway
						privado virtual que possibilita criar uma conexão de VPN entre a VPC
						e uma rede privada (como um data center onpremisses ou uma rede
						corporativa interna). Seria como uma rota de ônibus particular que
						busca na frente das nossas casas para a cafeteria. Para conseguir
						fazer acesso aos recursos é necessário digitar uma senha, com isso,
						vamos ter acesso a essa rota privada e acessar os recursos, anexando
						um Gateway privado virtual a VPC. Mesmo assim, apesar da rota ser
						privada, ela usa as vias públicas, sendo impactada caso haja
						engarrafamento. Isso acontece porque a VPN utiliza a infraestrutura
						da internet comum, compartilhada com os usuários da mesma internet.
					</p>
					<p>
						Conexão dedicada com AWS privada. Tem a menor latência possível e
						maior segurança. Para conseguir isso, basta usar o AWS direct
						connect. Com ele, criamos uma conexão de fibra dedicada entre nosso
						data center e a infraestrutura da AWS. Ajuda com problemas de
						conformidade e possiveis bandas de rede.
					</p>
					<p>
						Uma VPC pode ter diversos tipos de gateways anexados para se
						conectar com diversos recursos tudo na mesma VPC, mas em sub-redes
						diferentes.
					</p>

					<img src={vpcImg} alt="vpc img" className="img-fluid" />

					<h4>Amazon Virtual Private Cloud (Amazon VPC)</h4>
					<p>
						Imagine os milhões de clientes que usam os serviços AWS. Imagine
						também os milhões de recursos que esses clientes criaram, como as
						instâncias do Amazon EC2. Sem limites para todos esses recursos, o
						tráfego de rede fluiria entre eles sem restrições. Um serviço de
						rede que você pode usar para definir limites para seus recursos AWS
						é o Amazon Virtual Private Cloud (Amazon
						VPC)https://aws.amazon.com/vpc/. O Amazon VPC permite que você
						provisione uma seção isolada da nuvem AWS. Nessa seção isolada, você
						pode executar os recursos em uma rede virtual que definir. Em uma
						Virtual Private Cloud (VPC), você pode organizar seus recursos em
						sub-redes. Uma sub-rede é uma seção de uma VPC que pode conter
						recursos como instâncias do Amazon EC2.
					</p>

					<h4>Gateway de internet</h4>
					<p>
						Para permitir que o tráfego público da internet acesse sua VPC, é
						preciso anexar um gateway de internet à VPC.
					</p>

					<img src={gatewayImg} alt="gateway img" className="img-fluid" />

					<p>
						Um gateway da internet é uma conexão entre uma VPC e a internet.
						Você pode pensar em um gateway da internet como sendo semelhante a
						uma porta que os clientes usam para entrar na cafeteria. Sem um
						gateway da internet, ninguém pode acessar os recursos em sua VPC.
					</p>

					<h3>E se você tiver uma VPC apenas com recursos privados?</h3>
					<h4>Gateway privado virtual</h4>
					<p>
						Para acessar recursos privados em uma VPC, use um gateway privado
						virtual. Veja um exemplo de como um gateway privado virtual
						funciona. Você pode pensar na internet como o caminho entre sua casa
						e a cafeteria. Suponha que você está viajando com um guarda-costas
						para proteção. Você ainda usa o mesmo caminho que outros clientes,
						mas com uma camada extra de proteção. O guarda-costas é como uma
						conexão de rede privada virtual (VPN) que criptografa (ou protege)
						seu tráfego de internet de todas as outras solicitações ao redor. O
						gateway privado virtual é o componente que permite que o tráfego
						protegido da internet ingresse na VPC. Mesmo que sua conexão com a
						cafeteria tenha proteção extra, os engarrafamentos são possíveis
						porque você usa o mesmo caminho que outros clientes.{" "}
					</p>
					<img src={gatewaypImg} alt="vpc img" className="img-fluid" />

					<p>
						Um gateway privado virtual permite estabelecer uma conexão VPN (rede
						privada virtual) entre a VPC e uma rede privada, como um data center
						on-premises ou uma rede corporativa interna. Um gateway privado
						virtual permitirá o tráfego na VPC somente se ele for proveniente de
						uma rede aprovada.
					</p>

					<h4>AWS Direct Connect</h4>
					<p>
						O AWS Direct Connect(opens in a new tab) é um serviço que permite
						estabelecer uma conexão privada dedicada entre seu data center e uma
						VPC. Suponha que haja um prédio com um corredor que o liga
						diretamente à cafeteria. Somente os moradores do prédio podem passar
						por esse corredor. Esse corredor privado estabelece o mesmo tipo de
						conexão dedicada que o AWS Direct Connect. Os moradores conseguem
						entrar na cafeteria sem precisar usar a estrada pública
						compartilhada com outros clientes.{" "}
					</p>

					<img src={directImg} alt="direct img" className="img-fluid" />

					<p>
						A conexão privada do AWS Direct Connect ajuda a reduzir os custos de
						rede e a aumentar a quantidade de largura de banda que pode trafegar
						pela rede.
					</p>

					<h4>Sub-redes e listas de controle de acesso à rede</h4>
					<p>
						A entrada de cada pacote na rede é verificada por uma lista de
						controle de acesso à rede (ACL de rede). Essa verificação autorizará
						a entrada ou a saída do pacote de acordo com sua origem e de como
						ele está tentando se comunicar. As ACLS de rede são como oficiais de
						controle de passaporte. Se você estiver na lista, vai poder passar,
						mas se não estiver na lista ou estiver explicitamente em uma lista
						de bloqueios, não vai ser possível passsar. As ACLS de rede
						verificam os tráfego que entra e sai delas. Só porque ele foi
						autorizado a entrar, não significa que ele poderá sair. Uma ACL de
						rede só consegue avaliar um pacote quando ele entra ou sai de uma
						sub-rede, ele não regula quais pacote irão chegar em uma instância
						EC2 específica. Lembre-se que podemos ter várias instâncias EC2 em
						uma mesma subrede, que podem ter necessidades de segurança
						diferentes, como quais portas abrir para recebimento de pacote e de
						quais origem esses pacotes podem vir. Por isso, é necessário que
						tenha segurança de rede em nível de instância também. Para isso,
						temos o grupo de segurança. Todas as instâncias do EC2
						obrigatoriamente estarão dentro de um grupo de segurança. Um novo
						grupo de segurança por padrão não permite que tráfego externo chegue
						na instância por segurança. Todas as portas estão bloqueadas e todos
						os endereços de IPS de origem também. Podemos alterar os grupos de
						segurança para aceitar trafegos necessários e específicos. Como no
						caso de um site, podemos aceitar o protocolo HTTPS, mas não outros
						tipos de tráfegos, como solicitacão de administração ou manutenção
						remota ao servidor.
					</p>
					<p>
						Se as ACLS de redes são como alguém que verifica os passaportes, o
						grupo de segurança é como um porterio de um prédio. Quando alguém
						toca o interfone para entrar, o porteiro verifica uma lista e libera
						caso esteja na lista, no entanto, quando a pessoa sair, o porteiro
						não vai fazer outra verificação, ou seja, por padrão todo tráfego
						pode sair.
					</p>
					<p>
						A principal diferença do grupo de segurançå e o ACL de rede é que o
						grupo de segurança é Stateful (ele se lembra de quem etá saindo). A
						ACL de rede é Stateless (não se lembra de quem está saindo e faz uma
						nova verificação).
					</p>

					<p>
						Para saber mais sobre a função das sub-redes em uma VPC, veja o
						exemplo da cafeteria a seguir. Primeiro, os clientes fazem os
						pedidos ao operador de caixa. O operador de caixa, em seguida, passa
						os pedidos para o barista. Esse processo permite que a fila prossiga
						sem problemas à medida que mais clientes entram. Suponha que alguns
						clientes tentem pular a fila do caixa e fazer os pedidos diretamente
						ao barista. Isso interrompe o fluxo de tráfego e faz com que os
						clientes acessem uma parte da cafeteria que é restrita a eles.
					</p>
					<img src={firstImg} alt="first img" className="img-fluid" />
					<p>
						Para corrigir isso, os proprietários da cafeteria dividem a área do
						balcão colocando o operador de caixa e o barista em estações de
						trabalho separadas. A estação de trabalho do operador de caixa é
						voltada para o público e projetada para receber clientes. A área do
						barista é privada. O barista ainda pode receber pedidos do operador
						de caixa, mas não diretamente dos clientes.
					</p>
					<img src={secondImg} alt="second img" className="img-fluid" />
					<p>
						Isso é semelhante à forma como você pode usar os serviços de redes
						da AWS para isolar recursos e determinar exatamente como o tráfego
						de rede flui. Na cafeteria, você pode pensar na área do balcão como
						uma VPC. A área do balcão divide-se em duas áreas separadas para a
						estação de trabalho do operador de caixa e para a estação de
						trabalho do barista. Em uma VPC, sub-redes são áreas separadas
						usadas para agrupar recursos.
					</p>

					<h4>Sub-redes</h4>
					<p>
						Uma sub-rede é uma seção de uma VPC na qual você pode agrupar
						recursos com base em necessidades operacionais ou de segurança. As
						sub-redes podem ser públicas ou privadas.
					</p>
					<p>
						Sub-redes públicas contêm recursos que precisam ser acessíveis ao
						público, como o site de uma loja on-line. As sub-redes privadas
						contêm recursos que devem ser acessíveis apenas pela sua rede
						privada, como um banco de dados que contém informações pessoais dos
						clientes e históricos de pedidos. Em uma VPC, as sub-redes podem se
						comunicar entre si. Por exemplo, um aplicativo que envolve
						instâncias do Amazon EC2 em uma sub-rede pública que se comunicam
						com bancos de dados localizados em uma sub-rede privada.
					</p>
					<img src={thirdImg} alt="third img" className="img-fluid" />

					<h4>Tráfego de rede em uma VPC</h4>
					<p>
						Quando um cliente solicita dados de um aplicativo hospedado na nuvem
						AWS, essa solicitação é enviada como um pacote. Um pacote é uma
						unidade de dados enviada pela internet ou por uma rede. Ele entra em
						uma VPC por um gateway de internet. Antes de um pacote poder entrar
						em uma sub-rede ou sair de uma sub-rede, ele verifica se há
						permissões. Essas permissões indicam quem enviou o pacote e como ele
						tenta se comunicar com os recursos em uma sub-rede. O componente da
						VPC que verifica as permissões de pacotes das sub-redes é uma lista
						de controle de acesso (ACL) de rede(opens in a new tab).
					</p>
					<h4>ACLs de rede</h4>
					<p>
						Uma ACL de rede é um firewall virtual que controla o tráfego de
						entrada e saída no nível de sub-rede. Por exemplo, saia da cafeteria
						e imagine que você está em um aeroporto. No aeroporto, os viajantes
						estão tentando entrar em outro país. Você pode pensar nos viajantes
						como pacotes e no oficial de controle de passaportes como uma ACL de
						rede. O oficial de controle de passaportes verifica as credenciais
						dos viajantes quando entram e saem do país. Se um viajante estiver
						em uma lista aprovada, ele poderá passar. No entanto, se ele não
						estiver na lista aprovada ou estiver explicitamente em uma lista de
						viajantes proibidos, ele não poderá entrar.
					</p>
					<p>
						Cada conta AWS tem uma ACL de rede-padrão. Ao configurar sua VPC,
						você pode usar a ACL de rede comum da sua conta ou criar ACLs de
						rede personalizadas. Por padrão, a ACL-padrão de rede da conta
						permite todo o tráfego de entrada e saída, mas você pode adicionar
						suas regras. Para ACLs de rede personalizadas, todo o tráfego de
						entrada e saída é negado até que você adicione regras para
						especificar qual tráfego permitir. Além disso, todas as ACLs de rede
						têm uma regra de negação explícita. Essa regra garante que, se um
						pacote não corresponder a nenhuma das outras regras na lista, ele
						será negado.{" "}
					</p>

					<img src={fourthImg} alt="fourth img" className="img-fluid" />

					<h4>Filtragem de pacotes stateless</h4>
					<p>
						As ACLs de rede executam a filtragem de pacotes stateless. Elas não
						se lembram de nada e verificam os pacotes que atravessam a fronteira
						da sub-rede em todos os sentidos: entrada e saída. Lembre-se do
						exemplo anterior de um viajante que quer entrar em outro país. Isso
						se parece com o envio de uma solicitação de uma instância do Amazon
						EC2 para a internet. Quando a resposta de pacote da solicitação
						volta para a sub-rede, a ACL de rede não se lembra da solicitação
						anterior. A ACL de rede verifica a resposta do pacote em relação à
						lista de regras para determinar se permite ou nega.
					</p>

					<img src={fifthImg} alt="fifth img" className="img-fluid" />
					<p>
						Depois que um pacote entra em uma sub-rede, é necessário verificar
						as permissões dele nos recursos da sub-rede, como as instâncias do
						Amazon EC2. O componente de VPC que verifica as permissões de pacote
						para uma instância do Amazon EC2 é um grupo de segurança(opens in a
						new tab).
					</p>

					<h4>Grupos de segurança</h4>
					<p>
						Um grupo de segurança é um firewall virtual que controla o tráfego
						de entrada e saída de uma instância do Amazon EC2.
					</p>

					<p>
						Por padrão, um grupo de segurança nega todo o tráfego de entrada e
						permite todo o tráfego de saída. Você pode adicionar regras
						personalizadas para configurar o tráfego que será permitido Neste
						exemplo, suponha que você esteja em um prédio com um porteiro que
						recebe as visitas no lobby. Você pode pensar nas visitas como
						pacotes e no porteiro como um grupo de segurança. À medida que as
						visitas chegam, o porteiro verifica uma lista para garantir que eles
						podem entrar no edifício. No entanto, o porteiro não verifica a
						lista novamente quando as visitas saem do edifício Se você tiver
						várias instâncias do Amazon EC2 na mesma VPC, poderá associá-las ao
						mesmo grupo de segurança ou usar grupos de segurança diferentes para
						cada instância.{" "}
					</p>

					<img src={sixthImg} alt="sixth img" className="img-fluid" />

					<h4>Filtragem de pacotes stateful</h4>
					<p>
						Os grupos de segurança fazem a filtragem de pacotes stateful. Eles
						se lembram de decisões anteriores tomadas para pacotes recebidos.
						Considere o mesmo exemplo de envio de uma solicitação de uma
						instância do Amazon EC2 para a internet. Quando a resposta de pacote
						da solicitação retorna para a instância, o grupo de segurança
						lembra-se da solicitação anterior. O grupo de segurança permite que
						a resposta prossiga, independentemente das regras do grupo de
						segurança de entrada.
					</p>
					<img src={seventhImg} alt="seventh img" className="img-fluid" />
					<p>
						Com as ACLs de rede e os grupos de segurança, você pode configurar
						regras personalizadas para o tráfego na sua VPC. Conforme você sabe
						mais sobre a segurança e a rede da AWS, entenda as diferenças entre
						ACLs de rede e grupos de segurança.
					</p>

					<img src={eighthImg} alt="eight img" className="img-fluid" />

					<h4>Redes Globais</h4>
					<p>
						Amazon Route 53: serviço altamente disponível e dimensionavel de
						nome de domínio ou DNS. O que faz a magia de traduzir o nome do
						website para endereços IPS que os computadores usam para se
						comunicarem. Além disso, o Route 53 pode direcionar o tráfego para
						diferentes endpoints por meio de políticas de roteamento como:
						Roteamento baseado em latência, DNS de geolocalização, Roteamento de
						geoproximidade e Pesos. O Route 53 poder ser usado para registrar e
						comprar nomes de domínios diretamente na AWS.
					</p>
					<p>Amazon CloudFront</p>
					<p>
						Locais de borda: aproximam os clientes da suas aplicações e parte
						que permite isso é o CDN (Rede de entrega de conteúdo de borda aos
						usuários com base em sua localização geográfica)
					</p>

					<h4>Sistema de nomes de domínio (DNS)</h4>
					<p>
						Suponha que a AnyCompany tenha um site hospedado na nuvem AWS. Os
						clientes digitam o endereço da web no navegador e podem acessar o
						site. Isso acontece devido à resolução do sistema de nomes de
						domínio (DNS). Na resolução de DNS, o resolvedor DNS do cliente se
						comunica com um servidor DNS. Pense no DNS como a lista telefônica
						da internet. A resolução de DNS é o processo de conversão de um nome
						de domínio para um endereço IP.
					</p>
					<img src={ninthImg} alt="ninth img" className="img-fluid" />
					<p>
						Por exemplo, suponha que você deseja acessar o site da AnyCompany. 1
						1 Quando você digita o nome de domínio no navegador, essa
						solicitação é enviada a um resolvedor de DNS do cliente. 2 2 O
						resolvedor de DNS do cliente solicita ao servidor DNS da empresa o
						endereço IP que corresponde ao site da AnyCompany. 3 3 O servidor
						DNS da empresa responde com o endereço IP para o site da AnyCompany,
						192.0.2.0.
					</p>

					<h4>Amazon Route 53</h4>
					<p>
						O Amazon Route 53(opens in a new tab) é um serviço da web de DNS.
						Oferece aos desenvolvedores e empresas uma maneira confiável de
						rotear os usuários finais para aplicativos da internet hospedados na
						AWS. O Amazon Route 53 conecta solicitações de usuários à
						infraestrutura em execução na AWS (como instâncias do Amazon EC2 e
						balanceadores de carga). Ele pode direcionar os usuários para a
						infraestrutura fora da AWS. Outro recurso do Route 53 é a capacidade
						de gerenciar os registros DNS para nomes de domínio. Você pode
						registrar novos nomes de domínio diretamente no Route 53. Você
						também pode transferir registros DNS para nomes de domínio
						existentes gerenciados por outras empresas de registro de domínio.
						Isso permite que você gerencie todos os seus nomes de domínio em um
						único local. No módulo anterior, você conheceu o Amazon CloudFront,
						um serviço de entrega de conteúdo. O exemplo a seguir descreve como
						o Route 53 e o Amazon CloudFront trabalham juntos para entregar
						conteúdo aos clientes.
					</p>

					<h4>
						Exemplo: como o Amazon Route 53 e o Amazon CloudFront entregam
						conteúdo
					</h4>

					<img src={tenthImg} alt="tenth img" className="img-fluid" />

					<p>
						Suponha que a aplicação da AnyCompany esteja em execução em várias
						instâncias do Amazon EC2. Essas instâncias estão em um grupo do Auto
						Scaling que é anexado a um Application Load Balancer. 1 1 Um cliente
						solicita dados da aplicação acessando o site da AnyCompany. 2 2 O
						Amazon Route 53 usa a resolução de DNS para identificar o endereço
						IP correspondente da AnyCompany.com, 192.0.2.0. Essas informações
						são enviadas de volta para o cliente. 3 3 A solicitação do cliente é
						enviada para o local de borda mais próximo por intermédio do Amazon
						CloudFront. 4 4 O Amazon CloudFront se conecta ao Application Load
						Balancer, que envia o pacote de entrada para uma instância do Amazon
						EC2.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Modulo4;
