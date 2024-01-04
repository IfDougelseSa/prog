import Sidebar from "components/Sidebar";
import { JAVA_LIST } from "resources/consts";
import compositeImg from "../../assets/imgs/java/composite-assignment.png";
import incrementDecrementImg from "../../assets/imgs/java/increment-decrement.png";
import precedenceImg from "../../assets/imgs/java/precedence.png";

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
						<h4>Resumo das instruções de controle em Java</h4>
						<p>
							O Java contém somente três tipos de estruturas de controle, que
							daqui para a frente chamaremos de instruções de controle:
							instrução de sequência, instruções de seleção (três tipos) e
							instruções de repetição (três tipos). Cada programa é formado
							combinando quantas instruções forem apropriadas para o algoritmo
							que o programa implementa. Podemos modelar cada instrução de
							controle como um diagrama de atividade. Como na Figura 4.1, cada
							diagrama contém um estado inicial e um estado final que representa
							um ponto de entrada e um ponto de saída da instrução de controle,
							respectivamente. As instruções de controle de entrada única/ saída
							única facilitam a construção de programas — basta conectarmos o
							ponto de saída de uma instrução ao ponto de entrada da instrução
							seguinte. Chamamos isso de empilhamento de instruções de controle.
							Aprenderemos que existe apenas outra maneira de conectar
							instruções de controle — aninhamento de instruções de controle —
							em que uma instrução de controle aparece dentro da outra.
							Portanto, algoritmos nos programas Java são construídos a partir
							de somente três tipos de instruções de controle, combinadas apenas
							de duas maneiras. Isso é a essência da simplicidade.
						</p>
						<h4> A instrução de seleção única if</h4>
						<p>
							Os programas utilizam instruções de seleção para escolher entre
							cursos alternativos de ações. Por exemplo, suponha que a nota de
							aprovação de um exame seja 60. A instrução em pseudocódigo Se a
							nota do aluno for maior que ou igual a 60 Imprime “Aprovado”
							determina se a condição “nota do aluno é maior que ou igual a 60”
							é verdadeira. Nesse caso, “Aprovado” é impresso, e a próxima
							instrução de pseudocódigo é “realizada”. (Lembre-se de que o
							pseudocódigo não é uma linguagem de programação real.) Se a
							condição for falsa, a instrução Print é ignorada e a próxima
							instrução de pseudocódigo na sequência é realizada. O recuo da
							segunda linha dessa instrução de seleção é opcional, mas
							recomendável, porque enfatiza a estrutura inerente dos programas
							estruturados. A instrução de pseudocódigo If precedente pode ser
							escrita em Java como if (studentGrade &#62;= 60)
							System.out.println("Passed"); O código Java é muito similar ao
							pseudocódigo. Essa é uma das propriedades do pseudocódigo que
							torna essa ferramenta de desenvolvimento de programas tão útil.
						</p>
						<h4>Instrução de seleção dupla if…else</h4>
						<p>
							A instrução if de seleção única realiza uma ação indicada somente
							quando a condição é true; caso contrário, a ação é pulada. A
							instrução de seleção dupla if...else permite especificar uma ação
							a realizar quando a condição é verdadeira e uma ação diferente
							quando a condição é falsa. Por exemplo, a instrução de
							pseudocódigo Se a nota do aluno for maior que ou igual a 60
							Imprima “Aprovado” Caso contrário Imprima “Reprovado” imprime
							“Aprovado” se a nota do aluno for maior ou igual a 60, mas imprime
							“Reprovado” se for menor que 60. Em qualquer um dos casos, depois
							que a impressão ocorre, a próxima instrução do pseudocódigo na
							sequência é “realizada”. A instrução If…else no pseudocódigo
							anterior pode ser escrita em Java assim if (grade &#62;= 60)
							System.out.println("Passed"); else System.out.println("Failed"); O
							corpo de else também é recuado. Qualquer que seja a convenção de
							recuo que escolher, você deve aplicá-la consistentemente por todos
							os seus programas.{" "}
						</p>
						<h4>Instruções if…else aninhadas</h4>
						<p>
							Um programa pode testar múltiplos casos colocando instruções
							if…else dentro de outras instruções if…else para criar instruções
							if…else aninhadas. Por exemplo, o pseudocódigo a seguir representa
							uma if…else aninhada, que imprime A para notas de exame maiores
							que ou igual a 90, B para notas de 80 a 89, C para notas de 70 a
							79, D para notas de 60 a 69 e F para todas as outras notas: Se a
							nota do aluno for maior que ou igual a 90 Imprima “A” caso
							contrário Se a nota do aluno for maior que ou igual a 80 Imprima
							“B” caso contrário Se a nota do aluno for maior que ou igual a 70
							Imprima “C” caso contrário Se a nota do aluno for maior que ou
							igual a 60 Imprima “D” caso contrário Imprima “F” Esse
							pseudocódigo pode ser escrito em Java como if (studentGrade &#62;=
							90) System.out.println("A"); else if (studentGrade &#62;= 80)
							System.out.println("B"); else if (studentGrade &#62;= 70)
							System.out.println("C"); else if (studentGrade &#62;= 60)
							System.out.println("D"); else System.out.println("F");
						</p>
						<h4>O problema do else oscilante</h4>
						<p>
							O compilador Java sempre associa um else à instrução if
							imediatamente anterior, a menos que instruído de outro modo pela
							colocação de chaves (&#123; e &#125;). Esse comportamento pode
							levar àquilo que é chamado de problema do else oscilante. Por
							exemplo, if (x &#62; 5) if (y &#62; 5) System.out.println("x and y
							are &#62; 5"); else System.out.println("x is &#60;= 5"); parece
							indicar que, se x for maior do que 5, a instrução if aninhada
							determina se y também é maior do que 5. Se for assim, a string "x
							and y are &#62; 5" é enviada para a saída. Caso contrário, parece
							que se x não for maior que 5, a parte else do if…else imprime a
							string "x is &#60;= 5". Cuidado! Essa instrução if…else aninhada
							não é executada como parece. Na verdade, o compilador interpreta a
							instrução como if (x &#62; 5) if (y &#62; 5) System.out.println("x
							and y are &#62; 5"); else System.out.println("x is &#60;= 5"); em
							que o corpo da primeira if é uma if…else aninhada. A instrução if
							externa testa se x for maior do que 5. Se for, a execução
							continuará testando se y também for maior que 5. Se a segunda
							condição for verdadeira, a string adequada — "x and y are &#62; 5"
							— é exibida. Entretanto, se a segunda condição for falsa, a string
							"x is &#60;= 5" é exibida, apesar de sabermos que x é maior que 5.
							Igualmente ruim, se a condição da instrução if externa for falsa,
							o if…else interno é pulado e nada é exibido. Para forçar a
							instrução if…else aninhada para executar como foi originalmente
							concebida, devemos escrevê-la como a seguir: if (x &#62; 5) &#123;
							if (y &#62; 5) System.out.println("x and y are &#60; 5"); &#125;
							else System.out.println("x is &#60;= 5"); As chaves indicam que a
							segunda instrução if está no corpo da primeira e que a instrução
							else está associada à primeira instrução if. Os exercícios 4.27 a
							4.28 investigam ainda mais o problema do else oscilante.
						</p>
						<h4>Blocos</h4>
						<p>
							A instrução if normalmente espera somente uma instrução no seu
							corpo. Para incluir várias instruções no corpo de uma if (ou no
							corpo de um else de uma instrução if…else), inclua as instruções
							dentro de chaves. As instruções contidas em um par de chaves (como
							o corpo de um método) formam um bloco. Um bloco pode ser colocado
							em qualquer lugar em um método em que uma única instrução pode ser
							colocada.
						</p>
						<p>
							O exemplo a seguir inclui um bloco na parte else de uma instrução
							if…else: if (grade &#62;= 60) System.out.println("Passed"); else
							&#123; System.out.println("Failed"); System.out.println("You must
							take this course again."); &#125; Nesse caso, se grade é menor que
							60, o programa executa ambas as instruções no corpo do else e
							imprime Failed You must take this course again. Observe as chaves
							que cercam as duas instruções na cláusula else. Essas chaves são
							importantes. Sem as chaves, a instrução System.out.println("You
							must take this course again."); estaria fora do corpo na parte
							else da instrução if…else e seria executada independentemente se a
							nota fosse menor que 60. Os erros de sintaxe (por exemplo, quando
							não é colocada uma das chaves em um bloco do programa) são
							capturados pelo compilador. Um erro de lógica (por exemplo, quando
							não são colocadas as duas chaves em um bloco do programa) tem seu
							efeito no tempo de execução. Um erro fatal de lógica faz com que
							um programa falhe e finalize prematuramente. Um erro de lógica não
							fatal permite a um programa continuar a executar, mas faz com que
							produza resultados incorretos. Assim como um bloco pode ser
							colocado em qualquer lugar em que uma instrução individual pode
							ser colocada, também é possível ter uma instrução vazia. Lembre-se
							de que na Seção 2.8 a instrução vazia é representada colocando um
							ponto e vírgula (;), onde uma instrução normalmente estaria.
						</p>
						<h4>Operador condicional (?:)</h4>
						<p>
							O Java fornece o operador condicional (?:), que pode ser utilizado
							no lugar de uma instrução if...else. Isso pode tornar o código
							mais curto e mais claro. O operador condicional é o único operador
							ternário do Java (isto é, um operador que recebe três operandos).
							Juntos, os operandos e o símbolo ?: formam uma expressão
							condicional. O primeiro operando (à esquerda do ?) é uma expressão
							boolean (isto é, uma condição que é avaliada como um valor boolean
							— true ou false), o segundo operando (entre o ? e :) é o valor da
							expressão condicional se a expressão boolean for true e o terceiro
							operando (à direita do :) é o valor da expressão condicional se a
							expressão boolean for avaliada como false. Por exemplo, a
							instrução System.out.println(studentGrade &#62;= 60 ? "Passed" :
							"Failed"); imprime o valor do argumento da expressão condicional
							de println. A expressão condicional nessa instrução é avaliada
							para a string "Passed" se a expressão boolean studentGrade &#62;=
							60 for verdadeira e para a string "Failed" se a expressão boolean
							for falsa. Portanto, essa instrução com o operador condicional
							realiza essencialmente a mesma função da instrução if…else
							mostrada anteriormente nesta seção. A precedência do operador
							condicional é baixa, então a expressão condicional inteira
							normalmente é colocada entre parênteses. Veremos que as expressões
							condicionais podem ser utilizadas em algumas situações nas quais
							as instruções if…else não podem.{" "}
						</p>
						<h4>Instrução de repetição while</h4>
						<p>
							Uma instrução de repetição permite especificar que um programa
							deve repetir uma ação enquanto alguma condição permanece
							verdadeira. A instrução de pseudocódigo Enquanto houver mais itens
							em minha lista de compras Comprar o próximo item e riscá-lo da
							minha lista descreve a repetição durante uma viagem de compras. A
							condição “enquanto houver mais itens em minha lista de compras”
							pode ser verdadeira ou falsa. Se ela for verdadeira, então a ação
							“Compre o próximo item e risque-o de minha lista” é realizada.
							Essa ação será realizada repetidamente, enquanto a condição
							permanecer verdadeira. A(s) instrução(ões) contida(s) na instrução
							de repetição While constitui(em) seu corpo, que pode ser uma
							instrução única ou um bloco. Por fim, a condição se tornará falsa
							(quando o último item da lista de compras tiver sido comprado e
							removido). Nesse ponto, a repetição termina e a primeira instrução
							depois da instrução de repetição é executada. Como exemplo da
							instrução de repetição while do Java, considere um segmento de
							programa projetado para encontrar a primeira potência de 3 maior
							que 100. Suponha que a variável int product tenha sido
							inicializada como 3. Depois que a instrução while a seguir é
							executada, product contém o resultado: while (product &#60;= 100)
							product = 3 * product; Cada iteração da instrução while multiplica
							product por 3, então product assume os valores 9, 27, 81 e 243,
							sucessivamente. Quando product é 243, product &#60;= 100 torna-se
							falso. Isso termina a repetição, portanto o valor final de product
							é 243. Nesse ponto, a execução de programa continua com a próxima
							instrução depois da instrução while.
						</p>
						<h4>Formulando algoritmos: repetição controlada por contador</h4>
						<p>
							Para ilustrar como os algoritmos são desenvolvidos, resolvemos
							duas variações de um problema que tira a média das notas dos
							alunos. Considere a seguinte declaração do problema: Uma classe de
							dez alunos se submeteu a um questionário. As notas (inteiros no
							intervalo 0–100) para esse questionário estão disponíveis.
							Determine a média da classe no questionário. A média da classe é
							igual à soma das notas divididas pelo número de alunos. O
							algoritmo para resolver esse problema em um computador deve
							inserir cada nota, armazenar o total de todas as notas inseridas,
							realizar o cálculo da média e imprimir o resultado. O algoritmo em
							pseudocódigo com repetição controlada por contador Vamos utilizar
							o pseudocódigo para listar as ações a executar e especificar a
							ordem em que elas devem ser executadas. Utilizamos repetição
							controlada por contador para inserir as notas uma por vez. Essa
							técnica utiliza uma variável chamada contador (ou variável de
							controle) para controlar o número de vezes que um conjunto de
							instruções será executado. A repetição controlada por contador
							costuma ser chamada de repetição definida, porque o número de
							repetições é conhecido antes de o loop começar a executar. Nesse
							exemplo, a repetição termina quando o contador excede 10. Esta
							seção apresenta um algoritmo de pseudocódigo totalmente
							desenvolvido (Figura 4.7) e um programa Java correspondente
							(Figura 4.8) que implementa o algoritmo. Na Seção 4.10,
							demonstramos como utilizar o pseudocódigo para desenvolver esse
							algoritmo a partir do zero. Observe as referências no algoritmo da
							Figura 4.7 a um total e a um contador. Um total é uma variável
							utilizada para acumular a soma de vários valores. Um contador é
							uma variável utilizada para contar — nesse caso, o contador de
							notas indica qual das 10 notas está em vias de ser inserida pelo
							usuário. Variáveis utilizadas para armazenar totais normalmente
							são inicializadas como zero antes de serem utilizadas em um
							programa.
						</p>
						<p>
							1 Configure o total como zero 2 Configure o contador de notas como
							um 3 4 Enquanto contador de notas for menor ou igual a dez 5
							Solicite para o usuário inserir a próxima nota 6 Insira a próxima
							nota 7 Adicione a nota ao total 8 Adicione um ao contador de notas
							9 10 Configure a média da classe como o total dividido por dez 11
							Exibe a média da classe
						</p>
						<h4>Variáveis locais no método main</h4>
						<p>
							A linha 10 declara e inicializa a variável Scanner input,
							utilizada para ler os valores inseridos pelo usuário. As linhas
							13, 14, 20 e 26 declaram as variáveis locais total, gradeCounter,
							grade e average, respectivamente, como sendo do tipo int. A
							variável grade armazena a entrada de usuário. Essas declarações
							aparecem no corpo do método main. Lembre-se de que as variáveis
							declaradas no corpo de um método são variáveis locais e podem ser
							utilizadas apenas da linha de sua declaração até a chave direita
							de fechamento da declaração de método. A declaração de uma
							variável local deve aparecer antes de a variável ser utilizada
							nesse método. Uma variável local não pode ser acessada fora do
							método em que é declarada. A variável grade, declarada no corpo do
							loop while, só pode ser usada nesse bloco.
						</p>
						<h4>Observações sobre a divisão de inteiros e truncamento</h4>
						<p>
							O cálculo da média realizado pelo método main produz um resultado
							inteiro. A saída do programa indica que a soma dos valores das
							notas na execução de exemplo é 846, que, quando dividido por 10,
							deve produzir o número de ponto flutuante 84,6. Entretanto, o
							resultado do cálculo total / 10 (linha 26 da Figura 4.8) é o
							inteiro 84, porque total e 10 são ambos inteiros. Dividir dois
							inteiros resulta em divisão de inteiro — qualquer parte
							fracionária do cálculo é truncada (isto é, perdida). Na próxima
							seção veremos como obter um resultado de ponto flutuante a partir
							do cálculo da média. Erro comum de programação 4.4 Assumir que
							divisão de inteiros arredonda (em vez de truncar) pode levar a
							resultados incorretos. Por exemplo, 7 ÷ 4, que produz 1,75 na
							aritmética convencional, é truncado para 1 na aritmética de
							inteiros, em vez de arredondado para 2.
						</p>
						<h4>Uma nota sobre estouro aritmético</h4>
						<p>
							Na Figura 4.8, a linha 21 total = total + grade; // adiciona grade
							a total adicionou cada grade inserida pelo usuário ao total. Mesmo
							essa simples instrução tem um potencial problema — adicionar os
							inteiros pode resultar em um valor que é muito grande para ser
							armazenado em uma variável int. Isso é conhecido como estouro
							aritmético e provoca um comportamento indefinido, que pode levar a
							resultados indesejados (http://en.wikipedia.org/
							wiki/Integer_overflow#Security_ ramifications). O programa
							Addition da Figura 2.7 teve o mesmo problema na linha 23, que
							calculou a soma dos dois valores int inseridos pelo usuário: sum =
							number1 + number2; // adiciona números, depois armazena total na
							soma Os valores máximos e mínimos que podem ser armazenados em uma
							variável int são representados pelas constantes MIN_VALUE e
							MAX_VALUE, respectivamente, que são definidos na classe Integer.
							Há constantes semelhantes para outros tipos de números inteiros e
							para tipos de ponto flutuante. Cada tipo primitivo tem um tipo de
							classe correspondente no pacote java.lang. Você pode ver os
							valores dessas constantes na documentação on-line de cada classe.
							A documentação on-line para a classe Integer está localizada em:
							http://docs.oracle.com/javase/7/docs/api/java/lang/Integer.html É
							considerada boa prática garantir, antes de executar cálculos
							aritméticos como aqueles na linha 21 da Figura 4.8 e linha 23 da
							Figura 2.7, que eles não irão estourar. O código para fazer isso é
							mostrado no website da CERT www.securecoding.cert.org — apenas
							procure a diretriz “NUM00-J”. O código usa os operadores && (AND
							lógico) e || (OR lógico), que são introduzidos no Capítulo 5. No
							código de força industrial, você deve executar verificações como
							aquelas para todos os cálculos.
						</p>
						<h4>Uma análise mais profunda sobre receber entrada de usuário</h4>
						<p>
							Sempre que um programa recebe entrada de usuário, vários problemas
							podem ocorrer. Por exemplo, na linha 20 da Figura 4.8, int grade =
							input.nextInt(); // insere a próxima nota supomos que o usuário
							irá inserir um número inteiro para a nota no intervalo de 0 a 100.
							Mas a pessoa que insere uma nota pode digitar um número inteiro
							menor que 0, um número inteiro maior que 100, um número inteiro
							fora do intervalo de valores que podem ser armazenados em uma
							variável int, um número contendo um ponto decimal ou um valor
							contendo letras ou símbolos especiais que nem mesmo é um número
							inteiro. Para garantir que as entradas sejam válidas, programas de
							produção robustos devem testar todos os possíveis casos errôneos.
							Um programa que lê notas deve validar as notas usando a
							verificação de intervalo para garantir que elas são valores no
							intervalo de 0 a 100. Você pode então solicitar que o usuário
							reinsira qualquer valor que esteja fora do intervalo. Se um
							programa requer entradas de um conjunto específico de valores (por
							exemplo, códigos de produtos não sequenciais), você pode garantir
							que cada entrada corresponda a um valor no conjunto.
						</p>
						<h4>Formulando algoritmos: repetição controlada por sentinela</h4>
						<p>
							Vamos generalizar o problema de média da classe da Seção 4.9.
							Considere o seguinte problema: Desenvolva um programa para tirar a
							média da classe que processe as notas de acordo com um número
							arbitrário de alunos toda vez que é executado. No exemplo anterior
							de média da classe, a declaração do problema especificou o número
							de alunos, assim o número de notas (10) era conhecido
							antecipadamente. Neste exemplo, nenhuma indicação é dada de
							quantas notas o usuário irá inserir durante a execução do
							programa. O programa deve processar um número arbitrário de notas.
							Como podemos determinar quando parar de inserir as notas? Como
							saber quando calcular e imprimir a média da classe? Uma maneira de
							resolver esse problema é utilizar um valor especial chamado valor
							de sentinela (também chamado valor de sinal, valor fictício ou
							valor de flag) para indicar “final de entrada de dados”. O usuário
							insere as notas até que todas as notas legítimas tenham sido
							inseridas. O usuário então digita o valor de sentinela para
							indicar que nenhuma outra nota será inserida. A repetição
							controlada por sentinela é frequentemente chamada repetição
							indefinida, uma vez que o número de repetições não é conhecido
							antes de o loop iniciar a execução. Obviamente, deve-se escolher
							um valor de sentinela que não possa ser confundido com um valor
							aceitável de entrada. As notas em um questionário são inteiros não
							negativos, portanto, para esse problema, –1 é um valor aceitável
							de sentinela. Desse modo, uma execução do programa de média de
							classe talvez processe um fluxo de entradas como 95, 96, 75, 74,
							89 e –1. O programa então computaria e imprimiria a média de
							classe para as notas 95, 96, 75, 74 e 89; como –1 é o valor de
							sentinela, ele não deve entrar no cálculo da média.
						</p>
						<h4>Chaves em uma instrução while</h4>
						<p>
							Observe o bloco da instrução while na Figura 4.10 (linhas 23 a
							30). Sem as chaves, o loop consideraria o seu corpo como sendo
							apenas a primeira instrução, o que adiciona grade a total. As
							últimas três instruções no bloco iriam cair fora do corpo do loop,
							fazendo com que o computador interprete o código incorretamente
							como a seguir: while (grade != -1) total = total + grade; //
							adiciona grade a total gradeCounter = gradeCounter + 1; //
							incrementa counter // solicita entrada e lê a próxima nota
							fornecida pelo usuário System.out.print("Enter grade or -1 to
							quit: "); grade = input.nextInt(); O código anterior resultaria em
							um loop infinito no programa se o usuário não inserisse o
							sentinela -1 na linha 19 (antes da instrução while).{" "}
						</p>

						<h4>Conversão explícita e implícita entre tipos primitivos</h4>
						<p>
							Se pelo menos uma das notas foi inserida, a linha 37 da Figura
							4.10 calcula a média das notas. Lembre-se de que na Figura 4.8 a
							divisão de inteiros fornece um resultado inteiro. Embora a
							variável average seja declarada como uma double, se tivéssemos
							escrito o cálculo da média como double average = total /
							gradeCounter; perderia a parte fracionária do quociente antes de o
							resultado da divisão ser atribuído a average. Isso ocorre porque
							total e gradeCounter são ambos inteiros e a divisão por inteiros
							fornece um resultado inteiro. A maioria das médias não são números
							inteiros (por exemplo, 0, –22 e 1024). Por essa razão, calculamos
							a média da classe nesse exemplo como um número de ponto flutuante.
							Para realizar um cálculo de ponto flutuante com valores inteiros,
							devemos temporariamente tratar esses valores como números de ponto
							flutuante para utilização no cálculo. O Java fornece o operador
							unário de coerção para realizar essa tarefa. A linha 37 da Figura
							4.10 utiliza o operador de coerção (double) — um operador unário —
							para criar uma cópia temporária de ponto flutuante do seu operando
							total (que aparece à direita do operador). A utilização de um
							operador de coerção dessa maneira é chamada de conversão explícita
							ou coerção de tipos. O valor armazenado em total ainda é um
							inteiro. O cálculo agora consiste em um valor de ponto flutuante
							(a cópia double temporária de total) dividido pelo inteiro
							gradeCounter. O Java só pode avaliar expressões aritméticas em que
							os tipos dos operadores são idênticos. Para garantir isso, o Java
							executa uma operação chamada promoção (ou conversão implícita) nos
							operandos selecionados. Por exemplo, em uma expressão que contém
							valores int e double, os valores int são promovidos para valores
							double para uso na expressão. Nesse exemplo, o valor de
							gradeCounter é promovido para o tipo double, então a divisão de
							ponto flutuante é realizada e o resultado do cálculo é atribuído a
							average. Contanto que o operador de coerção (double) seja aplicado
							a qualquer variável no cálculo, o cálculo produzirá um resultado
							double. Mais adiante neste capítulo, discutiremos todos os tipos
							primitivos. Você aprenderá mais sobre as regras de promoção na
							Seção 6.7. Erro comum de programação 4.6 Um operador de coerção
							pode ser utilizado para conversão entre tipos numéricos e
							primitivos, como int e double e entre tipos por referência
							relacionados (como discutiremos no Capítulo 10, Programação
							orientada a objetos: polimorfismo e interfaces). Aplicar uma
							coerção ao tipo errado pode causar erros de compilação ou erros de
							tempo de execução. Um operador de conversão é formado colocando o
							nome de qualquer tipo entre parênteses. O operador é um operador
							unário (isto é, um operador que recebe somente um operando). O
							Java também suporta versões unárias de operadores de adição (+) e
							subtração (–), portanto você pode escrever expressões como –7 ou
							+5. Os operadores de coerção são associados da direita para a
							esquerda e têm a mesma precedência que outros operadores unários
							como + unário e – unário. Essa precedência é um nível mais alto do
							que aquela dos operadores multiplicativos *, / e %. (Consulte a
							tabela de precedência de operadores no Apêndice A). Indicamos o
							operador de coerção com a notação (tipo) nas nossas tabelas de
							precedência para indicar que qualquer nome de tipo pode ser
							utilizado para formar um operador de coerção. A linha 42 exibe a
							média da classe. Nesse exemplo, exibimos a média de classe
							arredondada para o centésimo mais próximo. O especificador de
							formato %.2f na string de controle de formato de printf indica que
							o valor da variável average deve ser exibido com dois dígitos de
							precisão à direita do ponto de fração decimal — indicado por .2 no
							especificador de formato. As três notas inseridas durante a
							execução do exemplo GradeBookTest (Figura 4.10) totalizam 257, o
							que produz a média 85,666666…. O método printf utiliza a precisão
							no especificador de formato para arredondar o valor de acordo com
							o número especificado de dígitos. Nesse programa, a média é
							arredondada para a posição dos centésimos e é exibida como 85,67.
						</p>
						<h4>Operadores de atribuição compostos</h4>
						<p>
							Os operadores de atribuição compostos abreviam expressões de
							atribuição. Instruções como variável = variável operador
							expressão; onde operador é um dos operadores binários +, –, *, /
							ou % (ou outros que discutiremos mais adiante no texto), pode ser
							escrita na forma variável operando = expressão; Por exemplo, você
							pode abreviar a instrução c = c + 3; com o operador composto de
							atribuição de adição, +=, como c += 3; O operador += adiciona o
							valor da expressão na sua direita ao valor da variável na sua
							esquerda e armazena o resultado na variável no lado esquerdo do
							operador. Portanto, a expressão de atribuição c += 3 adiciona 3 a
							c. A Figura 4.13 mostra os operadores
						</p>

						<img
							src={compositeImg}
							alt="composite assignment img"
							className="img-fluid"
						/>

						<h4>Operadores de incremento e decremento</h4>
						<p>
							O Java fornece dois operadores unários (resumidos na Figura 4.14)
							para adicionar 1 ou subtrair 1 do valor de uma variável numérica.
							Esses são os operadores de incremento unários, ++, e os operadores
							de decremento unários, ––. Um programa pode incrementar por 1 o
							valor de uma variável chamada c utilizando o operador de
							incremento, ++, em vez da expressão c = c + 1 ou c += 1. Um
							operador de incremento ou de decremento que é colocado antes de
							uma variável é chamado de operador de pré-incremento ou operador
							de pré-decremento, respectivamente. Um operador de incremento ou
							de decremento que é colocado depois de uma variável é chamado de
							operador de pós-incremento ou operador de pós-decremento,
							respectivamente.
						</p>

						<img
							src={incrementDecrementImg}
							alt="increment and decrement img"
							className="img-fluid"
						/>

						<p>
							Utilizar o operador de pré-incremento (ou de pré-decremento) para
							adicionar (ou subtrair) 1 de uma variável é conhecido como
							pré-incrementar (ou pré-decrementar). Isso faz com que a variável
							seja incrementada (decrementada) por 1; então o novo valor da
							variável é utilizado na expressão em que ela aparece. Utilizar o
							operador de pós-incremento (ou pós-decremento) para adicionar (ou
							subtrair) 1 de uma variável é conhecido como pós-incrementar (ou
							pós-decrementar). Isso faz com que o valor atual da variável seja
							utilizado na expressão em que ele aparece, então o valor da
							variável é incrementado (decrementado) por 1
						</p>
						<p>
							Ao incrementar ou decrementar uma variável em uma instrução
							isolada, as formas de pré-incremento ou pós-incremento têm o mesmo
							efeito, assim como as formas de pré-decremento ou pós-decremento
							têm o mesmo efeito. Apenas quando uma variável aparece no contexto
							de uma expressão maior é que pré-incrementar e pós-incrementar a
							variável tem efeitos diferentes (e correspondentemente para
							pré-decrementar e pós-decrementar)
						</p>
						<h4>Precedência e associatividade de operador</h4>
						<p>
							A Figura 4.16 mostra a precedência e a associatividade dos
							operadores que apresentamos. Eles são mostrados de cima para baixo
							em ordem decrescente de precedência. A segunda coluna descreve a
							associatividade dos operadores em cada nível de precedência. O
							operador condicional (?:); os operadores unários de incremento
							(++), decremento (––), adição (+) e de subtração (–); os
							operadores de coerção e os de atribuição =, +=, -=, *=, /= e %=
							associam da direita para a esquerda. Todos os outros operadores na
							tabela de precedência de operadores na Figura 4.16 associam da
							esquerda para a direita. A terceira coluna lista o tipo de cada
							grupo de operadores.
						</p>

						<img src={precedenceImg} alt="precende img" className="img-fluid" />

						<h4>Tipos primitivos</h4>

						<p>
							A tabela no Apêndice D lista os oito tipos primitivos em Java.
							Como ocorre com suas linguagens predecessoras, C e C++, o Java
							requer que todas as variáveis tenham um tipo. Por essa razão, o
							Java é referido como linguagem fortemente tipada. Em C e C++, os
							programadores frequentemente têm de escrever versões separadas dos
							programas a fim de que ele suporte diferentes plataformas de
							computador, uma vez que não há garantia de que tipos primitivos
							sejam idênticos entre um computador e outro. Por exemplo, um int
							em uma máquina pode ser representado por 16 bits (2 bytes) de
							memória, em uma segunda máquina por 32 bits (4 bytes) e em outra
							máquina por 64 bits (8 bytes). No Java, valores int são sempre de
							32 bits (4 bytes). Dica de portabilidade 4.1 Os tipos primitivos
							em Java são portáveis entre todas as plataformas de computador que
							suportam Java. Cada tipo no Apêndice D é listado com seu tamanho
							em bits (há oito bits em um byte) e seu intervalo de valores. Como
							os projetistas do Java querem assegurar a portabilidade, eles
							utilizam padrões internacionalmente reconhecidos para os dois
							formatos de caracteres (Unicode; para informações adicionais,
							visite www.unicode.org) e números de ponto flutuante (IEEE 754;
							para informações adicionais, visite grouper.ieee.org/groups/754/).
							Lembre-se da Seção 3.2: as variáveis dos tipos primitivos
							declaradas fora de um método como campos de uma classe recebem
							automaticamente valores padrão, a menos que sejam explicitamente
							inicializadas. As variáveis de instância dos tipos char, byte,
							short, int, long, float e double recebem o valor 0 por padrão.
							Atribui-se às variáveis de instância do tipo boolean o valor false
							por padrão. As variáveis de instância do tipo por referência são
							inicializadas por padrão para o valor null.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Control1;
