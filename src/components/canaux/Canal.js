import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Canal = () => {
	return (
		<div>
			<h1>Canal</h1>
			<Link to='/membres'>Nom du Canal</Link>
			<br />
			<Link to='/efgs'>Exercices à faire en groupe</Link>
		</div>
	);
};

export default Canal;
