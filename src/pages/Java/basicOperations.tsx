import Sidebar from "components/Sidebar";
import { JAVA_LIST } from "resources/consts";
import scapeImg from "../../assets/imgs/java/scape-sequency.png";

const BasicOperations = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-start">
					<div className="col-4">
						<Sidebar list={JAVA_LIST} />
					</div>
					<div className="col-8 base-card">
						<h3>Entrada/Saída e operadores</h3>

						<p>
							Um programa de computador é capaz de realizar essencialmente três
							operações: Entrada de dados, Processamento de dados e Saída de
							dados.
						</p>
						<p>
							Entrada de dados: quando o usuário informa dados para o programa.
							Os dados são armazenados em variáveis e informados por
							dispositivos de entrada &#40;teclado&#41;.
						</p>
						<p>
							Processamento de dados: quando o programa realiza os cálculos
							&#40;processador&#41;. O processamento de dados se dá pelo comando
							de atribuição &#40;=&#41;.
						</p>
						<p>
							Saída de dados: quando o programa informa dados para o usuário
							&#40;monitos&#41;. Também chamada de escrita, exemplo: "O programa
							está escrevendo dados".
						</p>
						<h5>Saída de dados em Java</h5>
						<p>
							Sem quebra de linha ao final: System.out.print&#40;"Bom
							dia!"&#41;;
							<br /> Com quebra de linha ao final: System.out.println&#40;"Bom
							dia!"&#41;;
						</p>
						<h5>Escrever o conteúdo de uma variável com ponto flutuante.</h5>
						<p>Exemplo: double x = 14.12345;</p>
						<p>System.out.println&#40;x&#41;; SEM FORMATAÇÃO.</p>
						<p>System.out.printf&#40;"%.2f%n", x&#41;; COM FORMATAÇÃO</p>
						<p>
							%n = quebra de linha &#40;independente de plataforma&#41;. Podendo
							ser também \n.
						</p>
						<p>
							%.2f = controle de casas decimais, no caso mostrará apenas duas
							casas decimais.
						</p>
						<p>
							O printf por padrão utiliza o separador decimal do computador.
							Para trocar por . utilizar Locale.setDefault&#40;Locale.US&#41;;
						</p>
						<h5>Concatenar vários elementos em um mesmo comando de escrita</h5>
						<p>
							print e println: <br /> elemento1 + elemento2 + ... + elementoN
							<br />
							System.out.println&#40;"Resultado = " + x + "metros"&#41;;
						</p>
						<p>
							printf
							<br /> "TEXTO1 %F TEXTO2 %F TEXTO3", variavel1, variavel2 <br />
							System.out.printf&#40;"Resultado = %.2f metros%n", x&#41;;
						</p>
						<p>
							%f = ponto flutuante <br />
							%d = inteiro <br /> %s = texto <br />
							%n = quebra de linha
						</p>
						<h5>Processamento de dados</h5>
						<p>
							O processamento de dados em Java é feito pelo comando de
							atribuição.
						</p>
						<p>
							variavel = expressao; <br />1 - A expressão é calculada <br /> 2 -
							O resultado da expressão é armazenado na variável.
						</p>
						<p>
							Exemplo: int x, y; <br /> x = 5; <br /> y = 2 * x; <br />
							System.out.println&#40;x&#41;;
						</p>
						<p>
							Boa prática
							<br />
							Sempre indique o tipo do número, se a expressão for de ponto
							flutuante &#40;não inteira&#41;.
							<br /> Para double use: .0 &#40;double a = 3.0;&#41; <br /> Para
							float use: f &#40;float b = 3f;&#41;.
						</p>

						<h5>Casting</h5>
						<p>
							int a, b; <br />
							double resultado;
							<br />
							<br />a = 5; <br />b = 2; <br /> resultado = a / b;{" "}
						</p>
						<p>
							O resultado será 2, porque é uma expressão com números inteiros.
						</p>
						<p>
							Para avisar o compilador que o resultado será um double, basta por
							&#40;double&#41; na frente da expressão, fazendo o casting da
							mesma.
							<br />
							resultado = &#40;double&#41; a / b;
						</p>
						<p>Casting = Conversão explícita dos valores.</p>
						<p>
							Outro possível uso do casting é quando queremos converter uma
							váriavel que é double para int, sendo assim, perdendo informação.
							O compilador avisa quando ocorre esse casting.
							<br />
							<br />
							double a; <br />
							int b; <br />
							<br />a = 5.0;
							<br />b = &#40;int&#41; a;
						</p>
						<h3>Entrada de dados em Java</h3>
						<p>
							Quando o usuário informa dados para o programa que são salvas
							dentro de variáveis, através de dispositivos de entrada. Também
							chamada de leitura, porque o programa está lendo dados.
						</p>
						<p>
							Para fazer entrada de dados, deve-se criar um objeto do tipo
							"Scanner" da seguinte forma:
							<br />
							Scanner sc = new Scanner&#40;System.in&#41;;
						</p>
						<p>
							Para a variável sc tipo Scanner funcionar, é necessário "import
							java.util.Scanner; e sc.close&#40;&#41; quando não precisar mais
							do objeto sc.
						</p>
						<h5>Para ler uma palavra &#40;texto sem espaços&#41;</h5>
						<p>
							Suponha uma variável tipo String declarada: <br />
							String x;
							<br />
							<br />x = sc.next&#40;&#41;;
						</p>
						<h5>Para ler um número inteiro</h5>
						<p>
							Suponha uma variável tipo int declarada:
							<br />
							<br />
							int x;
							<br />
							<br />x = sc.nextInt&#40;&#41;;
						</p>
						<h5>Para ler um número com ponto flutuante</h5>
						<p>
							Suponha uma variável tipo double declarada:
							<br /> double x; <br /> <br /> x = sc.nextDouble&#40;&#41;;
						</p>
						<p>
							OBS: para considerar o separador de decimais como ponto, antes da
							declaração do Scanner, faça: <br /> <br />
							Locale.setDefault&#40;Locale.US&#41;;
						</p>
						<p>
							OBS: o println ele pega a localidade independente, ou seja, vai
							imprimir o separador de casa decimal .
						</p>
						<p>
							O printf pega o separador decimal digitado. Para imprimir com o
							printf o ., utilizar o Locale.setDefault&#40;Locale.US&#41; no
							programa.
							<br />
							Caso esteja com o Locale.setDefault&#40;Locale.US&#41; e for
							digitado a , em vez do . o programa vai dar erro.s
						</p>
						<h5>Para ler um caractere</h5>
						<p>
							Suponha uma variável tipo char declarada: <br />
							<br />
							char x;
							<br /> <br /> x = sc.next&#40;&#41;.chartAt&#40;0&#41;
						</p>
						<h5>Para ler vários dados na mesma linha</h5>
						<p>
							String x;
							<br />
							int y;
							<br />
							double z;
							<br />
							<br />x = sc.next&#40;&#41;;
							<br />y = sc.nextInt&#40;&#41;;
							<br />z = sc.nextDouble&#40;&#41;;
						</p>
						<p>Apenas atribuir a variável declarada para seu respectivo sc.</p>
						<h5>Para ler um texto até a quebra de linha</h5>
						<p>
							String s1, s2, s3;
							<br />
							<br />
							s1 = sc.nextLine&#40;&#41;;
							<br />
							s2 = sc.nextLine&#40;&#41;;
							<br />
							s3 = sc.nextLine&#40;&#41;;
							<br />
						</p>
						<h5>Quebra de linha pendente</h5>
						<p>
							int x;
							<br />
							String s1, s2, s3;
							<br />
							<br />x = sc.nextInt&#40;&#41;;
							<br />
							s1 = sc.nextLine&#40;&#41;;
							<br />
							s2 = sc.nextLine&#40;&#41;;
							<br />
							s3 = sc.nextLine&#40;&#41;;
							<br />
						</p>
						<p>
							Quando você usa um comando de leitura diferente do
							nextLine&#40;&#41; e dá alguma quebra de linha, essa quebra de
							linha fica "pendente" na entrada padrão. <br />
							Se você então fizer um nextLine&#40;&#41;, aquela quebra de linha
							pendente será absorvida pelo nextLine&#40;&#41;.
						</p>
						<p>
							int x;
							<br />
							String s1, s2, s3;
							<br />
							<br />x = sc.nextInt&#40;&#41;;
							<br />
							sc.nextLine&#40;&#41;;
							<br />
							s1 = sc.nextLine&#40;&#41;;
							<br />
							s2 = sc.nextLine&#40;&#41;;
							<br />
							s3 = sc.nextLine&#40;&#41;;
							<br />
						</p>

						<h4>Gerando saída com o System.out.println</h4>
						<p>
							O objeto System.out — que é predefinido para você — é conhecido
							como objeto de saída padrão. Ele permite que um aplicativo Java
							exiba informações na janela de comando a partir da qual ele é
							executado. Em versões recentes do Microsoft Windows, a janela de
							comando chama-se Prompt de Comando. No Unix/Linux/Mac OS X, a
							janela de comando é chamada janela terminal ou shell. Muitos
							programadores simplesmente a chamam linha de comando. O método
							System.out.println exibe (ou imprime) uma linha de texto na janela
							de comando. A string entre parênteses na linha 9 é o argumento
							para o método. Quando System.out.println completa sua tarefa, ele
							posiciona o cursor de saída (o local em que o próximo caractere
							será exibido) no começo da linha seguinte na janela de comando.
							Isso é semelhante àquilo que acontece ao pressionar a tecla Enter
							depois de digitar em um editor de texto — o cursor aparece no
							início da próxima linha no documento.
						</p>
						<p>
							A primeira declaração usa o método print de System.out para exibir
							uma string. Cada instrução print ou println retoma a exibição dos
							caracteres a partir de onde a última instrução print ou println
							parou de exibi-los. Diferentemente de println, depois de exibir
							seu argumento, print não posiciona o cursor de saída no começo da
							próxima linha na janela de comando — o próximo caractere que o
							programa exibe aparecerá imediatamente depois do último caractere
							que print exibe.
						</p>
						<h4>Exibindo múltiplas linhas de texto com uma única instrução</h4>
						<p>
							Uma única instrução pode exibir múltiplas linhas utilizando
							caracteres de nova linha, os quais indicam aos métodos print e
							println de System.out quando posicionar o cursor de saída no
							começo da próxima linha na janela de comando. Como ocorre com
							linhas em branco, caracteres de espaço em branco e caracteres de
							tabulação, os caracteres de nova linha são caracteres de espaço em
							branco.
						</p>
						<p>System.out.println("Welcome\nto\nJava\nProgramming!");</p>
						<p>
							Os caracteres emparelhados \ e n (repetidos três vezes na
							instrução) não aparecem na tela. A barra invertida (\) é um
							caractere de escape, que tem um significado especial para os
							métodos print e println de System.out. Quando aparece uma barra
							invertida em uma string, o Java a combina com o próximo caractere
							para formar uma sequência de escape — \n representa o caractere de
							nova linha. Quando um caractere de nova linha surge em uma string
							sendo enviada para saída com System.out, esse caractere de nova
							linha faz com que o cursor de saída na tela se mova para o começo
							da próxima linha na janela de comando.
						</p>
						<p>
							http://docs.oracle.com/javase/specs/jls/se7/html/jls-3.html#jls-3.10.6
						</p>

						<img
							src={scapeImg}
							alt="Scape sequency img"
							className="img-fluid"
						/>

						<h4>Exibindo texto com printf</h4>

						<p>
							O método System.out.printf (f significa “formato”) exibe os dados
							formatados. A Figura 2.6 utiliza esse método para gerar a saída em
							duas linhas das strings “Welcome to" e “Java Programming!". As
							linhas 9 e 10 System.out.printf("%s%n%s%n", "Welcome to", "Java
							Programming!"); chamam o método System.out.printf para exibir a
							saída do programa. A chamada de método especifica três argumentos.
							Quando um método exige múltiplos argumentos, estes são colocados
							em uma lista separada por vírgulas. Chamar um método também é
							referido como invocar um método.
						</p>

						<p>
							O primeiro argumento do método printf é uma string de formato que
							pode consistir em texto fixo e especificadores de formato. A saída
							do texto fixo é gerada por printf exatamente como seria gerada por
							print ou println. Cada especificador de formato é um marcador de
							lugar para um valor e especifica o tipo da saída de dados.
							Especificadores de formato também podem incluir informações
							opcionais de formatação. Especificadores de formato iniciam com um
							sinal de porcentagem (%) seguido por um caractere que representa o
							tipo de dados. Por exemplo, o especificador de formato %s é um
							marcador de lugar para uma string. A string de formato na linha 9
							especifica que printf deve gerar a saída de duas strings, cada uma
							seguida por um caractere de nova linha. Na primeira posição do
							especificador de formato, printf substitui o valor do primeiro
							argumento depois da string de formato. Na posição do especificador
							de cada formato subsequente, printf substitui o valor do próximo
							argumento. Portanto, esse exemplo substitui “Welcome to" pelo
							primeiro %s e “Java Programming!" pelo segundo %s. O resultado
							mostra que duas linhas de texto são exibidas em duas linhas.
							Observe que, em vez de usar a sequência de escape \n, utilizamos o
							especificador de formato %n, que é uma linha separadora portável
							entre diferentes sistemas operacionais. Você não pode usar %n no
							argumento para System.out.print ou System.out. println; mas o
							separador de linha gerado por System.out.println depois que ele
							exibe seu argumento é portável em diferentes sistemas
							operacionais. O Apêndice I (na Sala Virtual, em inglês) apresenta
							mais detalhes sobre a formatação de saída com printf.
						</p>

						<h4>
							Declarando e criando um Scanner para obter entrada do usuário a
							partir do teclado
						</h4>
						<p>
							Uma variável é uma posição na memória do computador na qual um
							valor pode ser armazenado para utilização posterior em um
							programa. Todas as variáveis Java devem ser declaradas com um nome
							e um tipo antes que elas possam ser utilizadas. O nome de uma
							variável permite que o programa acesse o valor dela na memória. O
							nome de uma variável pode ser qualquer identificador válido — mais
							uma vez, uma série de caracteres consistindo em letras, dígitos,
							sublinhados (_) e sinais de cifrão ($) que não comecem com um
							dígito e não contenham espaços. O tipo de uma variável especifica
							o tipo de informação armazenada nessa posição na memória. Como
							ocorre com outras instruções, as instruções de declaração terminam
							com um ponto e vírgula (;). A linha 11 Scanner input = new
							Scanner(System.in); é uma instrução de declaração de variável que
							especifica o nome (input) e o tipo (Scanner) de uma variável
							utilizada nesse programa. Um Scanner permite a um programa ler os
							dados (por exemplo, números e strings) para utilização nele. Os
							dados podem ser provenientes de várias origens, como os digitados
							pelo usuário ou um arquivo do disco. Antes de utilizar um Scanner,
							você deve criá-lo e especificar a origem dos dados. O sinal de
							igual (=) na linha 11 indica que a variável Scanner input deve ser
							inicializada (isto é, preparada para utilização no programa) na
							sua declaração com o resultado da expressão à direita desse sinal
							— new Scanner(System.in). Essa expressão utiliza a palavra-chave
							new para criar um objeto Scanner que lê caracteres digitados pelo
							usuário no teclado. O objeto de entrada padrão, System.in, permite
							que aplicativos leiam bytes de informações digitadas pelo usuário.
							O Scanner traduz esses bytes em tipos (como ints) que podem ser
							utilizados em um programa.
						</p>

						<p>
							OBS: Por padrão, o pacote java.lang é importado em cada programa
							Java; portanto, java.lang é o único na Java API que não requer uma
							declaração import.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default BasicOperations;
