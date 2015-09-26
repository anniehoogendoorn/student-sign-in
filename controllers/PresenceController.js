studentSignIn.controller('PresenceCtrl', function PresenceCtrl($scope, SignInFactory) {
  $scope.students = StudentsFactory.students;
  $scope.addStudentPresence = function(student) {
    student.presence = true;
  };
});
