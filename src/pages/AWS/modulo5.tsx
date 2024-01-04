import Sidebar from "components/Sidebar";
import { AWS_LIST } from "resources/consts";

import eleventhImg from "../../assets/imgs/aws/11.png";
import twelfthImg from "../../assets/imgs/aws/12.png";
import thirteenthImg from "../../assets/imgs/aws/13.png";
import fourteenthImg from "../../assets/imgs/aws/14.png";
import fifteenthImg from "../../assets/imgs/aws/15.png";

const Modulo5 = () => {
	return (
		<div className="container">
			<div className="row justify-content-start">
				<div className="col-4">
					<Sidebar list={AWS_LIST} />
				</div>
				<div className="col-8 base-card">
					<h3>Módulo 5</h3>
					<p>
						Acesso ao armazenamento. Conforme as aplicações são executadas, elas
						precisam acessar o armazenamento em nível de bloco, que funciona
						como um lugar para armazenamento de arquivos. Um arquivo pode ser
						uma serie de bytes armazenados em blocos em um disco. Quando um
						arquivo é atualizado nem toda série de blocos é sobescrita, em vez
						disso, apenas as partes atualizadas são alteradas. Por isso, é um
						tipo de armazenamento eficiente para trabalho com aplicações como:
						banco de dados, software empresarial ou sistemas de arquivos. Quando
						usamos um laptop ou um computador pessoal, acessamos o armazenamento
						em nível de bloco, que neste caso é o disco rígido. As instâncias do
						EC2 também têm disco rígido e existem alguns tipos diferentes.
						Quando uma instância do EC2 é iniciada, dependendo do tipo, ela pode
						fornecer armazenamento local, chamados de volumes de armazenamento
						de instância ou instace store. Esses volumes ficam fisicamente
						anexados aos Hosts em que essas instâncias são executadas. É
						possível gravar neles como se fossem um disco rígido normal. O
						problema é que se a instância do EC2 for interrompida ou encerrada,
						quando o volume estiver anexado ao host físico, todos os dados
						gravados no volume de armazenamento de instância serão excluídos. O
						motivo é que se a instância for iniciada depois da interrupção, ela
						provavelmente vai estar em outro host, no qual o volume não existe.
						Lembre-se de que as instâncias do EC2 são máquinas virtuais,
						portanto o Host pode interromper e iniciar uma instância. Devido a
						natureza efêmera ou temporária do volume de armazenamento de
						instâncias, eles são úteis em situações que é permitido perder os
						dados gravados na unidade, tal como, arquivos temporários, dados de
						testes e dados que podem ser facilmente recriados sem consequências.
						É melhor não gravar dados importantes em unidades de instâncias do
						EC2. Com isso, temos o Amazon Elastic Block Store (Amazon EBS). Com
						o EBS é possível criar discos virtuais chamados de volume do EBS que
						podem ser anexados a instâncias do EC2. São unidade locais separadas
						do armazenamento de volume de instância que não ficam vinculados
						diretamente ao Host no qual a instância é executada. Isso significa
						que os dados gravados em um volume do EBS não são excluídos quando
						uma instância é interrompida ou iniciada. Existem diversos tamanhos
						e tipos de volumes do EBS. Você define o tamanho, tipo e
						configurações necessárias. Depois, bastar provisioanr o volume e
						anexar na instância do EC2. Em seguida, você pode configurar a
						aplicação para gravar no volume e pronto. Mesmo que a instância seja
						interrompida ou iniciada os dados vão permanecer no volume. Como o
						caso de volume de uso do EBS é ter um disco rígido persistente, nos
						quais as aplicações podem fazer gravações, é importante fazer
						backups desses dados. Com EBS é possível fazer o backup incrementais
						de dados, chamados Snapshots. É muito importante fazer Snapshots
						regulares dos volumes do EBS, pois se uma unidade for corrompida, os
						dados não serão perdidos. Também é possível restaurar os dados de um
						Snapshot.
					</p>

					<h4>Armazenamentos de instâncias</h4>
					<p>
						Os volumes de armazenamento a nível de bloco se comportam como
						discos rígidos físicos. Um armazenamento de instância(opens in a new
						tab) é um meio temporário de armazenamento a nível de bloco para uma
						instância do Amazon EC2. Um armazenamento de instância é o
						armazenamento em disco fisicamente anexo ao computador host para uma
						instância do EC2 e, portanto, tem a mesma vida útil da instância.
						Quando a instância for terminada, você perderá todos os dados no
						armazenamento de instância. Para ver um exemplo de como os
						armazenamentos de instância funciona, selecione os botões de seta
						para exibir cada etapa.
					</p>

					<img src={eleventhImg} alt="eleventh img" className="img-fluid" />
					<img src={twelfthImg} alt="twelfth img" className="img-fluid" />
					<img src={thirteenthImg} alt="thirteenth img" className="img-fluid" />

					<h4>Amazon Elastic Block Store (Amazon EBS)</h4>

					<p>
						O Amazon Elastic Block Store (Amazon EBS)(opens in a new tab) é um
						serviço que fornece volumes de armazenamento a nível de bloco que
						você pode usar com instâncias do Amazon EC2. Se você interromper ou
						terminar uma instância do Amazon EC2, todos os dados no volume do
						EBS anexo permanecerão disponíveis. Para criar um volume do EBS,
						defina a configuração (como tamanho e tipo do volume) e a provisão.
						Depois de criado, o volume do EBS pode ser anexado a uma instância
						do Amazon EC2. Como os volumes do EBS são para dados que precisam
						perdurar, é importante fazer backup dos dados. Você pode fazer
						backups incrementais de volumes do EBS criando snapshots do Amazon
						EBS.
					</p>

					<img src={fourteenthImg} alt="fourteenth img" className="img-fluid" />
					<img src={fifteenthImg} alt="fifteenth img" className="img-fluid" />

					<p>
						Um snapshot do EBS(opens in a new tab) é um backup incremental. Isso
						significa que o primeiro backup de um volume copia todos os dados.
						Nos backups subsequentes, somente os blocos de dados que foram
						alterados desde o snapshot mais recente são salvos. Os backups
						incrementais são diferentes dos backups completos, nos quais todos
						os dados em um volume de armazenamento são copiados cada vez que
						ocorre um backup. O backup completo inclui dados que não foram
						alterados desde o backup mais recente.
					</p>

					<h4>Amazon Simple Storage Service (Amazon S3)</h4>
					<p>
						Boas vindas a este vídeo sobre o Amazon Simple Storage Service ou
						Amazon S3. Pelo nome, você já deve ter adivinhado que é um serviço
						de armazenamento simples. Os dados da maioria das empresas precisam
						ser armazenados em algum lugar. No caso da cafeteria, esses dados
						são recibos, imagens, planilhas de Excel, vídeos de treinamentos
						para funcionários e até mesmo arquivos de texto, entre outras
						coisas. O Amazon S3 facilita o armazenamento desses arquivos por
						servir para armazenamento e recuperação de uma quantidade
						praticamente ilimitada de dados em qualquer escala. Os dados são
						armazenados como objetos, mas em vez de um diretório, eles são
						armazenados em buckets. Pense em um arquivo no disco rígido que é um
						objeto, e pense em um diretório de arquivos, que é o bucket. O
						tamanho máximo do objeto que pode ser carregado é de cinco
						terabytes. Você também pode fazer versões de objeto para protegê-los
						contra exclusão acidental. Isso significa que é sempre possível
						reter as versões anteriores de um objeto como um registro físico.
						Também é possível criar diversos buckets e armazená-los em
						diferentes classes ou camadas de dados. Você pode criar permissões
						para limitar quem pode ver ou acessar os objetos. Os dados também
						podem ser organizados em camadas diferentes. Essas camadas oferecem
						mecanismos para diferentes casos de uso de armazenamento, como dados
						que precisam ser acessados com frequência ou dados de auditoria que
						precisam ficar retidos por vários anos. Vamos falar sobre os mais
						famosos? O primeiro é chamado de S3 Standard, que tem onze “9” de
						durabilidade. Isso significa que um objeto armazenado no S3 Standard
						tem 99,999999999%, um monte de “9” de probabilidade de permanecer
						intacto após um período de um ano. Isso é muito alto. Além disso, os
						dados são armazenados de forma que a AWS consegue sustentar a perda
						simultânea de dados em duas instalações de armazenamento separadas.
						Isso acontece porque os dados são armazenados em pelo menos três
						instalações. Portanto, existem diversas cópias em vários locais.
						Outra maneira útil de usar o Amazon S3 é para hospedagem estática de
						site. Um site estático é um grupo de arquivos HTML e cada arquivo é
						semelhante a uma página física do site real. Você pode simplesmente
						carregar todo o HTML, os ativos web estáticos e assim por diante em
						um bucket e marcar uma caixa para hospedá-lo como um site estático.
						Depois, insira a URL do bucket e tchanan! Site instantâneo! Chamamos
						de estático, mas isso não significa que o site não possa ter
						animações e partes móveis. É uma maneira incrível de começar aquele
						blog sobre café. A próxima classe de armazenamento é chamada S3
						Standard Infrequent Access, ou S3 Standard-IA. É indicada para dados
						acessados com menos frequência, mas que precisam de acesso rápido
						quando necessário. Isso significa que é um lugar perfeito para
						armazenamento de backups, arquivos de recuperação de desastre ou
						qualquer objeto que precise ficar armazenado por longo prazo. A
						outra classe ou camada de armazenamento é adequada para o exemplo
						anterior sobre dados históricos. Digamos que os dados precisam ser
						retidos por vários anos para fins de auditoria, mas não precisam ser
						recuperados muito rapidamente. Você pode usar o S3 Glacier Flexible
						Retrieval para arquivar esses dados. Para usar o S3 Glacier Flexible
						Retrieval basta mover dados para ele ou criar cofres e preenchê-los
						com arquivos. E se você precisa reter os dados por um certo período
						por conformidade, pode empregar uma política de vault-lock do S3
						Glacier e bloquear seu cofre. Você pode especificar controles como
						“write once / read many” ou WORM e uma política de vault-lock e
						bloquear a política para evitar alterações futuras. Depois de
						bloqueada, a política não pode mais ser alterada. Há três opções
						para recuperação que variam de minutos a horas. A opção de fazer
						upload diretamente para o S3 Glacier Flexible Retrieval ou usar as
						políticas de ciclo de vida do S3. Acho que não mencionamos políticas
						de ciclo de vida até este momento. São políticas que podem ser
						criadas para movimentação automática de dados entre camadas. Por
						exemplo, digamos que um objeto precisa ser mantido no S3 Standard
						por 90 dias. Depois ele deve ser movido para o S3 Standard
						Infrequent Access e ficar nele pelos próximos 30 dias. Depois de 120
						dias no total, ele é movido para o S3 Glacier Flexible Retrieval,
						com políticas de ciclo de vida, você cria a configuração sem alterar
						o código da aplicação e a configuração executa essas movimentações
						automaticamente para você. Esse é outro exemplo de um serviço AWS
						gerenciado que facilita o trabalho para que você possa se concentrar
						em suas necessidades comerciais. Há também outras classes de
						armazenamento, como S3 One Zone-Infrequent Access, S3 Glacier
						Instant Retrieval e S3 Glacier Deep Archive. Feliz armazenamento!{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Modulo5;
