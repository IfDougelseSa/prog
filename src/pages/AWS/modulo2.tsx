import Sidebar from "components/Sidebar";
import { AWS_LIST } from "resources/consts";

const Modulo2 = () => {
	return (
		<div className="container">
			<div className="row justify-content-start">
				<div className="col-4">
					<Sidebar list={AWS_LIST} />
				</div>
				<div className="col-8 base-card">
					<h3>Módulo 2</h3>
					<h4>Objetivos de aprendizado</h4>
					<ul>
						<li>Descrever os benefícios do Amazon EC2 em um nível básico.</li>
						<li>
							Identificar os diferentes tipos de instâncias do Amazon EC2.
						</li>
						<li>
							Diferenciar entre as várias opções de cobrança do Amazon EC2.
						</li>
						<li>Resumir os benefícios do Amazon EC2 Auto Scaling.</li>
						<li>Resumir os benefícios do Elastic Load Balancing.</li>
						<li>Dar um exemplo dos usos do Elastic Load Balancing.</li>
						<li>
							Resumir as diferenças entre o Amazon Simple Notification Service
							(Amazon SNS) e o Amazon Simple Queue Service (Amazon SQS).
						</li>
						<li>Resumir outras opções de computação da AWS.</li>
					</ul>
					<p>EC2 - Serviços para acessar os servidores virtuais.</p>
					<p>
						Os servidores da Amazon EC2, já estão prontos para serem utilizados.
						A AWS ja comprou os servidores, protegeu o datacenter, organizou o
						rack, instalou os servidores, sendo assim, estão prontos para uso.
						Com isso, não é necessário comprar o servidor, saber a quantidade de
						servidores necessários, proteger e instalar os mesmo.
					</p>
					<p>Alocação Múltipla - Compartilhar hardware subjacente.</p>
					<h4>Amazon Elastic Compute Cloud (Amazon EC2)</h4>
					<p>
						O Amazon Elastic Compute Cloud (Amazon EC2)(opens in a new tab)
						fornece capacidade computacional segura e redimensionável na nuvem
						como instâncias do Amazon EC2. Imagine que você é responsável pela
						arquitetura dos recursos de sua empresa e precisa dar suporte a
						novos sites. Com os recursos on-premises tradicionais, você precisa
						fazer o seguinte:
					</p>
					<ul>
						<li>Gastar dinheiro antecipadamente para comprar o hardware.</li>
						<li>Aguardar até que os servidores sejam entregues para você.</li>
						<li>Instalar os servidores em seu data center físico.</li>
						<li>Fazer todas as configurações necessárias.</li>
					</ul>

					<p>
						Em comparação, com uma instância do Amazon EC2, você pode usar um
						servidor virtual para executar aplicações na nuvem AWS.
					</p>

					<ul>
						<li>
							Você pode provisionar e iniciar uma instância do Amazon EC2 em
							minutos.
						</li>
						<li>
							Você pode parar de usar a instância quando terminar de executar
							uma carga de trabalho.
						</li>
						<li>
							Você paga apenas pelo tempo de computação em que uma instância
							está em execução, não quando ela é interrompida ou terminada.
						</li>
						<li>
							Você pode economizar custos pagando apenas pela capacidade do
							servidor necessária ou desejada.
						</li>
					</ul>
					<h4>Tipos de instâncias do Amazon EC2</h4>
					<h5>Família de instâncias</h5>
					<ul>
						<li>Uso geral</li>
						<li>Otimizada para computação</li>
						<li>Otimizada para memória</li>
						<li>Computação acelerada</li>
						<p>Otimizada para armazenamento</p>
					</ul>
					<p>
						Os tipos de instâncias do Amazon EC2(opens in a new tab) são
						otimizados para tarefas diferentes. Ao selecionar um tipo de
						instância, considere as necessidades específicas de suas cargas de
						trabalho e suas aplicações. Isso pode incluir requisitos para
						recursos de computação, memória ou armazenamento.
					</p>
					<ul>
						<li>
							<p>
								As instâncias de uso geral equilibram os recursos de computação,
								memória e rede. Você pode usá-las para diversas cargas de
								trabalho, como:
							</p>
							<ul>
								<li>servidores de aplicações</li>
								<li>servidores de jogos</li>
								<li>servidores de back-end para aplicações empresariais</li>
								<li>bancos de dados pequenos e médios</li>
							</ul>
							<p>
								Suponha que uma aplicação precise de recursos de computação, de
								memória e de rede no mesmo nível. Você pode executar esse
								aplicativo em uma instância de uso geral porque ele não precisa
								de otimização em nenhuma área de recurso único.
							</p>
						</li>
						<li>
							Otimizada para computação <br />
							As instâncias otimizadas para computação são ideais para
							aplicações de computação que usam processadores de alto
							desempenho. Assim como as instâncias de uso geral, você pode usar
							as instâncias otimizadas para computação para cargas de trabalho,
							como servidores da web, de aplicações e de jogos. No entanto, a
							diferença é que as aplicações otimizadas para computação são
							ideais para servidores web de alto desempenho, servidores de
							aplicações de computação intensiva e servidores de jogos
							dedicados. Você também pode usar instâncias otimizadas para
							computação para cargas de trabalho de processamento em lote, com o
							processamento de muitas transações em um único grupo.
						</li>
						<li>
							Otimizada para memória <br /> As instâncias otimizadas para
							memória têm desempenho rápido para cargas de trabalho que
							processam grandes conjuntos de dados na memória. Na computação, a
							memória é uma área de armazenamento temporário. Ela contém todos
							os dados e instruções de que uma unidade central de processamento
							(CPU) precisa para conseguir realizar ações. Antes que um programa
							de computador ou aplicativo possa ser executado, ele é carregado
							do armazenamento para a memória. Esse processo de pré-carregamento
							dá à CPU acesso direto ao programa de computador. Suponha que uma
							carga de trabalho exige o pré-carregamento de muitos dados antes
							de executar uma aplicação. Esse cenário pode ser de um banco de
							dados de alto desempenho ou uma carga de trabalho que envolva a
							execução de processamento em tempo real de uma grande quantidade
							de dados não estruturados. Nesses tipos de casos de uso, considere
							usar uma instância otimizada para memória. As instâncias
							otimizadas para memória permitem que você execute cargas de
							trabalho com altas necessidades de memória e tenha um ótimo
							desempenho.
						</li>
						<li>
							Computação acelerada <br /> As instâncias de computação acelerada
							usam aceleradoras de hardware, ou coprocessadores, para executar
							algumas funções de maneira mais eficiente do que é possível em um
							software executado em CPUs. Exemplos dessas funções são cálculos
							de números com vírgula flutuante, processamento de gráficos e
							correspondência de padrões de dados. Na computação, uma
							aceleradora de hardware é um componente que agiliza o
							processamento de dados. As instâncias de computação acelerada são
							ideais para cargas de trabalho, como aplicativos gráficos e
							streaming de jogos e de aplicativos.
						</li>
						<li>
							Otimizada para armazenamento <br />
							As instâncias otimizadas para armazenamento são projetadas para
							cargas de trabalho que exigem alto acesso sequencial de leitura e
							gravação a grandes conjuntos de dados no armazenamento local.
							Exemplos de cargas de trabalho adequadas para as instâncias
							otimizadas para armazenamento são sistemas de arquivos
							distribuídos, aplicações de data warehouse e sistemas de
							processamento de transação on-line (OLTP) de alta frequência. Na
							computação, o termo operações de entrada/saída por segundo (IOPS)
							é uma métrica que mensura o desempenho de um dispositivo de
							armazenamento. Ela indica quantas operações diferentes de entrada
							ou saída um dispositivo pode executar em um segundo. As instâncias
							otimizadas para armazenamento foram projetadas para fornecer
							dezenas de milhares de IOPS aleatórias e de baixa latência para
							aplicativos. Imagine as operações de entrada como dados colocados
							em um sistema, como registros inseridos em um banco de dados. Uma
							operação de saída são dados gerados por um servidor. Um exemplo de
							saída pode ser a análise realizada nos registros em um banco de
							dados. Se você tiver um aplicativo com alto requisito de IOPS, uma
							instância otimizada para armazenamento poderá fornecer melhor
							desempenho em relação a outros tipos de instâncias não otimizados
							para esse tipo de caso de uso.
						</li>
					</ul>
					<h4>Definição de preços do Amazon EC2</h4>
					<p>
						Com o Amazon EC2, você paga apenas pelo tempo de computação que
						usar. O Amazon EC2 oferece diversas opções de preço para diferentes
						casos de uso. Por exemplo, se o seu caso de uso tolerar
						interrupções, você poderá economizar com as instâncias spot. Você
						também pode economizar assumindo um compromisso antecipadamente e
						bloqueando um nível mínimo de uso com instâncias reservadas. Para
						saber mais sobre a definição de preço do Amazon EC2, selecione cada
						uma das cinco categorias abaixo.
					</p>
					<ul>
						<li>
							Sob demanda - Instâncias sob demanda são ideais para cargas de
							trabalho irregulares de curto prazo que não podem ser
							interrompidas. Custos antecipados ou contratos mínimos não se
							aplicam. As instâncias são executadas continuamente até que sejam
							interrompidas, e você paga apenas pelo tempo de computação usado.
							Exemplos de casos de uso para instâncias sob demanda são
							desenvolvimento e teste de aplicações e execução de aplicações com
							padrões de uso imprevisíveis. As instâncias sob demanda não são
							recomendadas para cargas de trabalho que duram um ano ou mais,
							porque essas cargas de trabalho podem ser mais econômicas usando
							instâncias reservadas.
						</li>
						<li>
							Instâncias reservadas - As instâncias reservadas são um desconto
							de cobrança aplicado ao uso de instâncias sob demanda na sua
							conta. Há dois tipos disponíveis de instância reservada:
							<ul>
								<li>Standard Reserved Instances</li>
								<li>Instâncias reservadas conversíveis</li>
							</ul>
							<p>
								Você pode comprar Standard Reserved Instances e instâncias
								reservadas conversíveis por um período de vigência de 1 ou 3
								anos. Você terá maior economia de custos com a opção de três
								anos. Standard Reserved Instances: essa opção será adequada se
								você souber o tipo e o tamanho da instância do EC2 de que
								precisa para suas aplicações com estado pronto e em qual Região
								da AWS planeja executá-las. As instâncias reservadas exigem que
								você declare as seguintes qualificações:
							</p>
							<ul>
								<li>Tipo e tamanho da instância: Por exemplo, m5.xlarge</li>
								<li>
									Descrição da plataforma (sistema operacional): Por exemplo,
									Microsoft Windows Server ou Red Hat Enterprise Linux
								</li>
								<li>Tenancy: Tenancy-padrão ou dedicado</li>
							</ul>
							<p>
								Você tem a opção de especificar uma Zona de Disponibilidade para
								as instâncias reservadas do EC2. Se você usar essa
								especificação, vai obter a reserva de capacidade do EC2. Isso
								garante que a quantidade desejada de instâncias do EC2 estará
								disponível quando você precisar delas. Instâncias reservadas
								conversíveis: se você precisar executar suas instâncias do EC2
								em diferentes Zonas de Disponibilidade ou diferentes tipos de
								instância, as instâncias reservadas conversíveis poderão ser
								adequadas para você. Observação: você negocia com um desconto
								maior quando precisa de flexibilidade para executar suas
								instâncias do EC2. No final de um período de vigência de
								instância reservada, você pode continuar usando a instância do
								Amazon EC2 sem interrupção. No entanto, são cobrados os preços
								de instâncias sob demanda até que um dos procedimentos a seguir
								seja feito:
							</p>
							<ul>
								<li>Terminar a instância.</li>
								<li>
									Adquirir uma nova instância reservada que corresponda aos
									atributos da instância (tamanho e família de instância,
									Região, plataforma e tenancy).
								</li>
							</ul>
						</li>
						<li>
							Savings Plans da Instância do EC2 - A AWS oferece Savings Plans
							para alguns serviços computacionais, incluindo o Amazon EC2. Os
							Savings Plans reduzem o custo da instância do EC2 quando você
							assume um compromisso de gasto por hora com uma família de
							instância e uma Região por um período de um ou três anos. Esse
							compromisso com o período de vigência resulta em uma economia de
							72% em comparação com as taxas sob demanda. Qualquer uso até o
							compromisso é cobrado de acordo com o preço de Savings Plans com
							desconto (por exemplo, USD 10 por hora). Qualquer uso além do
							compromisso é cobrado de acordo com as taxas normais de instâncias
							sob demanda. Os Savings Plans de instância do EC2 serão uma boa
							opção se você precisar de flexibilidade no uso do Amazon EC2
							durante o período de vigência do compromisso. Você tem o benefício
							de reduzir o custo de execução de qualquer instância do EC2 em uma
							família na Região escolhida (por exemplo, uso de M5 no Norte da
							Virgínia), independentemente da Zona de Disponibilidade, tamanho
							da instância, sistema operacional ou tenancy. A economia com os
							Savings Plans da instância do EC2 é semelhante à economia das
							Standard Reserved Instances. Ao contrário das instâncias
							reservadas, no entanto, você não precisa especificar
							antecipadamente qual tipo e tamanho da instância do EC2 (por
							exemplo, m5.xlarge), sistema operacional e tenancy para receber o
							desconto. Além disso, você não precisa se comprometer com um
							determinado número de instâncias do EC2 durante um período de
							vigência de um ou três anos. Além disso, os Savings Plans da
							instância do EC2 não incluem uma opção de reserva de capacidade do
							EC2. Posteriormente neste curso, você conhecerá o AWS Cost
							Explorer, que pode ser usado para visualizar, entender e gerenciar
							seus custos e uso da AWS ao longo do tempo. Se você está
							considerando as opções dos Savings Plans, use o AWS Cost Explorer
							para analisar seu uso do Amazon EC2 nos últimos 7, 30 ou 60 dias.
							O AWS Cost Explorer também dá recomendações personalizadas para
							Savings Plans. Essas recomendações calculam o quanto você pode
							economizar mensalmente com o Amazon EC2, com base no uso anterior
							do Amazon EC2 e no valor do compromisso por hora em um Savings
							Plan de um ou três anos.
						</li>
						<li>
							Instâncias spot - As instâncias spot são ideais para cargas de
							trabalho com horários de início e término flexíveis ou que toleram
							interrupções. As instâncias spot usam a capacidade de computação
							não utilizada do Amazon EC2 e têm até 90% de desconto em relação
							aos preços das instâncias sob demanda. Suponha que você tenha um
							trabalho de processamento em segundo plano que pode ser iniciado e
							interrompido conforme for necessário (por exemplo, para uma
							pesquisa de cliente). Você deseja iniciar e interromper o trabalho
							de processamento sem afetar as operações gerais de seus negócios.
							Se você fizer uma solicitação spot e a capacidade do Amazon EC2
							estiver disponível, a instância spot será iniciada. No entanto, se
							você fizer uma solicitação spot e a capacidade do Amazon EC2
							estiver indisponível, a solicitação não terá sucesso até que a
							capacidade seja disponibilizada. A capacidade indisponível pode
							atrasar o início do trabalho de processamento em segundo plano. As
							instâncias spot que você iniciar poderão ser interrompidas se não
							houver mais capacidade disponível ou se a demanda por essas
							instâncias aumentar. Isso pode não representar problemas para o
							trabalho de processamento em segundo plano. No entanto, no exemplo
							anterior de desenvolvimento e teste de aplicativos, é provável que
							você queira evitar interrupções inesperadas. Portanto, escolha um
							tipo de instância do EC2 diferente que seja ideal para essas
							tarefas.
						</li>
						<li>
							Hosts dedicados - Os hosts dedicados são servidores físicos com
							capacidade de instância do Amazon EC2 totalmente dedicada ao uso
							do cliente. Você pode usar suas licenças de software por soquete,
							por núcleo ou por VM para manter a conformidade da licença. Você
							pode adquirir hosts dedicados sob demanda e reservas de hosts
							dedicados. De todas as opções do Amazon EC2 que foram abordadas,
							os hosts dedicados são os mais caros.
						</li>
					</ul>

					<h4>USO GERAL</h4>
					<p>
						Instâncias EC2 para o uso geral tem equilibrio entre computação,
						memória e rede. São utilizadas para: servidores de aplicações web,
						servidores de jogos, servidores de back-end para aplicações
						empresariais e bancos de dados pequeno e médios.
					</p>
					<h4>Instâncias otimizadas para computação</h4>
					<p>
						Ideais para aplicações que usam processadores de alto desempenho.
						Podem ser utilizadas para cargas de trabalho, como servidores web,
						de aplicações e de jogos. No entanto, são ideais para servidores web
						de alto desempenho, servidores de aplicações intensivas e servidores
						de jogos dedicados. Além disso, para cargas de trabalho de
						processamento em lote, com o processamento de muitas transações em
						um único grupo.
					</p>
					<h4>Otimizadas para memória</h4>
					<p>
						Tem desempenho rápido para cargas de trabalho que processam grandes
						conjuntos de dados na mémoria. Pode ser um banco de dados de alto
						desempenho ou uma carga de trabalho que envolva a execução de
						processamento em tempo real de uma grande quantidade de dados não
						estruturados.
					</p>
					<h4>Instâncias de computação acelerada</h4>
					<p>
						As instâncias de computação acelerada usam aceleradoras de hardware,
						ou coporcessadores, para executar algumas funções de maneira mais
						eficiente do que é possível em um software executado em CPUs.
						Exemplos: cálculos de números com vírgula flutuante, processamento
						de gráficos e correspondência de padrões de dados. Na computação uma
						aceleradora de hardware é um componente que agiliza o processamento
						de dados. São ideais para cargas de trabalho como aplicativos de
						gráficos e streaming de jogos e de aplicativos.
					</p>
					<h4>Instâncias otimizadas para armazenamento</h4>
					<p>
						São projetadas para cargas de trabalho que exigem alto acesso
						sequencial de leitura e gravação a grandes conjutos de dados no
						armazenamento local. Exemplos: sistemas de arquivos distribuídos,
						aplicações de data warehouse e sistemas de processamento de
						transação on-line de alta frequência.
					</p>

					<h4>Scaling do Amazon EC2</h4>
					<h5>Dimensionamento</h5>
					<p>
						O dimensionamento significa começar apenas com os recursos
						necessários e projetar a arquitetura para responder automaticamente
						às alterações de demanda, fazendo aumentos ou reduções de
						quantidade. Como resultado, você paga apenas pelos recursos que usa.
						Você não precisa se preocupar com a falta de capacidade de
						computação para atender às necessidades dos clientes. Se você
						quisesse que o processo de scaling acontecesse automaticamente, qual
						serviço da AWS você usaria? O serviço da AWS que fornece essa
						funcionalidade para instâncias do Amazon EC2 é o Amazon EC2 Auto
						Scaling.
					</p>
					<h4>Amazon EC2 Auto Scaling</h4>
					<p>
						Se você já tentou acessar um site que não carregava e atingiu o
						tempo limite algumas vezes, ele pode ter recebido mais solicitações
						do que conseguia atender. Essa situação é semelhante a esperar em
						uma longa fila em uma cafeteria quando há apenas um barista
						disponível para registrar os pedidos dos clientes.
					</p>
					<p>
						O Amazon EC2 Auto Scaling permite que você adicione ou remova
						automaticamente instâncias do Amazon EC2 em resposta à alteração da
						demanda da aplicação. Ao fazer auto scaling das instâncias,
						aumentando ou reduzindo a quantidade conforme a necessidade, você
						tem maior percepção de disponibilidade de aplicações. No Amazon EC2
						Auto Scaling, há duas abordagens disponíveis: scaling dinâmico e
						scaling preditivo. O scaling dinâmico responde às alterações na
						demanda. O scaling preditivo programa automaticamente o número
						correto de instâncias do Amazon EC2 com base na demanda prevista.
					</p>

					<h4>Exemplo: Amazon EC2 Auto Scaling</h4>
					<p>
						Já que na nuvem a capacidade computacional é um recurso
						programático, você pode adotar uma abordagem mais flexível para o
						problema de scaling. Ao adicionar o Amazon EC2 Auto Scaling a uma
						aplicação, você poderá adicionar novas instâncias à aplicação quando
						for necessário e terminá-las quando não for mais necessário.
					</p>

					<p>
						Suponha que você esteja se preparando para iniciar uma aplicação em
						instâncias do Amazon EC2. Ao configurar o tamanho do seu grupo do
						Auto Scaling, você pode definir o número mínimo de instâncias do
						Amazon EC2 como sendo um. Isso significa que, em qualquer momento,
						precisa haver pelo menos uma instância do Amazon EC2 em execução.
					</p>
					<p>
						Ao criar um grupo do Auto Scaling, você pode definir o número mínimo
						de instâncias do Amazon EC2. A capacidade mínima é o número de
						instâncias do Amazon EC2 que são iniciadas imediatamente após a
						criação do grupo do Auto Scaling. Neste exemplo, o grupo do Auto
						Scaling tem uma capacidade mínima de uma instância do Amazon EC2.
					</p>
					<p>
						Em seguida, você pode definir a capacidade desejada como duas
						instâncias do Amazon EC2, mesmo que a aplicação precise de um mínimo
						de uma única instância do Amazon EC2 para que seja executada.
					</p>
					<p>
						Se você não especificar o número desejado de instâncias do Amazon
						EC2 em um grupo do Auto Scaling, a capacidade desejada se tornará a
						capacidade mínima regular.
					</p>
					<p>
						A terceira configuração que você pode definir em um grupo do Auto
						Scaling é a capacidade máxima. Por exemplo, você pode configurar o
						grupo do Auto Scaling para aumentar a quantidade em resposta à
						demanda elevada, mas apenas para um máximo de quatro instâncias do
						Amazon EC2.
					</p>
					<p>
						Como o Amazon EC2 Auto Scaling usa instâncias do Amazon EC2, você
						vai pagar apenas pelas instâncias que usar, e somente quando elas
						forem usadas. Você agora tem uma arquitetura econômica que
						proporciona a melhor experiência do cliente e ao mesmo tempo reduz
						custos.
					</p>
					<h4>Elastic Load Balancing</h4>
					<p>
						O Elastic Load Balancing é o serviço da AWS que distribui
						automaticamente o tráfego de entrada de aplicações entre vários
						recursos, como instâncias do Amazon EC2.{" "}
					</p>
					<p>
						Um balanceador de carga atua como um ponto único de contato para
						todo o tráfego na web de entrada para o grupo do Auto Scaling. Isso
						significa que, à medida que você adiciona ou remove instâncias do
						Amazon EC2 em resposta à quantidade de tráfego de entrada, essas
						solicitações são direcionadas para o balanceador de carga primeiro.
						Em seguida, as solicitações se espalham por vários recursos que
						lidarão com elas. Por exemplo, se você tiver várias instâncias do
						Amazon EC2, o Elastic Load Balancing distribuirá a carga de trabalho
						entre elas para que nenhuma instância tenha que carregar a maior
						parte.
					</p>
					<p>
						Embora o Elastic Load Balancing e o Amazon EC2 Auto Scaling sejam
						serviços separados, eles trabalham juntos para que as aplicações
						executadas no Amazon EC2 tenham alto desempenho e disponibilidade.{" "}
					</p>
					<h4>Exemplo: Elastic Load Balancing</h4>
					<h5>Período de baixa demanda</h5>
					<p>
						Aqui está um exemplo de como o Elastic Load Balancing funciona.
						Suponha que alguns clientes vieram à cafeteria e estão prontos para
						fazer seus pedidos.
					</p>
					<p>
						Se apenas algumas caixas registradoras estão abertas, isso
						corresponde à demanda dos clientes que precisam do serviço. A
						cafeteria tem menos probabilidade de ter caixas registradoras
						abertas sem clientes. Nesse exemplo, você pode pensar nas caixas
						registradoras como instâncias do Amazon EC2.
					</p>
					<h5>Período de alta demanda</h5>
					<p>
						Ao longo do dia, à medida que o número de clientes aumenta, a
						cafeteria abre mais caixas registradoras para atendê-los.{" "}
					</p>
					<p>
						Além disso, um funcionário da cafeteria direciona os clientes para a
						caixa registradora mais adequada para que o número de solicitações
						possa ser distribuído uniformemente entre as caixas registradoras
						abertas. Você pode pensar nesse funcionário da cafeteria como um
						balanceador de carga.
					</p>
					<h4>Amazon Simple Notification Service (Amazon SNS)</h4>
					<p>
						O Amazon Simple Notification Service (Amazon SNS) é um serviço de
						publicação/assinatura. Usando tópicos do Amazon SNS, um editor
						publica mensagens para assinantes. Isso é semelhante à cafeteria: o
						operador de caixa entrega os pedidos ao barista que, por sua vez,
						prepara as bebidas.
					</p>
					<p>
						No Amazon SNS, os assinantes podem ser servidores da web, endereços
						de e-mail, funções do AWS Lambda ou várias outras opções.{" "}
					</p>
					<h4>Amazon Simple Queue Service (Amazon SQS)</h4>
					<p>
						O Amazon Simple Queue Service (Amazon SQS) é um serviço de
						enfileiramento de mensagens.
					</p>
					<p>
						Use o Amazon SQS para enviar, armazenar e receber mensagens entre
						componentes de software, sem perder mensagens nem precisar que
						outros serviços estejam disponíveis. No Amazon SQS, uma aplicação
						envia mensagens para uma fila. Um usuário ou serviço recupera uma
						mensagem da fila, processa-a e a apaga da fila.
					</p>
					<h4>Outros serviços de computação</h4>
					<p>Alternativas para EC2</p>
					<p>
						Sem servidor: você não pode ver ou acessar a infraestrutura
						subjacente
					</p>
					<p>
						AWS Lambda: serviço que você pode fazer uploading de código na
						função lambda. Projeto para executar código em até 15 minutos.
					</p>
					<p>
						Amazon Elastic Container Service (Amazon ECS) | Amazon Elastic
						Kubernetes Service.
					</p>
					<p>
						Ambos os serviços são ferramentes de orquestração de contêiners
						(DOCKER).
					</p>
					<p>O ECS ajuda a executar aplicações em container em escala</p>
					<p>O EKS funciona de forma semelhante com ferramentas diferentes</p>
					<p>AWS Fargate. Plataforma sem servidor para ECS ou EKS</p>
					<p>
						Depois do orquestramento é possível escolher entre o Amazon EC2 ou
						AWS Fargate
					</p>

					<h4>Computação sem servidor</h4>
					<p>
						No início deste módulo, você conheceu o Amazon EC2, um serviço que
						permite executar servidores virtuais na nuvem. Para executar
						aplicações no Amazon EC2, faça o seguinte: 1 1 Provisione as
						instâncias (servidores virtuais). 2 2 Faça upload do código. 3 3
						Continue gerenciando as instâncias enquanto a aplicação está em
						execução.
					</p>
					<p>
						O termo “sem servidor” significa que o código é executado em
						servidores, sem que você precise provisionar ou gerenciar esses
						servidores. Com a computação sem servidor, você pode se concentrar
						na inovação de novos produtos e recursos em vez de manter
						servidores. Outro benefício da computação sem servidor é a
						flexibilidade de dimensionar aplicações sem servidor
						automaticamente. A computação sem servidor pode ajustar a capacidade
						de aplicativos modificando as unidades de consumo, como taxa de
						transferência e memória. Um serviço da AWS para computação sem
						servidor é o AWS Lambda.
					</p>
					<h4>AWS Lambda</h4>
					<p>
						O AWS Lambda(opens in a new tab) é um serviço que permite a execução
						de códigos sem a necessidade de provisionar ou gerenciar servidores.
						Ao usar o AWS Lambda, você paga apenas pelo tempo de computação
						consumido. As cobranças se aplicam ao tempo em que o código fica em
						execução. Você pode executar códigos para praticamente qualquer tipo
						de aplicativo ou serviço de back-end sem a necessidade de qualquer
						gerenciamento. Por exemplo, uma função simples do Lambda é o
						redimensionamento automático de imagens com o upload feito na nuvem
						AWS. Nesse caso, a função é acionada ao fazer upload de uma nova
						imagem.
					</p>
					<h4>Como o AWS Lambda funciona</h4>
					<p>
						1 1 Você faz upload do código para o Lambda. 2 2 Você configura o
						código para ser acionado pelos eventos de uma origem como serviços
						da AWS, aplicações móveis ou endpoints HTTP. 3 3 O Lambda executa o
						código somente quando acionado. 4 4 Você paga apenas pelo tempo de
						computação que usar. No exemplo anterior de redimensionamento de
						imagens, você pagaria apenas pelo tempo de computação usado ao fazer
						upload de novas imagens. Fazer upload das imagens aciona o Lambda a
						executar o código da função de redimensionamento de imagem.
					</p>
					<h4>Contêineres</h4>
					<p>
						Os contêineres são uma maneira comum de empacotar códigos,
						configurações e dependências da aplicação em um único objeto. Você
						também pode usar contêineres para processos e fluxos de trabalho nos
						quais há requisitos essenciais de segurança, confiabilidade e
						dimensionamento.
					</p>
					<h4>Amazon Elastic Container Service (Amazon ECS)</h4>
					<p>
						O Amazon Elastic Container Service (Amazon ECS)(opens in a new tab)
						é um sistema de gerenciamento de contêineres altamente dimensionável
						e de alto desempenho que permite executar e dimensionar aplicações
						em contêineres na AWS. O Amazon ECS é compatível com os contêineres
						do Docker. O Docker(opens in a new tab) é uma plataforma de software
						que permite criar, testar e implantar aplicações rapidamente. A AWS
						é compatível com c Docker Community Edition de código aberto e do
						Docker Enterprise Edition baseado em assinatura. Com o Amazon ECS,
						você pode usar chamadas de API para iniciar e interromper
						aplicativos ativados pelo Docker.
					</p>
					<h4>Amazon Elastic Kubernetes Service (Amazon EKS)</h4>
					<p>
						O Amazon Elastic Kubernetes Service (Amazon EKS)(opens in a new tab)
						é um serviço totalmente gerenciado que você pode usar para executar
						o Kubernetes na AWS. O Kubernetes(opens in a new tab) é um software
						de código aberto que permite implantar e gerenciar aplicações em
						contêineres em grande escala. Uma grande comunidade de voluntários
						mantém o Kubernetes, e a AWS trabalha ativamente em conjunto com
						essa comunidade Kubernetes. Conforme novos recursos e
						funcionalidades são lançados para aplicativos Kubernetes, você pode
						facilmente aplicar essas atualizações aos aplicativos gerenciados
						pelo Amazon EKS.
					</p>
					<h4>AWS Fargate</h4>
					<p>
						O AWS Fargate(opens in a new tab) é um mecanismo de computação sem
						servidor para contêineres. Ele funciona com o Amazon ECS e o Amazon
						EKS. Com o AWS Fargate, você não precisa provisionar nem gerenciar
						servidores. O AWS Fargate gerencia sua infraestrutura de servidor
						para você. Você pode se concentrar em inovar e desenvolver seus
						aplicativos, pagando apenas pelos recursos necessários para executar
						os contêineres.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Modulo2;
