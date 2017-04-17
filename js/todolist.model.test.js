var model = require("../js/todolist.model");
var assert = require("assert");

describe("todolist.model", function() {

    describe("#addTodo", function() {

        it("should add a todo", function() {
            model.init();
            model.addTodo("test");
            assert(model.getTodos()[0] === "test");
        });

    });

    describe("#removeTodo", function() {

        it("should remove a todo", function() {
            model.init();
            model.addTodo("test");
            model.removeTodo("test");
            assert(model.getTodos().length === 0);
        });

    });

});