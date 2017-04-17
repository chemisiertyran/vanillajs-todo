const model = require("./todolist.model");
const view = require("./todolist.view");

model.init();
view.init(model);
