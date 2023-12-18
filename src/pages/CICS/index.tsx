import Sidebar from "components/Sidebar";
import { CICS_LIST } from "resources/consts";

const CICS = () => {
	return (
		<div className="container">
			<div className="row justify-content-start">
				<div className="col-4">
					<Sidebar list={CICS_LIST} />
				</div>
				<div className="col-8 base-card">
					<h3>CICS - Customer Information Control System</h3>
					<p>
						É um produto do IBM que você monta página e consegue acessar o
						mainframe.
					</p>
					<h4>Estilos de programação</h4>
					<h5>Não conversacional</h5>
					<p>
						O programa processa a task e depois "morre". Cada task é
						independente da outra
					</p>
					<h4>Conversacional</h4>
					<p>
						O programa aceita várias tasks. Não recomendado pelas empresas por
						causa que vários programas ficam na memória degradando o ambiente.
					</p>
					<h4>pseudo-conversacional</h4>
					<p>
						O programa envia a task, mas o programa salva os dados necessários
						em algum lugar. Para o CICS é como se fosse não conversacional.
						Sistema mais usado atualmente.
					</p>
                    <h4>Atributos</h4>
                    <p>Controlam o que está a direita.</p>
				</div>
			</div>
		</div>
	);
};

export default CICS;
