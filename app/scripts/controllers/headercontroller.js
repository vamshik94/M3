'use strict';

angular.module('M3').controller('headerctrl', function ($location) {
    this.aboutnavigate = function () {
        $location.path('about');
    };
    this.contactnavigate = function() {
        $location.path('contact');
    };
    this.servicenavigate =function() {
        $location.path('service');
    };
});
