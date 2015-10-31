(function() {
  var app = angular.module("studyGuide", []);
  app.controller("StudyController", function() {
    this.sections = sections;
  });
  var sections = [
    {
      title: "Factory Pattern",
      uses: [
        "When a method returns one of several possible classes that share a common superclass.",
      ],
      advantages: [
        "-"
      ],
      disadvantages: [
        "-"
      ],
      examples: [
        "Create a new enemy in a game -> Random number generator picks a number assigned to a specific enemy -> the factory returns the enemy associated with that number -> the class is chosen at runtime.",
      ],
    },
  ];
})();
/*
<li>Compiler: </li>
<li>Linker: </li>
<li>Interpreter: </li>
<li>Assembly Code: </li>
<li>Virtual Memory: </li>
<li>Paging: </li>
<li>Kernel Mode: </li>
<li>Synchronization Primitives: </li>
<li>Network Protocols: </li>
<li>Socket-Level Programming: </li>
*/
