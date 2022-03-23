import React from 'react';
import EFGButton from './EFGButton';

const EFGCard = (props) => {
	console.log(props.isDisabled);
	return (
		<>
			{props.isDisabled && (
				<>
					Exercice n°{props.efg.idEfg} : {props.efg.intitule}, par{' '}
					{props.efg.idCreateur}.
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
