import Sidebar from "components/Sidebar";
import { AWS_LIST } from "resources/consts";

const Modulo1 = () => {
	return (
		<div className="container">
			<div className="row justify-content-start">
				<div className="col-4">
					<Sidebar list={AWS_LIST} />
				</div>
				<div className="col-8 base-card">
					<h3>Módulo 1</h3>
					<h4>Objetivos de aprendizado</h4>
					<ul>
						<li>Resumir os benefícios da AWS.</li>
						<li>
							Descrever as diferenças entre o fornecimento sob demanda e as
							implantações de nuvem.
						</li>
						<li>Resumir o modelo de pagamento conforme o uso.</li>
					</ul>
					<p>
						Amazon Elastic Compute Cloud (Amazon EC2), um tipo de servidor
						virtual.
					</p>
					<h4>Computação em nuvem</h4>
					<p>
						A entrega de recursos de TI sob demanda pela internet com uma
						definição de preço de pagamento pelo que usa.
					</p>
					<p>
						Entrega sob demanda - Ter os recursos necessários quando solicitado.
						Exemplo: caso precise de 200 servidores, você vai conseguir.
					</p>
					<p>
						Sob a internet - Ter esses recursos através da internet. Exemplo: um
						console, aplicativo.
					</p>
					<p>
						Precificação paga pelo que usa - Apenas vai pagar quando estiver
						utilizando o serviço.
					</p>

					<h4>Modelos de implantação da computação em nuvem</h4>
					<p>
						Os três modelos de implantação de computação em nuvem são computação
						baseada na nuvem, on-premises e híbrida.{" "}
					</p>
					<h5>Implatação baseada na nuvem</h5>
					<ul>
						<li>Execute todas as partes da aplicação na nuvem.</li>
						<li>Migre aplicações para a nuvem.</li>
						<li>Projete e crie novas aplicações na nuvem.</li>
					</ul>
					<p>
						Em um modelo de implantação baseada na nuvem, você pode migrar
						aplicações para a nuvem ou projetar e criar novas aplicações na
						nuvem. Você pode criar essas aplicações em uma infraestrutura de
						baixo nível que precise do gerenciamento de sua equipe de TI. Você
						também pode criá-los usando serviços de nível superior que reduzem
						os requisitos de gerenciamento, arquitetura e scaling da
						infraestrutura principal. Por exemplo, uma empresa poderia criar uma
						aplicação que consiste em servidores virtuais, bancos de dados e
						componentes de redes totalmente baseados na nuvem.
					</p>
					<h4>Implantação on-premises</h4>
					<ul>
						<li>
							Implante recursos usando ferramentas de virtualização e
							gerenciamento de recursos.
						</li>
						<li>
							Aumente a utilização de recursos usando tecnologias de
							virtualização e gerenciamento de aplicações
						</li>
					</ul>
					<p>
						A implantação on-premises também é conhecida como implantação de
						nuvem privada. Nesse modelo, os recursos são implantados on-premises
						usando ferramentas de virtualização e gerenciamento de recursos. Por
						exemplo, você poderia executar aplicações em tecnologia totalmente
						mantida no seu data center on-premises. Embora esse modelo seja
						muito parecido com a infraestrutura de TI legada, a incorporação de
						tecnologias de virtualização e gerenciamento de aplicativos ajuda a
						aumentar a utilização de recursos.
					</p>
					<p>
						A AWS (Amazon Web Services) é amplamente conhecida por ser uma
						plataforma de computação em nuvem líder no mercado. No entanto, há
						situações em que uma organização pode desejar implantar serviços ou
						infraestrutura AWS localmente, em vez de usar a nuvem pública. Isso
						é conhecido como "implantação on-premises" da AWS e é geralmente
						feito usando a AWS Outposts ou a AWS Snow Family.
					</p>
					<h5>Implatação híbrida</h5>
					<ul>
						<li>
							Conecte recursos baseados na nuvem à infraestrutura on-premises.
						</li>
						<li>
							Integre recursos baseados na nuvem com aplicações de TI legadas.
						</li>
					</ul>
					<p>
						Em uma implantação híbrida, os recursos baseados na nuvem ficam
						conectados à infraestrutura on-premises. Você pode adotar essa
						abordagem em várias situações. Por exemplo, você tem aplicações
						legadas que são melhor mantidas on-premises ou as regulamentações
						governamentais exigem que sua empresa mantenha determinados
						registros on-premises. Suponha que uma empresa queira usar serviços
						de nuvem que podem automatizar o processamento e a análise de dados
						em batch. No entanto, a empresa tem vários aplicativos legados que
						são mais adequados no local e que não serão migrados para a nuvem.
						Com uma implantação híbrida, a empresa conseguiria manter os
						aplicativos legados no local enquanto se beneficiaria dos serviços
						de dados e análises executados na nuvem.
					</p>
					<h4>Benefícios da computação em nuvem</h4>
					<h5>Troque despesas inicias por despesas variáveis</h5>
					<p>
						Despesas iniciais se referem a data centers, servidores físicos e
						outros recursos nos quais você precisaria investir antes de usá-los.
						Despesas variáveis significam que você paga apenas pelos recursos de
						computação que consumir em vez de investir muito em data centers e
						servidores antes de saber como usá-los. Ao adotar uma abordagem de
						computação em nuvem com o benefício de despesas variáveis, as
						empresas podem implementar soluções inovadoras enquanto economizam
						custos.
					</p>
					<h5>Pare de gastar dinheiro para executar e manter data centers</h5>
					<p>
						A computação em data centers costuma exigir que você gaste mais
						dinheiro e tempo gerenciando a infraestrutura e os servidores. Um
						benefício da computação em nuvem é poder se concentrar menos nessas
						tarefas e mais nas aplicações e clientes.
					</p>
					<h5>Pare de tentar adivinhar a capacidade</h5>
					<p>
						Com a computação em nuvem, você não precisa prever a capacidade de
						infraestrutura necessária antes de implantar uma aplicação. Por
						exemplo, você pode iniciar instâncias do Amazon EC2 quando
						necessário e pagar apenas pelo tempo de computação que usar. Em vez
						de pagar por recursos não usados ou ter que lidar com capacidade
						limitada, você pode acessar apenas a capacidade necessária. Você
						também pode aumentar ou reduzir a capacidade em resposta à demanda.
					</p>
					<h5>Beneficie-se de grandes economias de escala</h5>
					<p>
						O uso da computação em nuvem permite obter um custo variável menor
						ao que você conseguiria por conta própria. Como o uso de centenas de
						milhares de clientes pode ser agregado na nuvem, provedores como a
						AWS podem alcançar enormes economias de escala. A economia de escala
						se transforma em pagamento conforme o uso com preços mais baixos.{" "}
					</p>
					<h5>Aumentar a velocidade e a agilidade</h5>
					<p>
						A flexibilidade da computação em nuvem facilita o desenvolvimento e
						a implantação de aplicações. Essa flexibilidade permite mais tempo
						para experimentar e inovar. Ao fazer a computação em data centers,
						pode levar semanas para obter os novos recursos de que você precisa.
						Em comparação, a computação em nuvem permite que você acesse novos
						recursos em poucos minutos.
					</p>
					<h5>Ter alcance global em minutos</h5>
					<p>
						A presença global da nuvem AWS permite que você implante aplicações
						para clientes em todo o mundo rapidamente, ao mesmo tempo que
						oferece baixa latência. Isso significa que, mesmo se você estiver em
						uma parte do mundo diferente de seus clientes, eles poderão acessar
						os seus aplicativos com atrasos mínimos. Mais adiante neste curso,
						você vai explorar a infraestrutura global da AWS em mais detalhes.
						Você examinará alguns dos serviços que pode usar para entregar
						conteúdo a clientes em todo o mundo.
					</p>
					<p>Recursos adicionais</p>
					<ul>
						<li>
							https://docs.aws.amazon.com/general/latest/gr/glos-chap.html
						</li>
						<li>https://d0.awsstatic.com/whitepapers/aws-overview.pdf</li>
						<li>https://aws.amazon.com/getting-started/fundamentals-overview/</li>
						<li>https://aws.amazon.com/what-is-cloud-computing/</li>
						<li>https://aws.amazon.com/types-of-cloud-computing/</li>
						<li>https://aws.amazon.com/what-is-aws/</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Modulo1;
