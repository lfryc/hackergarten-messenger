angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, PetService, Notification, $http) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pets = PetService.all();

  $scope.messages = Notification.messages;

  $scope.send = function send(msg) {
    if(!msg) {
      alert('Fill something');
      return;
    }

    return $http({
      method: 'POST',
      url: 'http://192.168.20.12:1414/messages',
      data: {
        message: msg
      }
    });
  };
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
});
