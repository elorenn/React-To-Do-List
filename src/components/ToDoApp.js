import React from 'react';
import VisibleToDoList from './VisibleToDoList';

class ToDoApp extends React.Component {
	constructor() {
		super();
		this.visibilityFilters = ["ALL_TODOS", "LEFT_TODOS", "COMPLETED_TODOS"];
		this.state = {
			toDoList: this.props ? this.props.dataInterface.getAllToDoItems() : [],
			visibilityFilter: "ALL_TODOS"
		};
	}

	addToDoItem = () => {
		if (this._toDoInputField.value) {
			this.props.dataInterface.addToDoItem(this._toDoInputField.value);
			this.setState({toDoList: this.props.dataInterface.getAllToDoItems()});
			this._toDoInputField.value = '';
		}
	}

	archiveToggleToDoItem = e => {
		this.props.dataInterface.archiveToggleToDoItem(e.target.dataset.id);
		this.setState({toDoList: this.props.dataInterface.getAllToDoItems()});
	}

	removeToDoItem = e => {
		this.props.dataInterface.removeToDoItem(e.target.dataset.id);
		this.setState({toDoList: this.props.dataInterface.getAllToDoItems()});
	}

	changeVisibilityFilter = e => {
		this.setState({visibilityFilter: e.target.dataset.id});
	}

	visibleToDos = () => {
		switch (this.state.visibilityFilter) {
			case "ALL_TODOS": 
				return this.state.toDoList;
			case "LEFT_TODOS":
				return this.state.toDoList.filter(item => item.isDone === false);
			case "COMPLETED_TODOS":
				return this.state.toDoList.filter(item => item.isDone === true);
			default: 
				return this.state.toDoList;			
		}
	}

	render() {
		let visibleToDos = this.visibleToDos();
		return (
			<div>
				<h2>Get This Done:</h2>
				<input
					type = "text"
					placeholder = "add a task..."
					ref = {(c => this._toDoInputField = c)}
				/>
				<button 
					onClick = {this.addToDoItem}>
						Add
				</button>
				<VisibleToDoList
					visibleToDos = {visibleToDos}
					visibilityFilter = {this.state.visibilityFilter}
					archiveToggleToDoItem = {this.archiveToggleToDoItem}
					removeToDoItem = {this.removeToDoItem}
				/>
				<div>
					SHOW:
					{
						this.visibilityFilters.map (
							visibilityFilter => 
								<button
									key = {visibilityFilter}
									onClick = {this.changeVisibilityFilter}
									data-id = {visibilityFilter}>
										{visibilityFilter.replace("_", " ")}
								</button>
						)
					}
				</div>	
			</div>
		);
	}
}

export default ToDoApp;


















