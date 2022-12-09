import { useState,useEffect } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Logements from "../datas/logements.json";

export default function Home() {

	const [data, setData] = useState([]);

	useEffect (()=> {
		setData(Logements)
	}, []);

	return (
		<>
			<Banner />
			<div className="cards-container">
				{data.map((appart, id) => (
					<div className="card_logement" key={id}>
						<Link className="link_card_logement" to={`/logement/${appart.id}`}>
							<Card cover={appart.cover} title={appart.title} />
						</Link>
					</div>
				))}
			</div>
		</>
	);
}