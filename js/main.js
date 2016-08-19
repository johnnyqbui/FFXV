(function(){
    'use strict'

    // Music
    var music = new Howl({
        src: ['mp3/somnus.mp3'],
        loop: true
    });

    music.play();

    var MainModule = angular.module('AppModule', []);

    // Countdown Timer
    MainModule.controller('TimeController', function($scope, $interval) {
        var deadline = 'November 29 2016';
        var t,
            interval;

        function updateClock() {
            t = Date.parse(deadline) - Date.parse(new Date());
            var second = 1000;
            var minute = second * 60;
            var hour = minute * 60;
            var day = hour * 24;
            $scope.countDown = {
                seconds: Math.floor((t / second) % 60),
                minutes: Math.floor((t / minute) % 60),
                hours: Math.floor((t / hour) % 24),
                days: Math.floor(t / day)
            }
        }

        interval = $interval(function() {
            updateClock();
            if (t === 0) {
                $interval.cancel(interval);
            }
        }, 1000)

        updateClock();

    });
})();
