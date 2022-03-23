import React from 'react';
import EFGButton from './EFGButton';

const EFGCard = (props) => {
	console.log(props.isDisabled);
	return (
		<>
			{props.isDisabled && <>{props.efg.idEfg}</>}

			{!props.isDisabled && (
				<>
					{props.efg.idEfg}
					<EFGButton props={props.efg.idEfg} />
				</>
			)}
		</>
	);
};

export default EFGCard;
