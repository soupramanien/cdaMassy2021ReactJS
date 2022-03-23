import { Link } from 'react-router-dom';

const EFGButton = ({ props }) => {
	console.log(props);
	return <Link to={`efgs/` + props}>Lien de l'exercice</Link>;
};

export default EFGButton;
