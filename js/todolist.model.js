module.exports = {
    init: function() {
        this.todos = [];
    },

    addTodo: function(todoText) {
        this.todos.push(todoText);
    },

    removeTodo: function(todoText) {
        let index = this.todos.indexOf(todoText);
        this.todos.splice(index, 1);
    },

    getTodos: function() {
        return this.todos;
    }
};
