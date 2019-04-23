import React from 'react';
import github from './pictures/github.png';
import './ProjectsPage.css';

const ProjectPage = () => {
  return (
  	<div className="projectsMain">
		<h1> Projects </h1>
		<div className="projContainer">
			Augmented Reality Chess Board
			<strong>C++</strong>
			<a href="https://github.com/FernandoCaudillo10/augmentedReality"> <img src={github} /> </a>
		</div>
		<div className="projContainer">
			Sweet Tooth
			<strong>Java/Android Studio</strong>
			<a href="https://github.com/FernandoCaudillo10/SweetTooth"> <img src={github} /> </a>
		</div>
		<div className="projContainer">
			Parrot: CSUMB Programming Team Website
			<strong>Javascript/React</strong>
			<a href="https://github.com/progteam/parrot"> <img src={github} /> </a>
		</div>
		<div className="projContainer">
			Essay on 5G networks
			<strong>English</strong>
			<a href="https://github.com/FernandoCaudillo10/CST300/blob/master/31122_Fernando_Caudillo_5G_Networks_874935_790409891.docx"> <img src={github} /> </a>
		</div>
		<div className="projContainer">
			Essay on Comercialising our Memory
			<strong>English</strong>
			<a href="https://github.com/FernandoCaudillo10/CST300/blob/master/RR%231%20(1).docx"> <img src={github} /> </a>
		</div>
	</div>
  );
}

export default ProjectPage;
