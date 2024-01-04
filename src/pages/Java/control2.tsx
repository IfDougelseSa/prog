import Sidebar from "components/Sidebar";
import { JAVA_LIST } from "resources/consts";

const Control2 = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-start">
					<div className="col-4">
						<Sidebar list={JAVA_LIST} />
					</div>
					<div className="col-8 base-card">
						<h3>Instruções de controle: parte 2; operadores lógicos</h3>
						<h4>Instrução de repetição for</h4>
						<p>
							O formato geral da instrução for é for (inicialização;
							condiçãoDeContinuaçãoDoLoop; incremento) instrução onde a
							expressão inicialização nomeia a variável de controle do loop e
							opcionalmente fornece seu valor inicial,
							condiçãoDeContinuaçãoDoLoop é a condição que determina se o loop
							deve continuar executando e incremento modifica o valor da
							variável de controle, para que a condição de continuação do loop
							por fim torne-se falsa. Os dois pontos e vírgulas no cabeçalho for
							são necessários. Se a condição de continuação do loop for
							inicialmente false, o programa não executará o corpo da instrução
							for. Em vez disso, a execução prossegue com a instrução seguinte
							ao for
						</p>
						<p>
							{" "}
							instrução for muitas vezes pode ser representada com uma while
							equivalente desta maneira: inicialização; while
							(condiçãoDeContinuaçãoDoLoop) instrução incremento; Na Seção 5.8,
							mostramos um caso em que uma instrução for não pode ser
							representada com uma instrução while equivalente. Em geral, as
							instruções for são utilizadas para repetição controlada por
							contador, e as instruções while, para repetição controlada por
							sentinela. Entretanto, while e for podem ser utilizados para
							qualquer tipo de repetição.
						</p>
						<h4>Escopo de uma variável de controle da instrução for</h4>
						<p>
							Se a expressão inicialização no cabeçalho for declara a variável
							de controle (isto é, o tipo da variável de controle é especificado
							antes do nome variável, como na Figura 5.2), a variável de
							controle pode ser utilizada somente nessa instrução for — ela não
							existirá fora dela. Esse uso restrito é conhecido como escopo da
							variável. O escopo de uma variável define onde ele pode ser
							utilizado em um programa. Por exemplo, uma variável local somente
							pode ser utilizada no método que a declara e somente a partir do
							ponto de declaração até o fim do método. O escopo é discutido em
							detalhes no Capítulo 6, “Métodos: um exame mais profundo”.
						</p>
						<h4>
							As expressões no cabeçalho de uma instrução for são opcionais
						</h4>
						<p>
							Todas as três expressões em um cabeçalho for são opcionais. Se a
							condiçãoDeContinuaçãoDoLoop for omitida, o Java assume que ela é
							sempre verdadeira, criando assim um loop infinito. Você poderia
							omitir a expressão inicialização se o programa inicializar a
							variável de controle antes do loop. Você poderia omitir a
							expressão incremento se o programa calcular o incremento com
							instruções no corpo do loop ou se nenhum incremento for
							necessário. A expressão incremento em uma instrução for atua como
							se ela fosse uma instrução independente no fim do corpo de for.
							Portanto, counter = counter + 1 counter += 1 ++counter counter++
							são expressões de incremento equivalentes em uma instrução for.
							Muitos programadores preferem counter++ porque ele é conciso e
							porque um loop for avalia sua expressão de incremento após o corpo
							ser executado, assim a forma incremento pós-fixada parece mais
							natural. Nesse caso, a variável sendo incrementada não aparece em
							uma expressão maior, então pré-incrementar e pós-incrementar
							realmente têm o mesmo efeito.
						</p>

						<p>
							As expressões inicialização e incremento podem ser listas
							separadas por vírgulas de expressões que permitem utilizar
							múltiplas expressões de inicialização ou múltiplas expressões de
							incremento.
						</p>

						<h4>Formatando strings com tamanhos de campo e alinhamento</h4>
						<p>
							A linha 13 gera os cabeçalhos para duas colunas da saída. A
							primeira coluna exibe o ano e a segunda, a quantia em depósito no
							fim desse ano. Usamos o especificador %20s para gerar a String
							"Amount on Deposit”. O inteiro 20 entre o % e o caractere de
							conversão s indica que a saída de valor deve ser exibida com um
							tamanho de campo de 20 — isto é, printf exibe o valor com pelo
							menos 20 posições de caractere. Se o valor enviado para a saída
							for menor que 20 posições de caractere (17 caracteres neste
							exemplo), ele é alinhado à direita no campo por padrão. Se o valor
							year enviado para a saída tivesse largura maior do que quatro
							posições de caractere, o tamanho de campo seria estendido à
							direita para acomodar o valor inteiro — isso empurraria o campo
							amount para a direita, desalinhando as colunas de nossa saída
							tabular. Para gerar a saída dos valores alinhados à esquerda,
							simplesmente preceda o tamanho de campo com o flag de formatação
							de sinal de subtração (–) (por exemplo, %-20s).
						</p>

						<h4>Formatando números de ponto flutuante</h4>
						<p>
							Depois de cada cálculo, a linha 22 envia para a saída o ano e a
							quantia em depósito no fim desse ano. O ano é enviado para a saída
							na largura de um campo de quatro caracteres (como especificado por
							%4d). A quantidade enviada para a saída é como um número de ponto
							flutuante com o especificador de formato %,20.2f. O flag de
							formatação vírgula (,) indica que o valor de ponto flutuante deve
							ser enviado para a saída com um separador de agrupamento. O
							separador real utilizado é específico à localidade do usuário
							(isto é, país). Por exemplo, nos Estados Unidos, o número será
							enviado para a saída utilizando vírgulas para separar cada três
							dígitos e um ponto de fração decimal para separar a parte
							fracionária do número, como em 1,234.45. O número 20 na
							especificação de formato indica que o valor deve ser enviado para
							a saída alinhado à direita em um campo do tamanho de 20
							caracteres. O .2especifica a precisão do número formatado — nesse
							caso, o número é arredondado para o centésimo mais próximo e
							enviado para saída com dois dígitos à direita do ponto de fração
							decimal.
						</p>

						<h4>Instrução de repetição do…while</h4>
						<p>
							A instrução de repetição do…while é semelhante à instrução while.
							Na instrução while, o programa testa a condição de continuação do
							loop no início do loop, antes de executar o corpo do loop; se a
							condição for falsa, o corpo nunca será executado. A instrução
							do…while testa a condição de continuação do loop depois de
							executar o corpo do loop; portanto, o corpo sempre executa pelo
							menos uma vez. Quando uma instrução do…while termina, a execução
							continua com a próxima instrução na sequência. A Figura 5.7 usa
							uma while para gerar os números 1 a 10. A linha 8 declara e
							inicializa a variável de controle counter. Ao entrar na instrução
							do…while, a linha 12 gera a saída do valor de counter e a linha 13
							incrementa counter. Então, o programa avalia o teste de
							continuação do loop na parte inferior do loop (linha 14). Se a
							condição for verdadeira, o loop continua na primeira instrução do
							corpo (linha 12). Se a condição for falsa, o loop termina e o
							programa continua na próxima instrução depois do loop.
						</p>
						<h4>Chaves em uma instrução de repetição do…while</h4>
						<p>
							Não é necessário utilizar chaves na instrução de repetição
							do…while se houver apenas uma instrução no corpo. Entretanto,
							muitos programadores incluem as chaves, para evitar confusão entre
							as instruções while e do…while. Por exemplo, while (condição)
							normalmente é a primeira linha de uma instrução while. Uma
							instrução do…while sem chaves em torno de um corpo de uma única
							instrução aparece como: do instrução while (condição); que pode
							ser confuso. Um leitor pode interpretar erroneamente a última
							linha — while(condição); — como uma instrução while contendo uma
							instrução vazia (o ponto e vírgula sozinho). Portanto, a instrução
							do…while com o corpo de uma instrução é normalmente escrita com
							chaves assim: do instrução while (condição);{" "}
						</p>

						<h4>A estrutura de seleção múltipla switch</h4>

						<h4>Instruções break e continue</h4>
						<p>
							Além das instruções de seleção e repetição, o Java fornece
							instruções break (que discutimos no âmbito da instrução switch) e
							continue (apresentada nesta seção e no Apêndice L, em inglês, na
							Sala Virtual do livro) para alterar o fluxo de controle. A seção
							precedente mostrou como break pode ser utilizado para terminar a
							execução de uma instrução switch. Esta seção discute como utilizar
							break em instruções de repetição.
						</p>
						<h5>Instrução break</h5>
						<p>
							A instrução break, quando executada em um while, for, do…while ou
							switch, ocasiona a saída imediata dessa instrução. A execução
							continua com a primeira instrução depois da instrução de controle.
							Utilizações comuns da instrução break são escapar no começo de um
							loop ou pular o restante de uma instrução switch (como na Figura
							5.9). A Figura 5.13 demonstra uma instrução break saindo de um
							for. Quando a instrução if aninhada nas linhas 11 e 12 da
							instrução for (linhas 9 a 15) detecta que count é 5, a instrução
							break na linha 12 é executada. Isso termina a instrução for e o
							programa prossegue para a linha 17 (imediatamente depois da
							instrução for), que exibe uma mensagem que indica o valor da
							variável de controle quando o loop terminar. O loop executa
							completamente o seu corpo somente quatro vezes em vez de 10.
						</p>
						<h5>Instrução continue</h5>
						<p>
							A instrução continue, quando executada em um while, for ou
							do…while, pula as instruções restantes no corpo do loop e
							prossegue com a próxima iteração do loop. Nas instruções while e
							do…while, o programa avalia o teste de continuação do loop
							imediatamente depois que a instrução continue é executada. Em uma
							instrução for, a expressão incremento é executada, então o
							programa avalia o teste de continuação do loop. A Figura 5.14
							utiliza continue (linha 10) para pular para a instrução na linha
							12 quando o if aninhado determina que o valor de count é 5. Quando
							a instrução continue executa, o controle de programa continua com
							o incremento da variável de controle na instrução for (linha 7).
							Na Seção 5.3, declaramos que while poderia ser utilizado na
							maioria dos casos no lugar de for. Isso não é verdade quando a
							expressão de incremento no while segue-se a uma instrução
							continue. Nesse caso, o incremento não executa antes de o programa
							avaliar a condição de continuação da repetição, então o while não
							é executado da mesma maneira que o for.
						</p>
						<h4>Operadores lógicos</h4>
						<p></p>

						<h4>Avaliação de curto-circuito de condições complexas</h4>
						<p>
							As partes de uma expressão contendo os operadores && ou || somente
							são avaliadas até que se saiba se a condição é verdadeira ou
							falsa.
						</p>
						<h4>
							Operadores E lógico booleano (&) e OU inclusivo lógico booleano
							(|)
						</h4>
						<p>
							Os operadores E lógicos booleanos (&) e OU inclusivos lógicos
							booleanos (|) são idênticos aos operadores && e ||, exceto que os
							operadores & e | sempre avaliam ambos os operandos (isto é, eles
							não realizam a avaliação em curto-circuito).
						</p>
						<h4>OU exclusivo lógico booleano (^)</h4>
						<p>
							Uma condição simples que contém o operador OU exclusivo lógico
							booleano (^) é true se e somente se um de seus operandos for true
							e o outro for false. Se ambos forem true ou ambos forem false, a
							condição inteira é false.
						</p>
						<h4>Operador de negação lógica (!)</h4>
						<p>
							O operador ! (NÃO lógico, também chamado de negação lógica ou
							complemento lógico) “inverte” o significado de uma condição.
							Diferentemente dos operadores lógicos &&, ||, &, | e ^, que são
							operadores binários que combinam duas condições, o operador de
							negação lógica é um operador unário que tem apenas uma única
							condição como um operando. O operador lógico de negação é colocado
							antes de uma condição para escolher um caminho de execução se a
							condição original (sem o operador lógico de negação) for false.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Control2;
