define(['jquery', 'character', 'actions', 'keyCode'], function($, c, a) {
    'use strict';

    var entrance = function() {
        a.actions.entrance.execute();
        c.character.addClass('stance');
    };

    return {
        entrance: entrance
    };
});