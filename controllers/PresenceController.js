studentSignIn.controller('PresenceCtrl', function PresenceCtrl($scope, SignInFactory) {
  $scope.students = SignInFactory.students;
  $scope.addStudentPresence = function(student) {
    student.presence = true;
    console.log(student.presence);
  };
  $scope.removeStudentPresence = function(student) {
    student.presence = false;
  };

});
