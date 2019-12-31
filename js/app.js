var app = angular.module('portfolioApp', ["ngRoute"]);


app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "views/home.htm",
    controller  : "homeCtrl"
  })
  .when("/demo", {
    templateUrl : "views/demo.htm",
    controller  : "dbDemo"
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

app.controller('dbDemo', function($scope, $http) {
  $http({
    method  : "GET",
    url     : "/api/add_person.php"
  }).then(function Success(response){
    $scope.myResponse = "success: " + response.data;
  }, function failure(response){
    $scope.myResponse = "failure: " + response.statusText;
  });

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
          $scope.sendMail("catyler85@gmail.com",emailSubject,emailMessage);
        }

    };
    //$scope.send();

});

app.controller('portfolioCtrl', function($scope) {
// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 
console.log(elementsToShow);

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}



})
