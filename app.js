import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello.jsx';
import Button from './Button.jsx';
import css from './app.scss';

const element = (
		<div>
			<Hello name="Lorena"/>
			<Button/>
		</div>
	);

ReactDOM.render(
	element, 
	document.getElementById('root')
);