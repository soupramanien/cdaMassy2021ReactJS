import { Link } from 'react-router-dom';

const EFGButton = ({ props }) => {
	console.log(props);
	let url;
	let message;
	let css;

	if (!isNaN(props)) {
		let url = `efgs/`;
		props = url + props;
		message = "Accéder à l'exercice";
		css = 'efg-link';
	} else {
		console.log('test');
	}

	return (
		<Link to={props} className={css}>
			{message}
		</Link>
	);
};

export default EFGButton;
