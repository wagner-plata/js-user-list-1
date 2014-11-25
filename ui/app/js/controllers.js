/* Controllers */

angular.module('user', [])

.controller('UserListCtrl', ['$scope',
function($scope){
  $scope.users = [
  {firstName: 'eliana', lastName: 'navia', email: 'eliana@navia.com',},
  {firstName: 'user 2'},
  {firstName: 'user 3'},
];
  $scope.newUser = function(){
  $scope.users.push({firstName: $scope.firstName, lastName: $scope.lastName, email: $scope.email});
  };
}]);

/*.controller('NewUserCtrl', ['$scope',
function($scope){
  $scope.newUser = function(){
  $scope.users.push({firstName: $scope.firstName, lastName: $scope.lastName, email: $scope.email});
  };
}]);*/