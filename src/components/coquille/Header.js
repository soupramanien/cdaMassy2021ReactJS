import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EFGList from '../../pages/EFGs/EFGList';
import QuestionWorkspace from '../questions/QuestionWorkspace';

export default class Header extends Component {
	render() {
		return (
			<div className="container-fluide">
				<nav className="main-header navbar navbar-expand-lg navbar-white navbar-light ">
					{/* Left navbar links */}
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" data-widget="pushmenu" to={'/'}>
								<i className="fas fa-bars" />
							</Link>
						</li>
						<li className="nav-item d-none d-sm-inline-block">
							<Link to={'#'} className="nav-link">
								<i className="fa fa-cogs" aria-hidden="true" />
							</Link>
						</li>
						<li className="nav-item d-none d-sm-inline-block">
							<Link to={'/'} className="nav-link">
								Sondage
							</Link>
						</li>
						<li className="nav-item d-none d-sm-inline-block">
							<Link to={'/efgs'} className="nav-link">
								EFGs
							</Link>
						</li>
						<li className="nav-item d-none d-sm-inline-block">
							<Link to={'#'} className="nav-link">
								Questionnaire
							</Link>
						</li>
					</ul>
					{/* SEARCH FORM */}
					<form className="form-inline ml-3">
						<div className="input-group input-group-sm">
							<input
								className="form-control form-control-navbar"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<div className="input-group-append">
								<button className="btn btn-navbar" type="submit">
									<i className="fas fa-search" />
								</button>
							</div>
						</div>
					</form>
				</nav>
			</div>
		);
	}
}
