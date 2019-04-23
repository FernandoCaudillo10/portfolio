import React from 'react';
import contest from './pictures/2.jpg';
import family from './pictures/family.jpg';
import dad from './pictures/dad.jpg';
import baby from './pictures/baby.jpg';
import './AboutPage.css';


const AboutPage = () => {
  return (
  	<div className="aboutMain">
		<h1 className="leftTitle">Values</h1>

		<div className="pairContainer">
			<img src={baby} className="image"/>
			<h2> Dedicated </h2>
		</div>

		<div className="pairContainer">
			<h2> Family-Oriented </h2>
			<img src={family} className="image"/>
		</div>

		<div className="pairContainer">
			<img src={dad} className="image"/>
			<h2> Honest </h2>
		</div>
	</div>
  );
}

export default AboutPage;
