import React from 'react';
import SingleToDo from './SingleToDo';

/* 
	visibilityFilter could be either of the following values:
	"ALL_TODOS", "LEFT_TODOS", or "COMPLETED_TODOS" 
*/

/*
	This is returning SingleToDo components by looping over 
	the visibleToDos array that it is getting as a prop from 
	its parent, the ToDoApp component:
*/

class VisibleToDoList extends React.Component {
	render() {
		return (
			<div>
				<h3>{this.props.visibilityFilter.replace("_", " ")}</h3>
				{
					this.props.visibleToDos.length > 0 ? (
							<ul>
								{this.props.visibleToDos.map(
									(item) => 
										<SingleToDo
											key = {item.id}
											toDoId = {item.id}
											text = {item.descriptionText}
											isDone = {item.isDone}
											archiveToggleToDoItem = {this.props.archiveToggleToDoItem}
											removeToDoItem = {this.props.removeToDoItem}
										/>
								)}
							</ul>
						) : (
							"You're all caught up!"
						)

				}
			</div>
		);
	}
}

export default VisibleToDoList;