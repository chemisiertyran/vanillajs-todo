module.exports = {
    init: function() {
        this.initModel();
        this.cacheDom();
        this.bindEvents();
        this.render();
    },

    initModel: function() {
        this.todos = ["First todo", "Second todo"];
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
        this.todos.forEach(this.renderTodo.bind(this));
    },

    renderTodo: function(todoText) {
        var todoEl = document.createElement("li");
        todoEl.innerHTML = todoText;
        this.listEl.appendChild(todoEl);
    },

    addTodo: function() {
        var todoText = this.inputEl.value;
        this.todos.push(todoText);

        this.render();
    }
};
