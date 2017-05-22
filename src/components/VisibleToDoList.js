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
			<div className="list-container">
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
							<div className="paperclip-container">
								<p className="speech-bubble">Nothing here!</p>
								<img className="paperclip" src={'https://s-media-cache-ak0.pinimg.com/originals/50/fa/ce/50facebf9a3c8dfa632d99c60ed9909c.png'}></img>
							</div>
						)

				}
			</div>
		);
	}
}

export default VisibleToDoList;