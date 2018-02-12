define([], function() {

    function today() {
        return new Date();
    }

    return {
        today: today,
    }
});