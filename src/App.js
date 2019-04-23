import React from 'react';
import './App.css';
import selfie from './pictures/1.jpg';

const App = () => {
  return (
  	<div className='body'>
		<div className='selfieContainer'>
			<img src={selfie} alt="Fernando Caudillo" className='selfie'/>
		</div>
		<div className='description'>

			<h2> Welcome! </h2>

			<h3>
				My name is Fernando Javier Caudillo and I am highly motivated to advance technology to create a better living
				standard for all. I am currently a student at an award-winning, three-year accelerated bachelor's 
				computer science program called CSin3 at California State University, Monterey Bay. I love to apply my Software Engineering 
				skills and degree in progress to any companie whose goal is to empower less served communities. 
				I have a passion for problem-solving in online judge systems while encouraging 
				others to further develop their computer science and leadership skills. For the Summer of 2019 I will be a Software Engineering
				Intern at Google and located in New York City.
			</h3>
			<h3>
				
			</h3>
		
		</div>
	</div>
  );
}

export default App;
