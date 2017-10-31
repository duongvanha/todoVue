import Todo from './Todo'

class Todos {
    constructor() {
        this.todos = [
            new Todo('test')
        ];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }

    countDone() {
        return this.todos.reduce((count, todo) => count += todo.done ? 1 : 0, 0)
    }

    clearDone() {
        this.todos = this.todos.filter(item => !item.done)
    }

    length() {
        return this.todos.length;
    }

    toArray() {
        return this.todos
    }

    toJson() {
        return this.todos.map(todo => todo.toJson())
    }
}

export default Todos
