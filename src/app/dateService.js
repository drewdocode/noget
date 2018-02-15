define(['moment'], function(moment) {

    function today() {
        return new Date();
    }

    return {
        today: today,
    }
});