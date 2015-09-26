studentSignIn.controller('SignInCtrl', function SignInCtrl($scope, SignInFactory) {
  $scope.students = SignInFactory.students;
  $scope.SignInFactory = SignInFactory;
});
