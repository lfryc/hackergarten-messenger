angular.module('starter.services', [])

/**
 * A simple notification service.
 */

.factory('Notification', function($ionicPlatform, $rootScope) {

  var messages = [];

  function successHandler(evt) {
    console.log('SUCCESS', evt);
  }

  function errorHandler(evt) {
    console.log('ERROR', evt);
  }

  var onNotification = window.onNotification = function onNotification(evt) {
    console.log('NOTIFICATION', evt);

    $rootScope.$apply(function() {
      messages.push(evt);
    });
  };

   var pushConfig = {
     senderID: "senderID",
     pushServerURL: "pushServerURL",
     variantID: "variantID",
     variantSecret: "variantSecret"
 };

  $ionicPlatform.ready(function() {
    //badge and sound are iOS specific, and ignored on Android
    push.register(successHandler, errorHandler, {"badge": "true", "sound": "true",
        "ecb": "onNotification", pushConfig: pushConfig});
  });

  return {
    messages: messages
  };
});