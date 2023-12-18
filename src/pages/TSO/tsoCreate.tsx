import Sidebar from "components/Sidebar";
import { TSO_LIST } from "resources/consts";

const TSOCreate = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-start">
					<div className="col-4">
						<Sidebar list={TSO_LIST} />
					</div>
					<div className="col-8 base-card">
						<h3>Criando as bibliotecas</h3>
						<p>coblib</p>
						<p>nomenclatura gr.aluno.coblib || c:\aluno/coblib.txt</p>
						<p>Os tamanhos dos arquivos devem ser definidos antes.</p>
						<p>Cada trilha tem capacidade de 50.000 caracteres</p>
						<p>O arquivo coblib na IBM é particionado</p>
						<p>3 - 2 para alocar DATASET</p>
						<p>3 - 4 para olhar o dataset</p>
						<p>Space units - Qual unidade vai ser utilizada</p>
						<p>Primary quantity - Comeca com determinada quantidade alocada</p>
						<p>
							Secondary quantity - Caso o sistema estoure a primary quantity,
							vai usar o Secodary quantity. Sendo que, a secondary quantity pode
							estourar 15 vezes.
						</p>
						<p>
							Directoy blocks. Cada bloco de diretorio cabe 6 programas. Fazer
							conta para determinar quantos necessários.
						</p>
						<p>Record Format - FB</p>
						<p>Record lenght - Quantos registros na linha</p>
						<p>
							Block size - 0 - O sistema calcula o melhor quando 0 é colocado
						</p>
						<p>Data set name type - PDS (Partitional dataset)</p>

						<h3>Editor de textos do TSO</h3>
						<p>Clicar 2</p>
						<p>criar um novo arquivo utilizando o member</p>
						<p>Comando RES: Para limpar o programa</p>
						<h4>Comandos de linhas</h4>
						<p>I, D, R, C, M</p>
						<p>
							todos os comandos pode colocar numero na frente para determinar a
							quantidade. Exempplo: i4 - Cria 4 linhas.
						</p>
						<p>I - Include - Para criar linhas</p>
						<p>D - Delete - Deletar linhas</p>
						<p>R - Repete - Repetir linhas</p>
						<p>
							C - Copy - C....A (AFTER) B (BEFORE) - Para copiar uma linha para
							determinado lugar. CC......CC......A/B. Para copiar várias linhas.
						</p>
						<p>
							M - Move. Funcionar igual ao comando C, no entanto, a linha
							original é deslocada.
						</p>
						<p>
							Para salvar digitar save em command. No entanto, o TSO se apertar
							f3 ele sai e salva automaticamente
						</p>

						<h4>Recursos avancados</h4>
						<p>Comando RES: Serve pra resetar os comandos</p>
						<p>Não usar acentos ou caracteres especiais</p>
						<p>Ligar insert para nao digita em cima</p>
						<p>Cobol trabalha com apenas letra maiuscula. Comando CAPS ON</p>
						<p>Comando num: Numera as linha a partir de 100</p>
						<p>Comando no num: volta para o sistema padrão.</p>
						<p>
							Scroll - Page - Avanca a pagina inteira | CSR (CURSOR) Muda de
							página a partir da posição do cursor.
						</p>
						<p> L NUMERO-LINHA - Localiza a linha.</p>
						<p>
							F conteudo - Localiza o conteudo. Para achar o proximo, utilizar
							F5.
						</p>
						<p>c conteudo outro-conteudo. Para trocar determinado conteudo</p>
						<p>
							c conteudo outro-conteudo all. Para trocar todas as ocorrencias do
							conteudo.
						</p>
						<p>Para sair sem salvar do editor, apertar f12.</p>
						<p>
							cut em determinando arquivo para copia-lo inteiro. Em outro
							arquivo, utilizar o paste para pegar o conteudo.
						</p>
						<p>
							Quanto utilizado com cc em bloco, copia apenas as linhas do cc. No
							outro programa colocar a/b e depois paste para saber onde vai ser
							colado.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default TSOCreate;
