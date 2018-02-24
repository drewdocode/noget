requirejs.config({
    paths: {
        jquery: "../../node_modules/jquery/dist/jquery.min",
        moment: "../../node_modules/moment/min/moment.min",
        supreme: "../../node_modules/supreme/supreme",
    }
});

require(['app']);


