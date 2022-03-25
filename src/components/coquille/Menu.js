import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
	render() {
		return (
			<div className="container">
				<aside className="main-sidebar sidebar-dark-primary elevation-4">
					{/* Brand Logo */}
					<Link to={'#'} className="brand-link">
						<img
							src="dist/img/Cda-Logo.jpeg"
							alt="Cda Massy 2022"
							className="brand-image img-circle elevation-3"
							style={{ opacity: '.8' }}
						/>
						<span className="brand-text font-weight-light">Cda Massy 2022</span>
					</Link>
					{/* Sidebar */}
					<div className="sidebar">
						{/* Sidebar user panel (optional) */}
						<div className="user-panel mt-3 pb-3 mb-3 d-flex">
							<div className="image">
								<img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User " />
							</div>
							<div className="info">
								<Link to={'#'} className="d-block">
									Kamal knina
								</Link>
							</div>
						</div>
						{/* Sidebar Menu */}
						<nav className="mt-2">
							<ul
								className="nav nav-pills nav-sidebar flex-column"
								data-widget="treeview"
								role="menu"
								data-accordion="false"
							>
								{/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
								<li className="nav-item has-treeview menu-open">
									<Link to={'#'} className="nav-link active">
										<p>
											Canaux
											<i className="right fas fa-angle-left" />
										</p>
									</Link>
									<ul className="nav nav-treeview">
										<li className="nav-item">
											<Link to={'/canaux'} className="nav-link active">
												<i className="far fa-circle nav-icon" />
												<p>Canal 1</p>
											</Link>
										</li>
										<li className="nav-item">
											<Link to={'./index2.html'} className="nav-link">
												<i className="far fa-circle nav-icon" />
												<p>Canal 2</p>
											</Link>
										</li>
										<li className="nav-item">
											<Link to={'./index3.html'} className="nav-link">
												<i className="far fa-circle nav-icon" />
												<p>Canal 3</p>
											</Link>
										</li>
										<li className="nav-item">
											<Link to={'./index3.html'} className="nav-link">
												<i className="far fa-circle nav-icon" />
												<p>Canal 4</p>
											</Link>
										</li>
									</ul>
								</li>
							</ul>
						</nav>
						{/* /.sidebar-menu */}
					</div>
					{/* /.sidebar */}
				</aside>
			</div>
		);
	}
}
