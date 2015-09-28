studentSignIn.controller('PresenceCtrl', function PresenceCtrl($scope, SignInFactory) {
  $scope.students = SignInFactory.students;
  $scope.addStudentPresence = function(student) {
    student.presence = true;
  };
  $scope.removeStudentPresence = function(student) {
    student.presence = false;
  };

});
