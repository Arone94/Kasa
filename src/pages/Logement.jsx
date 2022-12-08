import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Host from "../components/Host";
import Rate from "../components/Rate";
import Tag from "../components/Tag";
import Logements from "../datas/logements.json";

export default function FicheLogement() {
	const params = useParams();
	const logement = Logements;
	const navigate = useNavigate();
	const [pickedAppart, setPickedAppart] = useState();

	useEffect(() => {
			const picked = logement.find(({ id }) => id === params.id); //si id de l'URL et le id de logement sont identiques
			logement.map(() => setPickedAppart(picked));
			if (picked === undefined) {
				navigate("/404", { state: { message: "Can't get data" } }); //renvoi vers la page 404 si l'URL de logement invalide
			};
			// eslint-disable-next-line
		}, []);

	const slidePics = pickedAppart && pickedAppart.pictures; //Si pickedAppart n'est pas vide alors on accède au champs pictures
	const tags = pickedAppart && pickedAppart.tags;
	const equipments = pickedAppart && pickedAppart.equipments;
	const equip =
		pickedAppart &&
		equipments.map((item, index) => (
			<li key={index} className="equipList">
				{item}
			</li>
		));
	return (
		pickedAppart && (
			<div key={params.id} className="fiche-container">
				<Carrousel slides={slidePics} />
				<section className="hostInfo-container">
					<div className="title-tags-container">
						<div className="title-container redFont">
							<h1>{pickedAppart.title}</h1>
							<h3>{pickedAppart.location}</h3>
						</div>
						<div className="tags-container">
							{tags.map((tag) => (
								<Tag key={tag} tag={tag} />
							))}
						</div>
					</div>
					<div className="rate-host-container">
						<div className="host-container redFont">
							<Host
								hostName={pickedAppart.host.name}
								hostPic={pickedAppart.host.picture}
							/>
						</div>
						<div className="rate-container">
							<Rate score={pickedAppart.rating} />
						</div>
					</div>
					
				</section>
				<div className="collapse-fiche-container">
					<Collapse
						aboutTitle="Description"
						aboutText={pickedAppart.description}
					/>
					<Collapse aboutTitle="Équipements" aboutText={equip} />
				</div>
			</div>
		)
	);
}
