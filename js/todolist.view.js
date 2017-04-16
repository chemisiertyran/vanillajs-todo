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
    },

    render: function() {
        this.listEl.innerHTML = "";
        this.todoModel.getTodos().forEach(this.renderTodo.bind(this));
    },

    renderTodo: function(todoText) {
        var todoEl = document.createElement("li");
        todoEl.innerHTML = todoText;
        this.listEl.appendChild(todoEl);
    },

    addTodo: function() {
        var todoText = this.inputEl.value;
        this.todoModel.addTodo(todoText);
        this.render();
    }
};
