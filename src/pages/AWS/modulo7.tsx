import Sidebar from "components/Sidebar";
import { AWS_LIST } from "resources/consts";

const Modulo7 = () => {
	return (
		<div className="container">
			<div className="row justify-content-start">
				<div className="col-4">
					<Sidebar list={AWS_LIST} />
				</div>
				<div className="col-8 base-card">
					<h3>Módulo 4</h3>
					
				</div>
			</div>
		</div>
	);
};

export default Modulo7;
