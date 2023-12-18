import Sidebar from "components/Sidebar";
import { JAVA_LIST } from "resources/consts";
import exeImg from "../../assets/imgs/concepts/execution.png";

const Java = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-start">
					<div className="col-4">
						<Sidebar list={JAVA_LIST} />
					</div>
					<div className="col-8 base-card">
						<h3>Java</h3>
						<p>
							Java é uma linguagem de programação criada pela Sun Microsystems
							no meio da década de 1990. Adquirida pela Oracle Corporation em
							2010.
						</p>
						<p>
							Plataforma de desenvolvimento e execução
							<br />O java fornece Bibliotecas &#40;API&#41; e os ambientes de
							execução.
						</p>
						<p>
							Você pode criar cada classe e método de que precisa para formar
							seus programas Java. Porém, a maioria dos programadores Java tira
							proveito das ricas coleções de classes existentes e métodos nas
							bibliotecas de classe Java, também conhecidas como Java APIs
							(application programming interfaces).
						</p>
						<h5>Problemas resolvidos e motivo de seu sucesso</h5>
						<ul>
							<li>Ponteiros/ gerenciamento de memória.</li>
							<li>
								Portabilidade falha: reescrever parte do código ao mudar de SO.
							</li>
							<li>Utilização em dispositivos diversos</li>
							<li>Custo</li>
						</ul>
						<h5>Aspectos notáveis</h5>
						<ul>
							<li>
								Código compilado para bytecode e executado em máquina virtual
								&#40;JVM&#41;.
							</li>
							<li>Portável, segura, robusta.</li>
							<li>Roda em vários tipos de dispositivos.</li>
							<li>Domina o mercado corporativo desde o fim do século 20.</li>
							<p>Padrão Android por muitos anos.</p>
						</ul>
						<h5>Edições</h5>
						<ul>
							<li>
								Java ME - Java Micro Edition - dispositivos embarcados e móveis
								- IoT.
								<p>
									um subconjunto do Java SE — é voltado para o desenvolvimento
									de aplicativos para dis- positivos embarcados com recursos
									limitados, como smartwatches, MP3 players, decodificadores de
									TV (set-top boxes), medidores inteligentes (para monitorar o
									uso de energia elétrica) e muitos outros.
								</p>
							</li>
							<li>
								Java SE - Java Standard Edition - core - desktop e servidores.
								<p>
									O Java Standard Edition contém os recursos necessários para
									desenvolver aplicativos de desktop e servidor.
								</p>
							</li>
							<li>
								Java EE - Java Enterprise Edition - aplicações corporativas.
								<p>
									O Java Enterprise Edition ( Java EE) é adequado para
									desenvolver aplicativos em rede distribuída e em grande escala
									e também aplicativos baseados na web.
								</p>
							</li>
						</ul>
						<h5>Plataforma JAVA SE</h5>
						<p>
							JVM - Java Virtual Machine <br />
							Máquina virtual do java - necessário para executar sistemas Java.
						</p>
						<img src={exeImg} alt="execution img" className="img-fluid" />
						<h5>Estrutura de uma aplicação Java</h5>
						<p>
							Java é uma linguagem orientada a objeto. A unidade básica de uma
							aplicação orientada a objeto é a classe. Todo código em Java tem
							que estar dentro de classes.
						</p>
						<p>
							Depois da classes temos os package, que é o agrupamento lógico de
							classes relacionadas.
						</p>
						<p>
							Depois do pacote, tem-se o conceito de módulo, que foi introduzido
							no Java 9+. O conceito de módulo é o agrupamento lógico de pacotes
							relacionados.
							<br />
							Run time é o agrupamento físico &#40;representados por
							arquivos&#41;. Cada build ou runtime é uma unidade física que pode
							ser instalada para rodar nos dispositivos.
						</p>
						<p>Aplicação é o agrupamento de módulos relacionados.</p>
						<h4>Um ambiente de desenvolvimento Java típico</h4>
						<h5>Fase 1: criando um programa</h5>
						<p>
							Editar o programa no seu editor favorito ou em uma IDE e salvar
							com a extensão .java, que indica um arquivo contendo código-fonte
							Java.
						</p>
						<h5>Fase 2: compilando um programa Java em bytecodes</h5>
						<p>
							Na Fase 2, utilize o comando javac (o compilador Java) para
							compilar um programa (Figura 1.7). Por exemplo, a fim de compilar
							um programa chamado Welcome.java, você digitaria javac
							Welcome.java na janela de comando do seu sistema (isto é, o Prompt
							do MS-DOS, no Windows, ou o aplicativo Terminal, no Mac OS X) ou
							em um shell Linux (também chamado Terminal em algumas versões do
							Linux). Se o programa compilar, o compilador produz um arquivo
							.class chamado Welcome.class que contém a versão compilada.IDEs
							tipicamente fornecem um item de menu, como Build ou Make, que
							chama o comando javac para você.
						</p>
						<p>
							O compilador Java converte o código-fonte Java em bytecodes que
							representam as tarefas a serem executadas na fase de exe- cução
							(Fase 5). O Java Virtual Machine ( JVM) — uma parte do JDK e a
							base da plataforma Java — executa bytecodes. A máquina virtual
							(virtual machine — VM) é um aplicativo de software que simula um
							computador, mas oculta o sistema operacional e o hardware
							subjacentes dos programas que interagem com ela. Se a mesma
							máquina virtual é implementada em muitas plataformas de
							computador, os aplicativos escritos para ela podem ser utilizados
							em todas essas plataformas. A JVM é uma das máquinas virtuais mais
							utilizadas. O .NET da Microsoft utiliza uma arquitetura de máquina
							virtual semelhante. Diferentemente das instruções em linguagem de
							máquina, que são dependentes de plataforma (isto é, de hardware
							específico de computador), instruções bytecode são independentes
							de plataforma. Portanto, os bytecodes do Java são portáveis — sem
							re- compilar o código-fonte, as mesmas instruções em bytecodes
							podem ser executadas em qualquer plataforma contendo uma JVM que
							entende a versão do Java na qual os bytecodes foram compilados. A
							JVM é invocada pelo comando java. Por exemplo, para executar um
							aplicativo Java chamado Welcome, você digitaria java Welcome em
							uma janela de comando para invocar a JVM, que então iniciaria os
							passos necessários a fim de executar o aplicativo. Isso começa a
							Fase 3. IDEs tipicamente fornecem um item de menu, como Run, que
							chama o comando java para você.
						</p>
						<h4>Fase 3: carregando um programa na memória</h4>
						<p>
							Na Fase 3, a JVM armazena o programa na memória para executá-lo —
							isso é conhecido como carregamento (Figura 1.8). O carregador de
							classe da JVM pega os arquivos .class que contêm os bytecodes do
							programa e os transfere para a memória primária. Ele também
							carrega qualquer um dos arquivos .class fornecidos pelo Java que
							seu programa usa. Os arquivos .class podem ser carregados a partir
							de um disco em seu sistema ou em uma rede (por exemplo, sua
							faculdade local ou rede corporativa ou a internet).
						</p>
						<h4>Fase 4: verificação de bytecode</h4>
						<p>
							Na Fase 4, enquanto as classes são carregadas, o verificador de
							bytecode examina seus bytecodes para assegurar que eles são
							válidos e não violam restrições de segurança do Java (Figura 1.9).
							O Java impõe uma forte segurança para certificar-se de que os
							programas Java que chegam pela rede não danificam os arquivos ou o
							sistema (como vírus e worms de computador).
						</p>
						<h4>Fase 5: execução</h4>
						<p>
							Na Fase 5, a JVM executa os bytecodes do programa, realizando,
							assim, as ações especificadas por ele (Figura 1.10). Nas primei-
							ras versões do Java, a JVM era simplesmente um interpretador para
							bytecodes. A maioria dos programas Java executava lentamente,
							porque a JVM interpretava e executava um bytecode de cada vez.
							Algumas arquiteturas modernas de computador podem executar vá-
							rias instruções em paralelo. Em geral, as JVMs atuais executam
							bytecodes utilizando uma combinação de interpretação e a chamada
							compilação just in time ( JIT). Nesse processo, a JVM analisa os
							bytecodes à medida que eles são interpretados, procurando hot
							spots (pontos ativos) — partes dos bytecodes que executam com
							frequência. Para essas partes, um compilador just in time (JIT),
							como o compilador Java HotSpotTM da Oracle, traduz os bytecodes
							para a linguagem de máquina do computador subjacente. Quando a JVM
							encontra de novo essas partes compiladas, o código de linguagem de
							máquina mais rápido é executado. Portanto, os programas Java
							realmente passam por duas fases de compilação: uma em que o
							código-fonte é traduzido em bytecodes (para a portabilidade entre
							JVMs em diferentes plataformas de computador) e outra em que,
							durante a execução, os bytecodes são traduzidos em linguagem de
							máquina para o computador real no qual o programa é executado.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Java;
