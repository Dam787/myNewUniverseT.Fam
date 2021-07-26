class Todo {
    constructor(contents, done) {
        this.contents = contents;
        this.done = done;
    }
    toggle() {
        this.done = !this.done;
    }
}

class TodoManager {
    constructor(todos = []) {
        this._todos = [];
        todos.forEach(todo => {
            this.addTodo(todo.contents, todo.done);
        })
    }
}