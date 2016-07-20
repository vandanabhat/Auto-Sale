'use strict';
angular.module('autoSales').controller('homeController',[ '$scope',
    function ($scope) {
    $scope.selectedCar ={};
    $scope.car = {
        punchLine: "The Cars of Your Dreams is Only a Click Away!",
        make: {
            "Honda":[{id:1, name:"Civic"},{id:2, name:"Accord"},{id:2, name:"CR-V"},{id:2, name:"HR-V"},{id:2, name:"Fit"}],
            "Audi":[{id:1, name:"Civic"},{id:2, name:"Accord"},{id:2, name:"CR-V"},{id:2, name:"HR-V"},{id:2, name:"Fit"}],
            "Ford":[{id:1, name:"Civic"},{id:2, name:"Accord"},{id:2, name:"CR-V"},{id:2, name:"HR-V"},{id:2, name:"Fit"}],
            "Chevy":[{id:1, name:"Civic"},{id:2, name:"Accord"},{id:2, name:"CR-V"},{id:2, name:"HR-V"},{id:2, name:"Fit"}]
        }
    };
    $scope.carMake = Object.keys($scope.car.make);
}]);