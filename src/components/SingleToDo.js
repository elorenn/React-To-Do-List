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
				<div className="checkbox-wrapper">
					<input
						data-id={this.props.toDoId}
						checked={this.props.isDone}
						onChange={this.props.archiveToggleToDoItem}
						type="checkbox"
						id = {'taskCheckbox' + this.props.toDoId}
					/>
					<label
						className={this.props.isDone ? 'to-do-label done' : 'to-do-label'}
						htmlFor = {'taskCheckbox' + this.props.toDoId}>
						<img className="checkmark-img" src={'check.png'}></img>
					</label>
				</div>	
				<p className={this.props.isDone ? 'to-do-text done' : 'to-do-text'}>
					{this.props.text}
				</p>
				<button
					className="button-remove"
					data-id={this.props.toDoId}
					onClick={this.props.removeToDoItem}
				>X
				</button>
			</li>
		);
	}
}

export default SingleToDo;