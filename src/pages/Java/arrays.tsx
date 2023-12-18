import Sidebar from "components/Sidebar";
import { JAVA_LIST } from "resources/consts";

const ARRAYSJAVA = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-start">
					<div className="col-4">
						<Sidebar list={JAVA_LIST} />
					</div>
					<div className="col-8 base-card">
						<h3>Arrays e ArraysLists</h3>
						<p>
							Objetos array são estruturas de dados consistindo em itens de
							dados do mesmo tipo relacionados. Arrays tornam conveniente
							processar grupos relacionados de valores. O comprimento de arrays
							permanece o mesmo depois que são criados.
						</p>
						<h4>Arrays</h4>
						<p>
							Um array é um grupo de variáveis (chamados elementos ou
							componentes) que contém valores todos do mesmo tipo. Os arrays são
							objetos; portanto, são considerados tipos por referência. Como
							você logo verá, o que em geral consideramos um array é, na
							verdade, uma referência a um objeto array na memória. Os elementos
							de um array podem ser tipos primitivos ou tipos por referênciaPara
							referenciar um elemento particular em um array, especificamos o
							nome da referência para o array e o número de posição do elemento
							no array. O número de posição do elemento é chamado de índice ou
							subscrito.
						</p>
						<p>
							Um programa refere-se a qualquer um desses elementos com uma
							expressão de acesso ao array que inclui o nome do array seguido
							pelo índice do elemento particular entre colchetes ([]). O
							primeiro elemento em cada array tem índice zero e às vezes é
							chamado de zero-ésimo elemento. Assim, os elementos de array c são
							c[0], c[1], c[2] etc. O índice mais alto no array c é 11, que é 1
							menor que 12 — o número de elementos no array. Nomes de array
							seguem as mesmas convenções que outros nomes de variável. Um
							índice deve ser um inteiro não negativo. Um programa pode utilizar
							uma expressão como um índice
						</p>
						<p>
							O nome do array é c. Cada objeto array conhece seu comprimento e
							armazena-o em uma variável de instância length. A expressão
							c.length retorna o comprimento do array c. Embora a variável de
							instância length de um array seja public, ela não pode ser
							alterada porque é uma variável final. Os 12 elementos desse array
							são chamados c[0], c[1], c[2], …, c[11]. O valor de c[0] é -45, o
							de c[1] é 6, o de c[2] é 0, o de c[7] é 62 e o de c[11] é 78. Para
							calcular a soma dos valores contidos nos primeiros três elementos
							de array c e armazenar o resultado na variável sum, escreveríamos
							sum = c[0] + c[1] + c[2]; Para dividir o valor de c[6] por 2 e
							atribuir o resultado à variável x, escreveríamos x = c[6] / 2;
						</p>
						<h4>Declarando e criando arrays</h4>
						<p>
							Os objetos array ocupam espaço na memória. Como outros objetos,
							arrays são criados com a palavra-chave new. Para um objeto array,
							especifique o tipo dos elementos do array e o número de elementos
							como parte de uma expressão de criação de array que utiliza a
							palavra-chave new. Tal expressão retorna uma referência que pode
							ser armazenada em uma variável de array. A declaração e a
							expressão de criação de arrays a seguir criam um objeto array que
							contém 12 elementos int e armazenam a referência do array na
							variável c do array: int[] c = new int[12];
						</p>
						<p>
							Quando um array é criado, cada um de seus elementos recebe um
							valor padrão — zero para os elementos de tipo primitivo numéricos,
							false para elementos boolean e null para referências.{" "}
						</p>
						<p>
							Outra forma de criar um array. int[] c; // declara a variável de
							array c = new int[12]; // cria o array; atribui à variável de
							array
						</p>
						<p>
							Um programa pode criar vários arrays em uma única declaração. A
							declaração seguinte reserva 100 elementos para b e 27 elementos
							para x: String[] b = new String[100], x = new String[27]; Quando o
							tipo de array e os colchetes são combinados no início da
							declaração, todos os identificadores na declaração são variáveis
							de array. Nesse caso, as variáveis b e x referem-se ao arrays
							String. Para maior legibilidade, preferimos declarar apenas uma
							variável por declaração. A declaração anterior é equivalente a:
							String[] b = new String[100]; // cria array b String[] x = new
							String[27]; // cria array x
						</p>
						<p>
							Quando apenas uma variável é declarada em cada declaração, os
							colchetes podem ser colocados após o tipo ou após o nome da
							variável de array, como em: String b[] = new String[100]; // cria
							array b String x[] = new String[27]; // cria array x mas é
							preferível colocar os colchetes depois do tipo.
						</p>

						<h4>Utilizando um inicializador de array</h4>
						<p>
							Você pode criar um array e inicializar seus elementos com um
							inicializador de array — uma lista separada por vírgulas (chamada
							lista de inicializador) das expressões entre chaves. Nesse caso, o
							comprimento do array é determinado pelo número de elementos na
							lista inicializadora. Por exemplo, int[] n = (10, 20, 30, 40, 50);
							chaves no lugar do parenteses.cria um array de cinco elementos com
							valores de índice de 0 a 4. O elemento n[0] é inicializado como
							10, n[1] é inicializado como 20 etc. Quando o compilador encontrar
							uma declaração de array que inclua uma lista de inicializador, ele
							conta o número de inicializadores na lista para determinar o
							tamanho do array, depois configura a operação new apropriada “nos
							bastidores”.
						</p>
						<p>
							A linha 8 utiliza o modificador final para declarar a variável
							constante ARRAY_LENGTH, com o valor 10. Variáveis constantes devem
							ser inicializadas antes de serem utilizadas e não podem ser
							modificadas depois. Se você tentar modificar uma variável final
							depois que ela é inicializada na declaração, o compilador emite
							uma mensagem de erro como cannot assign a value to final variable
							nomeDaVariável
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ARRAYSJAVA;
