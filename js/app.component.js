angular.
  module('portfolioApp').
  component('portfolioApp', {
    controller: [function portfolioController() {
        $ctrl.firstName = "Tianyi";
        $ctrl.lastName = "Ma";
        $ctrl.url = "https://unsplash.com/@tma?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        $ctrl.currentPath = window.location.href;
    }]});