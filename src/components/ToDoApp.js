import React from 'react';
import VisibleToDoList from './VisibleToDoList';

class ToDoApp extends React.Component {
	constructor() {
		super();
		this.visibilityFilters = ["all", "to do", "done"];
		this.state = {
			toDoList: this.props ? this.props.dataInterface.getAllToDoItems() : [],
			visibilityFilter: "all"
		};
	}

	addToDoItem = () => {
		if (this._toDoInputField.value) {
			this.props.dataInterface.addToDoItem(this._toDoInputField.value);
			this.setState({
				toDoList: this.props.dataInterface.getAllToDoItems()
			});
			this._toDoInputField.value = '';
		}
	}

	archiveToggleToDoItem = e => {
		this.props.dataInterface.archiveToggleToDoItem(e.target.dataset.id);
		this.setState({
			toDoList: this.props.dataInterface.getAllToDoItems()
		});
	}

	removeToDoItem = e => {
		this.props.dataInterface.removeToDoItem(e.target.dataset.id);
		this.setState({
			toDoList: this.props.dataInterface.getAllToDoItems()
		});
	}

	changeVisibilityFilter = e => {
		this.setState({
			visibilityFilter: e.target.dataset.id
		});
	}

	visibleToDos = () => {
		switch (this.state.visibilityFilter) {
			case "all": 
				return this.state.toDoList;
			case "to do":
				return this.state.toDoList.filter(item => item.isDone === false);
			case "done":
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
					<div className="top-section">
						<div className="header">
							<h2 className="title">do.</h2>
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
									className = "add-button"
									type = "submit"
									onClick = {this.addToDoItem}>
										+
								</button>		
							</form>
						</div>			
						<div className="filter-nav">
							{
								this.visibilityFilters.map (
									visibilityFilter => 
										<button
											type = "button"
											key = {visibilityFilter}
											onClick = {this.changeVisibilityFilter}
											data-id = {visibilityFilter}>
												{visibilityFilter}
										</button>
								)
							}
						</div>
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


















