import Sidebar from "components/Sidebar";
import { TSO_LIST } from "resources/consts";

const TSO = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-start">
					<div className="col-4">
						<Sidebar list={TSO_LIST} />
					</div>
					<div className="col-8 base-card">
						<h3>O que é TSO?</h3>
						<p>
							O Time Sharing Option faz parte do sistema operacional OS/390,
							ambos são produtos da IBM, é ele quem permite que os usuários
							criem uma sessão para interagir com o sistema z/OS. É praticamente
							um substituto dos cartões perfurados. O modo compartilhamento de
							tempo é uma técnica que permite que várias pessoas utilizem um
							mesmo sistema de forma simultânea, porém, sem interferir no
							trabalho uma da outra. Costuma ser usado por administradores e
							programadores de sistema mainframe, pois fornece:
						</p>
						<ul>
							<li>Editor de texto;</li>
							<li>
								Suporte a trabalhos em lote - execução de trabalhos sem
								interação do usuário final ou agendados para execução conforme
								os recursos;
							</li>
							<li>
								Depurador para algumas linguagens de programação usadas em
								mainframe;
							</li>
							<li>
								Suporte para aplicativos de usuário final de outros
								fornecedores.
							</li>
						</ul>
						<p>
							O TSO interage com os usuários no modo linha por linha, onde é
							necessário inserir os comandos via teclado e o sistema exibe as
							respostas na tela do terminal, ou via ISPF que permite a interação
							orientada por menu personalizado. É comum executá-lo em lote,
							todos os comandos interativos podem ser executados via Job Control
							Language (JCL). É uma maneira de permitir que um aplicativo de
							mainframe acesse recursos do DB2.
						</p>
                        <p>Para logar no TSO: L TSO;</p>
                        <p>Pata logar no ISPF: ISPF;</p>
                        <p>Para sair do ISPF: F3;</p>
                        <p>Para sair do TSO logoff.</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default TSO;
