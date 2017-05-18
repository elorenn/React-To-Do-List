import React from 'react';
import ReactDOM from 'react-dom';

import css from '../dist/app.scss';

import ToDoDataInterface from './lib/ToDoDataInterface';
import ToDoApp from './components/ToDoApp';

/*
	Here, we instantiate a new TodoDataInterface object, 
	it is being passed into the TodoApp component as a “prop”. 
	We’ll be able to access it with "this.props.dataInterface" 
	inside the TodoApp component:
*/

const toDoDataInterface = new ToDoDataInterface();

ReactDOM.render(
	<ToDoApp dataInterface={toDoDataInterface}/>, 
	document.getElementById('root')
);