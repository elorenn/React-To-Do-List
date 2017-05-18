import React from 'react';

/*
	notice that the "this.props.blahblahblahs" 
	are being passed down from a parent, 
	the VisibleTodoList component, as props
*/

class SingleToDo extends React.Component {
	render() {
		return (
			<li>
				<input
					data-id={this.props.toDoId}
					checked={this.props.isDone}
					onChange={this.props.archiveToggleToDoItem}
					type="checkbox"
				/>
				<label>
					{this.props.text}{this.props.isDone ? ' - DONE' : ''}
				</label>
				<button
					data-id={this.props.toDoId}
					onClick={this.props.removeToDoItem}
				> x
				</button>
			</li>
		);
	}
}

export default SingleToDo;