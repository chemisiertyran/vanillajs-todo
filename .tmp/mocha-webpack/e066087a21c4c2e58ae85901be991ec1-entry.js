
    var testsContext = require.context("../../js", false);

    var runnable = testsContext.keys();

    runnable.forEach(testsContext);
    