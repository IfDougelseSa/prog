import Sidebar from "components/Sidebar";
import { AWS_LIST } from "resources/consts";

const Modulo3 = () => {
	return (
		<div className="container">
			<div className="row justify-content-start">
				<div className="col-4">
					<Sidebar list={AWS_LIST} />
				</div>
				<div className="col-8 base-card">
					<h3>Módulo 3</h3>
					<h4>Seleção de uma Região</h4>
					<p>
						Ao determinar a Região certa para seus serviços, dados e aplicações,
						considere os quatro fatores de negócios a seguir. Para conhecer mais
						Regiões, expanda cada uma das quatro categorias a seguir.
					</p>
					<h5>Conformidade com governaça de dados e requisitos</h5>
					<p>
						Dependendo da sua empresa e localização, talvez seja necessário
						executar seus dados em áreas específicas. Por exemplo, se sua
						empresa exige que todos os dados residam dentro dos limites do Reino
						Unido, você deve escolher a Região Londres. Nem todas as empresas
						têm regulamentações de dados relacionadas a determinados locais,
						portanto, você pode precisar se concentrar nos outros três fatores.
					</p>
					<h5>Proximidade com os clientes</h5>
					<p>
						Ao selecionar uma Região próxima aos clientes, você entrega o
						conteúdo a eles com mais rapidez. Por exemplo, sua empresa está
						sediada em Washington, DC, e muitos de seus clientes residem em
						Singapura. Você pode considerar executar sua infraestrutura na
						Região Norte da Virgínia por estar perto da sede da empresa e
						executar os aplicativos a partir da Região Singapura.
					</p>
					<h5>Serviços disponíveis em uma Região</h5>
					<p>
						Às vezes, a Região mais próxima pode não ter todos os recursos que
						você deseja oferecer aos clientes. A AWS inova frequentemente ao
						criar novos serviços e expandir recursos em serviços existentes. No
						entanto, disponibilizar novos serviços em todo o mundo às vezes
						exige que a AWS desenvolva o hardware físico de cada Região por vez.
						Suponha que seus desenvolvedores queiram criar uma aplicação que use
						o Amazon Braket (plataforma de computação quântica da AWS). Neste
						curso, o Amazon Braket ainda não está disponível em todas as Regiões
						AWS em todo o mundo, por isso, os desenvolvedores precisariam
						executá-lo em uma das Regiões que já o oferece.
					</p>
					<h5>Preços</h5>
					<p>
						Suponha que você pretenda executar aplicações nos Estados Unidos e
						no Brasil. Com a estrutura tributária do Brasil, pode custar 50%
						mais caro executar a mesma carga de trabalho na Região São Paulo em
						comparação com a Região Oregon. Você aprenderá com detalhes que
						vários fatores determinam o preço, mas, por enquanto, saiba que o
						custo dos serviços pode variar entre as regiões.
					</p>

					<h4>Zonas de Disponibilidade</h4>
					<p>
						Uma Zona de Disponibilidade é um único data center ou um grupo de
						data centers em uma Região. As Zonas de Disponibilidade estão
						localizadas a dezenas de quilômetros de distância umas das outras. A
						proximidade é suficiente para haver baixa latência (tempo entre o
						momento em que o conteúdo foi solicitado e recebido) entre as Zonas
						de Disponibilidade. No entanto, se ocorrer um desastre em uma parte
						da Região, eles estarão distantes o suficiente para reduzir a chance
						de várias Zonas de Disponibilidade serem afetadas.
					</p>
					<h4>Locais de borda</h4>
					<p>
						Um local de borda é um site que o Amazon CloudFront usa para
						armazenar cópias em cache do conteúdo mais próximo dos clientes para
						uma entrega mais rápida.
					</p>
					<h4>Maneiras de interagir com os serviços da AWS</h4>
					<p>
						O console de gerenciamento da AWS é uma interface baseada na web
						para acessar e gerenciar os serviços da AWS. Você pode acessar
						rapidamente os serviços usados recentemente e pesquisar outros
						serviços por nome, palavra-chave ou acrônimo. O console inclui
						assistentes e fluxos de trabalho automatizados que podem simplificar
						o processo de conclusão de tarefas. Você também pode usar o AWS
						Console Mobile Application para executar tarefas como monitoramento
						de recursos, visualização de alarmes e acesso a informações de
						cobrança. Várias identidades podem permanecer em sessão no AWS
						Console Mobile Application ao mesmo tempo.
					</p>
					<p>
						Para economizar tempo ao fazer solicitações de API, você pode usar o
						AWS Command Line Interface (AWS CLI). O AWS CLI permite que você
						controle vários serviços AWS diretamente a partir da linha de
						comando em uma ferramenta. O AWS CLI está disponível para usuários
						no Windows, macOS e Linux. Usando a AWS CLI, você pode automatizar
						as ações que seus serviços e aplicações executam por meio de
						scripts. Por exemplo, você pode usar comandos para iniciar uma
						instância do Amazon EC2, conectar uma instância do Amazon EC2 a um
						grupo específico do Auto Scaling e muito mais.
					</p>
					<p>
						Outra opção para acessar e gerenciar serviços da AWS são os Kits de
						Desenvolvimento de Software (SDKs). Os SDKs facilitam o uso dos
						serviços AWS por uma API projetada para sua linguagem de programação
						ou plataforma. Os SDKs permitem que você use serviços da AWS com
						suas aplicações ou crie aplicações totalmente novas que serão
						executados na AWS. Para ajudar você a começar a usar SDKs, a AWS
						disponibiliza a documentação e um código de exemplo para cada
						linguagem de programação compatível. As linguagens de programação
						compatíveis são C++, Java, .NET e muito mais.
					</p>
					<h4>AWS Elastic Beanstalk</h4>
					<p>
						Com o AWS Elastic Beanstalk, você envia definições de código e
						configuração, e o Elastic Beanstalk implanta os recursos necessários
						para executar as seguintes tarefas: Ajustar capacidade Balancear
						carga Auto scaling Monitorar o health da aplicação
					</p>
					<h4>AWS CloudFormation</h4>
					<p>
						Com o AWS CloudFormation, você pode considerar sua infraestrutura
						como código. Isso significa que você pode criar um ambiente
						escrevendo linhas de código em vez de usar o console de
						gerenciamento da AWS para provisionar recursos individualmente. O
						AWS CloudFormation provisiona os recursos de maneira segura e
						repetível, permitindo que você crie frequentemente a infraestrutura
						e as aplicações sem precisar executar ações manuais. Ele determina
						quais são as operações mais adequadas para gerenciar sua pilha e
						reverte as alterações automaticamente se detecta erros.
					</p>

					<h4>AWS CloudFront</h4>
					<p>Rede de entregadores de serviços.</p>
				</div>
			</div>
		</div>
	);
};

export default Modulo3;
