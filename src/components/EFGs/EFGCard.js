import React from 'react';
import EFGButton from './EFGButton';

const EFGCard = (props) => {
	return (
		<>
			{props.isDisabled && (
				<>
					<h1>
						Exercice n°{props.efg.idEfg} : {props.efg.intitule}
					</h1>
					<p>
						Nom du formateur : {props.formateur.prenom} {props.formateur.nom}
					</p>
				</>
			)}

			{!props.isDisabled && (
				<>
					<tr>
						<td>{props.efg.idEfg}</td>
						<td>{props.efg.intitule}</td>
						<td>{props.efg.groupes}</td>
						<td>
							<EFGButton props={props.efg.idEfg} />
						</td>
					</tr>
				</>
			)}
		</>
	);
};

export default EFGCard;
