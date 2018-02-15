requirejs.config({
    paths: {
        jquery: "../../node_modules/jquery/dist/jquery.min",
        moment: "../../node_modules/moment/min/moment.min",
        noge_dictionary: "../../drewdocode_modules/dictionaries/noge_dictionary",
        nato_dictionary: "../../drewdocode_modules/dictionaries/nato_dictionary",
    }
});

require(['app']);


