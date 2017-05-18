function uniqueIdGenerator() {
	function S4() {
		return Math.floor(( 1 + Math.random() ) * 0x10000).toString(16).substring(1);
	}
	return S4()+S4()+'-'+S4()+'-'+S4()+'-'+S4()+'-'+S4()+S4()+S4();
} // Helper function for generating unique IDs

class ToDoItem {
	constructor(descriptionText, isDone, id) {
		this.descriptionText = descriptionText || '';
		this.isDone = isDone || false;
		this.id = id || uniqueIdGenerator();
	}

	// serialize and deserialize methods for localStorage
	serialize() {
		return {
			id: this.id,
			descriptionText: this.descriptionText,
			isDone: this.isDone
		}
	}

	static deserialize(json) {
		const toDoItem = new ToDoItem()
		toDoItem.id = json['id'] || uniqueIdGenerator()
		toDoItem.descriptionText = json['descriptionText'] || ''
		toDoItem.isDone = json['isDone'] || false
		return toDoItem
	}

} 

// each to-do item created will have these properties: descriptionText, isDone, id
// these properties are optional - if not specified the defaults will be used

export default ToDoItem;