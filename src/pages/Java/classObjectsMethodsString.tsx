import Sidebar from "components/Sidebar";
import { JAVA_LIST } from "resources/consts";

const Introduction = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-start">
					<div className="col-4">
						<Sidebar list={JAVA_LIST} />
					</div>
					<div className="col-8 base-card">
						<h3>Introdução a classes, objetos, métodos e strings</h3>
						<h4>Variáveis de instância</h4>
						<p>
							Variáveis de instância de uma classe armazenam dados para cada
							objeto (isto é, cada instância) da classe
						</p>
						<h4>Declaração de classe</h4>
						<p>
							public class Account A palavra-chave public (explicada no Capítulo
							8 em detalhes) é um modificador de acesso. Por enquanto,
							simplesmente declaramos toda classe public. Cada declaração de
							classe public deve ser armazenada em um arquivo com o mesmo nome
							que a classe e terminar com a extensão .java; do contrário,
							ocorrerá um erro de compilação.
						</p>
						<p>
							Cada declaração de classe contém a palavra-chave class seguida
							imediatamente pelo nome da classe, nesse caso, Account. Cada corpo
							de classe é inserido entre um par de chaves esquerda e direita
						</p>
						<p>
							Nomes de classes, de método e de variável são identificadores e,
							por convenção, todos usam o mesmo esquema de nomeação com a
							notação camelo que discutimos no Capítulo 2. Também por convenção,
							os nomes de classe começam com uma letra maiúscula, e os de
							métodos e de variáveis iniciam com uma letra minúscula.
						</p>
						<p>
							{" "}
							um objeto tem atributos, implementados como variáveis de instância
							que o acompanham ao longo da sua vida. As variáveis de instância
							existem antes que os métodos sejam chamados em um objeto, enquanto
							eles são executados e depois que a execução deles foi concluída.
							Cada objeto (instância) da classe tem sua própria cópia das
							variáveis de instância da classe. Uma classe normalmente contém um
							ou mais métodos que manipulam as variáveis de instância
							pertencentes aos objetos particulares dela. Variáveis de instância
							são declaradas dentro de uma declaração de classe, mas fora do
							corpo dos métodos da classe. A linha 7 private String name; //
							variável de instância declara uma variável de instância name do
							tipo String
						</p>
						<h4>Parâmetros são variáveis locais</h4>
						<p>
							No Capítulo 2, declaramos todas as variáveis de um aplicativo no
							método main. Variáveis declaradas no corpo de um método específico
							(como main) são variáveis locais que somente podem ser utilizadas
							nele. Cada método só pode acessar suas próprias variáveis locais,
							não aquelas dos outros. Quando esse método terminar, os valores de
							suas variáveis locais são perdidos. Os parâmetros de um método
							também são variáveis locais dele.
						</p>

						<h4>Instância de um objeto — palavra-chave new e construtores</h4>
						<p>
							. A palavra-chave new estabelece um novo objeto da classe
							especificada
						</p>
						<p>
							Um construtor, que é semelhante a um método, mas é chamado
							implicitamente pelo operador new para inicializar as variáveis de
							instância de um objeto quando este é criado.{" "}
						</p>

						<p>
							Diferentemente das variáveis locais, que não são inicializadas de
							forma automática, toda variável de instância tem um valor inicial
							padrão — fornecido pelo Java quando você não especifica o valor
							inicial da variável de instância. Portanto, não é exigido que as
							variáveis de instância sejam explicitamente inicializadas antes de
							serem utilizadas em um programa — a menos que elas devam ser
							inicializadas para valores diferentes dos seus padrões. O valor
							padrão para uma variável de instância do tipo String (como name
							nesse exemplo) é null
						</p>

						<h4>
							Compilação e execução de um aplicativo com múltiplas classes
						</h4>
						<p>
							Você deve compilar as classes nas figuras 3.1 e 3.2 para que possa
							executar o aplicativo. Essa é a primeira vez que você criou um
							aplicativo com múltiplas classes. A classe AccountTest tem um
							método main, a classe Account não. Para compilar esse aplicativo,
							primeiro mude para o diretório que contém os arquivos do
							código-fonte dele. Em seguida, digite o comando javac Account.java
							AccountTest.java para compilar ambas as classes de uma vez. Se o
							diretório que contém o aplicativo incluir apenas os arquivos desse
							aplicativo, você pode compilar ambas as classes com o comando
							javac *.java O asterisco (*) em *.java indica que todos os
							arquivos no diretório atual que têm a extensão de nome de arquivo
							“.java” devem ser compilados. Se ambas as classes forem compiladas
							corretamente — isto é, nenhum erro de compilação for exibido —
							você pode então executar o aplicativo com o comando java
							AccountTest
						</p>

						<h4>Método static main</h4>

						<p>
							{" "}
							Lembre-se de que main é um método especial que será sempre chamado
							automaticamente pela Java Virtual Machine (JVM) quando você
							executar um aplicativo. Você deve chamar a maioria dos outros
							métodos explicitamente para orientá-los a executar suas tarefas.
							As linhas 7 a 27 da Figura 3.2 declaram o método main. Uma parte
							essencial para permitir à JVM localizar e chamar o método main a
							fim de iniciar a execução do aplicativo é a palavra-chave static
							(linha 7), que indica que main é um método static. O método static
							é especial, porque você pode chamá-lo sem antes criar um objeto da
							classe na qual esse método é declarado{" "}
						</p>

						<h4>Notas sobre declarações import</h4>

						<p>
							Note a declaração import na Figura 3.2 (linha 3), que indica ao
							compilador que o programa utiliza a classe Scanner. Como você
							aprendeu no Capítulo 2, as classes System e String estão no pacote
							java.lang, que é importado implicitamente para todos os programas
							Java, assim eles podem usar as classes desse pacote sem
							importá-las explicitamente. A maioria das outras classes que você
							empregará nos programas Java precisa ser importada explicitamente.
							Há uma relação especial entre as classes que são compiladas no
							mesmo diretório, como as classes Account e AccountTest. Por
							padrão, essas classes são consideradas no mesmo pacote — conhecido
							como o pacote padrão. Classes no mesmo pacote são importadas
							implicitamente para os arquivos de código-fonte de outras classes
							nesse pacote. Assim, uma declaração import não é necessária quando
							uma classe adota outra no mesmo pacote — por exemplo, quando a
							classe AccountTest usa a classe Account. A declaração import na
							linha 3 não é exigida se nos referimos à classe Scanner ao longo
							desse arquivo como java.util. Scanner, que inclui o nome do pacote
							e o nome da classe completos. Isso é conhecido como nome de classe
							totalmente qualificado. Por exemplo, a linha 10 da Figura 3.2
							também pode ser escrita como java.util.Scanner input = new
							java.util.Scanner(System.in);
						</p>

						<h4>Tipos primitivos versus tipos por referência</h4>
						<p>
							Os tipos do Java são divididos em primitivos e por referência. No
							Capítulo 2, você trabalhou com variáveis do tipo int — um dos
							primitivos. Os outros tipos primitivos são boolean, byte, char,
							short, long, float e double, cada um dos quais discutiremos neste
							livro — eles estão resumidos no Apêndice D. Todos os tipos não
							primitivos são por referência, assim, as classes que especificam
							os objetos são por referência. Uma variável de tipo primitivo pode
							armazenar exatamente um valor de seu tipo declarado por vez. Por
							exemplo, uma variável int pode armazenar um número inteiro de cada
							vez. Quando outro valor é atribuído a essa variável, ele substitui
							o anterior — que é perdido. Lembre-se de que as variáveis locais
							não são inicializadas por padrão. Já as variáveis de instância de
							tipo primitivo são inicializadas por padrão — dos tipos byte,
							char, short, int, long, float e double como 0, e as do tipo
							boolean como false. Você pode especificar seu próprio valor
							inicial para uma variável do tipo primitivo atribuindo a ela um
							valor na sua declaração, como em private int numberOfStudents =
							10; Os programas utilizam as variáveis de tipo por referência
							(normalmente chamadas referências) para armazenar as localizações
							de objetos na memória do computador. Dizemos que essa variável
							referencia um objeto no programa. Objetos que são referenciados
							podem conter muitas variáveis de instância. A linha 10 da Figura
							3.2: Scanner input = new Scanner(System.in); cria um objeto da
							classe Scanner, então atribui à variável input uma referência a
							esse objeto Scanner. A linha 13 da Figura 3.2: Account myAccount =
							new Account(); desenvolve um objeto da classe Account, então
							atribui à variável myAccount uma referência a esse objeto Account.
							Variáveis de instância de tipo por referência, se não forem
							inicializadas explicitamente, o são por padrão para o valor null —
							que representa uma “referência a nada”. É por isso que a primeira
							chamada para getName na linha 16 da Figura 3.2 retorna null — o
							valor de name ainda não foi definido, assim o valor padrão inicial
							null é retornado. Para chamar métodos em um objeto, você precisa
							de uma referência a ele. Na Figura 3.2, as instruções no método
							main usam a variável myAccount para chamar os métodos getName
							(linhas 16 e 26) e setName (linha 21) para interagir com o objeto
							Account. Variáveis de tipo primitivo não fazem referência a
							objetos, assim elas não podem ser usadas para chamar métodos.
						</p>

						<h4>Construtor</h4>
						<p>
							Ao declarar uma classe, você pode fornecer seu próprio construtor
							a fim de especificar a inicialização personalizada para objetos de
							sua classe. Por exemplo, você pode querer especificar um nome para
							um objeto Account quando ele é criado, como na linha 10 da Figura
							3.6: Account account1 = new Account("Jane Green"); Nesse caso, o
							argumento "Jane Green" de String é passado para o construtor do
							objeto Account e é usado para inicializar a variável de instância
							name. A instrução anterior requer que a classe forneça um
							construtor que recebe apenas um parâmetro String. A Figura 3.5
							contém uma classe Account modificada com esse construtor.
						</p>
						<p>public Account(String name) </p>
						<h4>Declaração do construtor de Account</h4>
						<p>
							As linhas 9 a 12 da Figura 3.5 declaram o construtor de Account.
							Um construtor deve ter o mesmo nome que a classe. Já uma lista de
							parâmetros de um construtor especifica que ele requer um ou mais
							dados para executar sua tarefa. A linha 9 indica que o construtor
							tem um parâmetro String chamado name. Ao criar um novo objeto
							Account (como veremos na Figura 3.6), você passará o nome de uma
							pessoa para o construtor, que receberá esse nome no parâmetro
							name. O construtor, então, atribuirá name à instância variável
							name
						</p>
						<h4>
							Parâmetro name do construtor da classe Account e método setName
						</h4>
						<p>
							Lembre-se da Seção 3.2.1 que os parâmetros de método são variáveis
							locais. Na Figura 3.5, o construtor e o método setName têm um
							parâmetro chamado name. Embora esses parâmetros tenham o mesmo
							identificador (name), o parâmetro na linha 9 é uma variável local
							do construtor que não é visível para o método setName, e aquele na
							linha 15 é uma variável local de setName que não é visível para o
							construtor
						</p>
						<h4>
							Classe AccountTest: inicialização de objetos Account quando eles
							são criados
						</h4>
						<p>
							O programa AccountTest (Figura 3.6) inicializa dois objetos
							Account usando o construtor. A linha 10 cria e inicializa o objeto
							Account denominado account1. A palavra-chave new solicita memória
							do sistema para armazenar o objeto Account, então chama
							implicitamente o construtor da classe correspondente para
							inicializá-lo. A chamada é indicada pelos parênteses após o nome
							da classe, que contêm o argumento "Jane Green" usado para
							inicializar o nome do novo objeto. A expressão de criação da
							instância de classe na linha 10 retorna uma referência ao novo
							objeto, que é atribuído à variável account1. A linha 11 repete
							esse processo, passando o argumento "John Blue" a fim de
							inicializar o nome para account2. As linhas 14 e 15 utilizam o
							método getName de cada objeto para obter os nomes e mostrar que
							eles, de fato, foram inicializados quando os objetos foram
							criados. A saída mostra nomes diferentes, confirmando que cada
							Account mantém sua própria cópia da variável de instância name.
						</p>
						<h4>Construtores não podem retornar valores</h4>
						<p>
							Uma diferença importante entre construtores e métodos é que os
							construtores não podem retornar valores, portanto, não podem
							especificar um tipo de retorno (nem mesmo void). Normalmente, os
							construtores são declarados public — mais adiante no livro
							explicaremos quando usar construtores private.
						</p>

						<h4>Construtor padrão</h4>
						<p>
							Lembre-se de que a linha 13 da Figura 3.2 Account myAccount = new
							Account(); usou new para criar um objeto Account. Os parênteses
							vazios depois de “new Account” indicam uma chamada para o
							construtor padrão da classe — em qualquer classe que não declare
							explicitamente um construtor, o compilador fornece um tipo padrão
							(que sempre não tem parâmetros). Quando uma classe tem somente o
							construtor padrão, as variáveis de instância da classe são
							inicializadas de acordo com seus valores padrões. Na Seção 8.5,
							você aprenderá que as classes podem ter múltiplos construtores.
						</p>
						<h4>
							Não há nenhum construtor padrão em uma classe que declara um
							construtor
						</h4>
						<p>
							Se você declarar um construtor para uma classe, o compilador não
							criará um construtor padrão para ela. Nesse caso, você não será
							capaz de estabelecer um objeto Account com a expressão de criação
							de instância da classe new Account(), como fizemos na Figura 3.2 —
							a menos que o construtor personalizado que você declare não receba
							nenhum parâmetro.
						</p>

						<h4>Ponto flutuante</h4>
						<p>
							O Java fornece dois tipos primitivos para armazenar números de
							ponto flutuante na memória — float e double. As variáveis do tipo
							float representam números de ponto flutuante de precisão simples e
							podem ter até sete dígitos significativos. Já as variáveis de tipo
							double representam números de ponto flutuante de dupla precisão.
							Esses exigem o dobro de memória que variáveis float e podem conter
							até 15 dígitos significativos — quase o dobro da precisão das
							variáveis float.
						</p>

						<p>
							A maioria dos programadores representa números de ponto flutuante
							com o tipo double. De fato, o Java trata todos os números de ponto
							flutuante que você digita no código-fonte de um programa (7,33 e
							0,0975, por exemplo) como valores double por padrão. Esses valores
							no código-fonte são conhecidos como literais de ponto flutuante.
						</p>

						<h4>Formatando números de ponto flutuante para exibição</h4>
						<p>
							Cada um dos balances é gerado por printf com o especificador de
							formato %.2f. O especificador de formato %f é utilizado para gerar
							saída de valores de tipo float ou double. O .2 entre % e f
							representa o número de casas decimais (2) que devem ser colocadas
							à direita do ponto decimal no número de ponto flutuante — também
							conhecido como a precisão do número. Qualquer valor de ponto
							flutuante com %.2f será arredondado para a casa decimal dos
							centésimos — por exemplo, 123,457 se tornaria 123,46 e 27,33379
							seria arredondado para 27,33.
						</p>

						<h4>Introduzindo métodos static</h4>
						<p>
							Um método static é chamado utilizando seu nome de classe seguido
							por um ponto (.) e o nome de método, como em
							NomeDaClasse.nomeDoMétodo(argumentos) Note que você não cria um
							objeto da classe
						</p>

						<p>
							String message =ÿ 14 ïString.format("Welcome, %s, to Java
							Programming!", name);ÿ
						</p>
						<p>
							As linhas 13 e 14 utilizam o método static String format para
							retornar uma String que contém uma saudação com o nome do usuário.
							O método format funciona como System.out.printf, exceto que format
							retorna a String formatada em vez de exibi-la em uma janela de
							comando.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Introduction;
