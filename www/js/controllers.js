angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('MessengerIndexCtrl', function($scope, Notification, $http) {
 

  $scope.messages = Notification.messages;

  $scope.send = function send(msg) {
    if(!msg) {
      alert('Fill something');
      return;
    }

    return $http({
      method: 'POST',
      url: 'http://hackernode-sblanc.rhcloud.com/messages',
      data: {
        message: msg
      }
    });
  };
})

