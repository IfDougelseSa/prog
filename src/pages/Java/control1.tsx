import Sidebar from "components/Sidebar";
import { JAVA_LIST } from "resources/consts";

const Control1 = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-start">
					<div className="col-4">
						<Sidebar list={JAVA_LIST} />
					</div>
					<div className="col-8 base-card">
						<h3>
							Instruções de controle: parte 1; operadores de atribuição ++ e --
						</h3>
						<h4>Estruturas de controle</h4>
						<p>
							Normalmente, instruções em um programa são executadas uma após a
							outra na ordem em que são escritas. Esse processo é chamado
							execução sequencial. Várias instruções Java, que discutiremos mais
							adiante, permitirão que você especifique que a próxima instrução a
							executar não é necessariamente a próxima na sequência. Isso é
							chamado transferência de controle. Durante a década de 1960,
							tornou-se claro que a utilização indiscriminada de transferências
							de controle era a raiz de muita dificuldade experimentada por
							grupos de desenvolvimento de software. A culpa disso é a instrução
							goto (utilizada na maioria das linguagens de programação atuais),
							que permite especificar uma transferência de controle para um
							entre vários espectros de destinos em um programa. [Observação: o
							Java não contém uma instrução goto; entretanto, a palavra goto é
							reservada pelo Java e não deve ser utilizada como um identificador
							em programas.] A pesquisa de Bohm e Jacopini1 tinha demonstrado
							que programas poderiam ser escritos sem nenhuma instrução goto. O
							desafio dos programadores na época era mudar seus estilos para
							“programação sem goto”. O termo programação estruturada tornou-se
							quase sinônimo de “eliminação de goto”. Foi somente em meados da
							década de 1970 que os programadores começaram a levar a sério a
							programação estruturada. Os resultados foram impressionantes.
							Grupos de desenvolvimento de software informaram tempos de
							desenvolvimento mais curtos, mais frequente cumprimento dos prazos
							de entrega dos sistemas e mais frequente conclusão dentro do
							orçamento dos projetos de software. A chave para esses sucessos
							era que programas estruturados eram mais claros, mais fáceis de
							depurar e modificar e menos propensos a conterem bugs, para
							começar. O trabalho de Bohm e Jacopini demonstrou que todos os
							programas poderiam ser escritos em termos de somente três
							estruturas de controle — a estrutura de sequência, a estrutura de
							seleção e a estrutura de repetição. Ao introduzirmos as
							implementações das estruturas de controle do Java, na terminologia
							da especificação da Linguagem Java, nós as chamamos de “instruções
							de controle”.
						</p>
						<h4>Instruções de seleção em Java</h4>
						<p>
							O Java contém três tipos de instruções de seleção (discutidos
							neste capítulo e no Capítulo 5). A instrução if realiza uma ação
							(seleciona), se uma condição for verdadeira, ou pula a ação, se a
							condição for falsa. A instrução if…else realiza uma ação se uma
							condição for verdadeira e uma ação diferente se a condição for
							falsa. A instrução switch (Capítulo 5) realiza uma de muitas ações
							diferentes, dependendo do valor de uma expressão. A instrução if é
							uma instrução de seleção única porque seleciona ou ignora uma
							única ação (ou, como veremos a seguir, um único grupo de ações). A
							instrução if…else é chamada instrução de seleção dupla porque
							seleciona entre duas ações diferentes (ou grupos de ações). A
							instrução switch é chamada de instrução de seleção múltipla porque
							seleciona entre muitas ações diferentes (ou grupos de ações).
						</p>
						<h4>Instruções de repetição em Java</h4>
						<p>
							O Java fornece três instruções de repetição (também chamadas de
							iteração ou instruções de loop) que permitem que programas
							executem instruções repetidamente, contanto que uma condição
							(chamada de condição de continuação do loop) permaneça verdadeira.
							As instruções de repetição são while,do…while, for e instruções
							for aprimoradas. (O Capítulo 5 apresenta as instruções do…while e
							for e o Capítulo 7 apresenta a for aprimorada). As instruções
							while e for realizam a ação (ou grupo de ações) no seu corpo zero
							ou mais vezes — se a condição de continuação de loop for
							inicialmente falsa, a ação (ou grupo de ações) não será executada.
							A instrução do…while realiza a ação (ou grupo de ações) no seu
							corpo uma ou mais vezes. As palavras if, else, switch, while, do e
							for são palavras-chave. Uma lista completa das palavras-chave Java
							é apresentada no Apêndice C.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Control1;
