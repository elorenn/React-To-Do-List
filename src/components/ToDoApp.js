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

/* 
	Use the `ref` callback to store a reference to the text input 
	DOM element in an instance field (for example, this._toDoInputField):
*/
	render() {
		let visibleToDos = this.visibleToDos();
		return (
			<div className="app-container">
				<h2>do.</h2>
				<form 
					onSubmit = {
						(e) => {
							e.preventDefault();
						}
					}>
					<input
						type = "text"
						placeholder = "add a task..."
						ref = {
							(input => this._toDoInputField = input)
						}
					/>
					<button 
						type = "submit"
						onClick = {this.addToDoItem}>
							+
					</button>
				</form>	
				<div>
					{
						this.visibilityFilters.map (
							visibilityFilter => 
								<button
									type = "button"
									key = {visibilityFilter}
									onClick = {this.changeVisibilityFilter}
									data-id = {visibilityFilter}>
										{visibilityFilter.replace("_", " ")}
								</button>
						)
					}
				</div>
				<VisibleToDoList
					visibleToDos = {visibleToDos}
					visibilityFilter = {this.state.visibilityFilter}
					archiveToggleToDoItem = {this.archiveToggleToDoItem}
					removeToDoItem = {this.removeToDoItem}
				/>					
			</div>
		);
	}
}

export default ToDoApp;


















