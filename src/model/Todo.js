class Todo {
    constructor(name = '') {
        this.name = name;
        this.done = false
    }

    toString() {
        return this.name;
    }

    toJson() {
        return {
            name: this.name,
            done: this.done
        }
    }
}

export default Todo
