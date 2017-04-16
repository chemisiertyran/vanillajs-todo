module.exports = {
    init: function(model) {
        this.initModel(model);
        this.cacheDom();
        this.bindEvents();
        this.render();
    },

    initModel: function(todoModel) {
        this.todoModel = todoModel;
    },

    cacheDom: function() {
        this.listEl = document.querySelector(".todolist");
        this.buttonEl = document.querySelector(".todolist-button");
        this.inputEl = document.querySelector(".todolist-input");
    },

    bindEvents: function() {
        this.buttonEl.addEventListener("click", this.addTodo.bind(this));
        this.listEl.addEventListener("click", this.deleteTodo.bind(this));
    },

    render: function() {
        this.listEl.innerHTML = "";
        this.todoModel.getTodos().forEach(this.renderTodo.bind(this));
    },

    renderTodo: function(todoText) {
        var todoEl = document.createElement("li");
        todoEl.innerHTML = todoText;
        todoEl.appendChild(this.renderDeleteTodo());
        this.listEl.appendChild(todoEl);
    },

    renderDeleteTodo: function() {
        var deleteTodo = document.createElement("button");
        deleteTodo.className = "todolist-delete";
        deleteTodo.innerHTML = "Delete";
        return deleteTodo;
    },

    addTodo: function() {
        var todoText = this.inputEl.value;
        this.todoModel.addTodo(todoText);
        this.render();
    },

    deleteTodo: function(event) {
        if (event.target.matches(".todolist-delete")) {
            let todoText = event.target.parentElement.innerText;
            this.todoModel.removeTodo(todoText);
            this.render();
        }
    }
};
