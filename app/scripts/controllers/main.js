(function () {
    'use strict';

    var mainCtrl = angular.module('mainCtrl', []);

    mainCtrl.controller('CarouselCtrl', function ($scope) {
        $scope.myInterval = 5000;
        var slides = $scope.slides = [];
        $scope.addSlide = function (i) {
            var newSlide = i++;
            slides.push({
                image: '/images/dowdy_carousel' + newSlide + '.JPG'
            });
        };
        for (var i = 1; i < 7; i++) {
            $scope.addSlide(i);
        }
    });
})();