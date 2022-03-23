import React from 'react';
import EFGButton from './EFGButton';

const EFGCard = ({ props }) => {
	return (
		<>
			{props.idEfg} : {props.intitule}, par {props.idCreateur}.
			{/* <EFGButton /> */}
		</>
	);
};

export default EFGCard;
