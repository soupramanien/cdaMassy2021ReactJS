import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import Dashbord from './Dashbord';

export default class Coquille extends Component {
	render() {
		return (
			<div>
				<Header />
				<Menu />
				<Dashbord />
				<Footer />
			</div>
		);
	}
}
