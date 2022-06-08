var app = function () {

    'use strict';

    var js = function () {
        $('html').removeClass('no-js');
    };

    return {
        init: function () {
            js();
        },
    };
}();

$(document).ready(function () {
    app.init();
});