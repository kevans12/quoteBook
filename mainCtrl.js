angular.module('quotebook').controller('mainCtrl',['$scope', 'dataService',  function($scope, dataService, $cookies){
  $scope.test = dataService.test;
  $scope.quotes = dataService.getData();
  $scope.delete = function(textToDelete) {
    dataService.textToRemove(textToDelete);
  };
  $scope.addQuote = function() {
    var newQuote = {
      text: $scope.newQuoteText,
      author: $scope.newQuoteAuthor
    }
    if(dataService.addData(newQuote))
    {
      $scope.newQuoteText = '';
      $scope.newQuoteAuthor = '';
    }
  };
}])
