var app = angular.module('portfolioApp', ["ngRoute"]);


app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "views/home.htm",
    controller  : "homeCtrl"
  })
  .when("/demo", {
    templateUrl : "templates/demo.htm"
  })
  .otherwise({
    templateUrl : "views/404.htm"
  });
});

app.controller('homeCtrl', function($scope) {
  $scope.firstName = "Tianyi";
  $scope.lastName = "Ma";
  $scope.url = "https://unsplash.com/@tma?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  $scope.currentPath = window.location.href;

});

app.controller('contactCtrl', function($scope) {
    $scope.sendMail = function(emailId,subject,message){
        location.href = "mailto:"+ emailId + "?subject=" + subject+"&body="+message,"_self";
    };
    $scope.send = function() {
        var emailAddress, emailSubject, emailMessage;

        emailAddress = $scope.email;
        emailSubject = $scope.subject;
        emailMessage = $scope.message + ' - ' + $scope.name;

        if ($scope.contactForm.$valid) {
          $scope.sendMail(emailAddress,emailSubject,emailMessage);
        }

    };
    //$scope.send();

});
