import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import ResumePage from './ResumePage';
import Error404 from './Error404';
import * as serviceWorker from './serviceWorker';

const Routing = (
	<Router>
		<div className="content">
			<div className="header">
				<h1> Fernando Caudillo </h1>

				<ul>
					<li>
					  <Link to="/" className="link">Home</Link>
					</li>
					<li>
					  <Link to="/about" className="link">About Me</Link>
					</li>
					<li>
					  <Link to="/projects" className="link">Projects</Link>
					</li>
					<li>
					  <Link to="/resume" className="link">Resume</Link>
					</li>
				 </ul>
			</div>
			<div className="main">
				 <Switch>
					<Route exact path="/" component={App} />
					<Route path="/about" component={AboutPage} />
					<Route path="/projects" component={ProjectsPage} />
					<Route path="/resume" component={ResumePage} />
					<Route component={Error404} />
				 </Switch>	
			</div>
			<div className="footer">
				<h3> Created using React, Node, and Heroku. &copy; 2019 </h3>
			</div>
		</div>
	</Router>
);

ReactDOM.render(Routing, document.getElementById('root'));

serviceWorker.unregister();
