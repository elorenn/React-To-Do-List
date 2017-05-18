import ToDoItem from './ToDoItem';
import { findIndex } from 'lodash';

class ToDoDataInterface {
	constructor() {
		this.toDoList = [];
		this.loadFromLocalStorage();
	}

	saveToLocalStorage() {
		if (window.localStorage && this.toDoList) {
			let jsonToDoList = this.toDoList.map(item => item.serialize());
			localStorage.setItem('reactToDoList', JSON.stringify(jsonToDoList));
		}
	}

	loadFromLocalStorage() {
		if (window.localStorage) {
			let toDoList = localStorage.getItem('reactToDoList');
			if (toDoList) {
				toDoList = JSON.parse(toDoList);
				this.toDoList = toDoList.map(item => ToDoItem.deserialize(item));
			}
		}
	}

	addToDoItem(descriptionText) {
		const newToDoItem = new ToDoItem(descriptionText);
		this.toDoList.push(newToDoItem);
		return newToDoItem;
	}

	archiveToggleToDoItem(toDoId) {
		const toDoIndex = findIndex(this.toDoList, (item) => item.id === toDoId);
		if (toDoIndex > -1) {
			this.toDoList[toDoIndex].isDone = !this.toDoList[toDoIndex].isDone
		}
	}

	removeToDoItem(toDoId) {
		const toDoIndex = findIndex(this.toDoList, (item) => item.id === toDoId);
		if (toDoIndex > -1) {
			this.toDoList.splice(toDoIndex, 1);
		}
	}

	getAllToDoItems() {
		return this.toDoList.map(item => item);
	}
}


export default ToDoDataInterface; 

