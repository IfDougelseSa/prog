import Sidebar from "components/Sidebar";
import { AWS_LIST } from "resources/consts";

const AWS = () => {
	return (
		<div className="container">
			<div className="row justify-content-start">
				<div className="col-4">
					<Sidebar list={AWS_LIST} />
				</div>
				<div className="col-8 base-card">
					<h3>Estudos para certificação AWS Cloud Practitioner</h3>
					<p>
						Esse estudo é baseado no curso: Elementos essenciais do AWS Cloud
						Practitioner (Português) | AWS Cloud Practitioner Essentials
						(Portuguese)
					</p>
				</div>
			</div>
		</div>
	);
};

export default AWS;
