import Sidebar from "components/Sidebar";
import { JAVAFX_LIST } from "resources/consts";

const JAVAFX = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-start">
					<div className="col-4">
						<Sidebar list={JAVAFX_LIST} />
					</div>
					<div className="col-8 base-card">
						<h3>Java FX</h3>
						<p>
							Sucessor do Swing e Java AWT para interfaces gráficas com Java.
						</p>
						<p>Pode ser usado para desktop, web e mobile.</p>
						<p>
							Uma tela JavaFX pode ser montada via código java, ou via código
							FXML.
						</p>
						<p>
							Com o lançamento do Java 11, JavaFX não é mais parte do JDK. Deve
							ser baixado separadamente. Além disso. é mantido pela Gluon.
						</p>
						<p>JavaFX é projetado sobre o padrão MVC.</p>
						<p>
							Model - consiste nos dados de domínio e toda lógica de
							transformação desses dados.
						</p>
						<p>Views - São as telas de interação com o usuário (UI).</p>
						<p>
							Controllers - São as classes responsáveis por tratar as interações
							do usuário com as views (manipulação de eventos de interação com
							as telas.
						</p>
						<p>
							Uma aplicação javaFX tem que extender do Application. Ela possue o
							método abstract start, sendo assim, somos obrigados a implementar
							esse método. Além disso, temos os métodos init e stop. O método
							init, podemos colocar coisas para acontecer antes de iniciar. O
							método stop, podemos colocar coisas quando nossa aplicação
							finalizar.
						</p>
						<p>
							Lauch é um método estático da classe Application que serve para
							iniciar a aplicação.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default JAVAFX;
