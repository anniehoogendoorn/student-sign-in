studentSignIn.factory('SignInFactory', function SignInFactory() {
  var factory = {};
  factory.students = [
  { name: "Sam Schmidt" , presence: false},
  { name: "Jessica Martin", presence: false },
  { name: "Sandy Smith", presence: false },
  { name: "Ryan Samuels", presence: false },
  { name: "Brentwood Davis", presence: false }
  ];

  return factory;
});
