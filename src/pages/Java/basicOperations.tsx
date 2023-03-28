import Sidebar from "components/Sidebar";
import { JAVA_LIST } from "resources/consts";

const BasicOperations = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar list={JAVA_LIST} />
          </div>
          <div className="col-8 base-card">
            <h3>Operações básicas de programação</h3>

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
              sc.nextLine&#40;&#41;;<br/>
              s1 = sc.nextLine&#40;&#41;;
              <br />
              s2 = sc.nextLine&#40;&#41;;
              <br />
              s3 = sc.nextLine&#40;&#41;;
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicOperations;
