/**
 * Created by Scott on 1/15/16.
 */

var app = angular.module('serviceApp', []);

app.controller('mainController', ['$scope', 'ThetaService', function($scope, ThetaService){
    $scope.theta = ThetaService.theta;
}]);

app.factory('ThetaService', function(){

    var getStudents = function(){
        return 'Mark, Liz, Brooks, Anthony, Zach, Amber, Eric, Joe, Altamir, Jeremy, Matthew, Chris, Nate, Kyra, Gwen, Samantha, Paul, Scott, Charlie, Natalie, Robby, Kenzie';
    };

    var theta = {
        name: 'Theta',
        numberStudents: 22,
        spiritAnimal: 'Wolverine',
        cohortMotto: 'Transcendence through suffering!',
        getStudents: getStudents(),
        school: 'Prime Academy',
        location: {
            state: 'MN',
            city: 'Bloomington'
        },
        country: 'USA',
        language: function(){
            return 'JavaScript';
        }
    };

    return {
        theta: theta
    };
});