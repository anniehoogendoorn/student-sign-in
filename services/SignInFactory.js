studentSignIn.factory('SignInFactory', function SignInFactory() {
  var factory = {};
  factory.students = [
  { name: "Alex Brown" , presence: false},
  { name: "Alex Costa", presence: true },
  { name: "Ashlin Aronin", presence: true },
  { name: "Ben Caselino", presence: false },
  { name: "Ben Spenard", presence: true },
  { name: "Brian Borealis", presence: false },

  ];

  return factory;
});
