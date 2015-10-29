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
    {
      title: "Strategy (Policy) Pattern",
      uses: [
        "Allows the engineer to code to an interface and encapsulate the concepts that vary. Many related classes differ in their behavior, but are tightly coupled. You may need different variants of an algorithm or you may need to decouple complex, algorithm-specific data structures from the client that uses them.",
      ],
      advantages: [
        "Allows for the implementation of different behavioral algorithms in a separate class hierarchy with an interface at the root.",
        "Allows for the decoupling of the object which uses the encapsulated 'strategies' and the algorithms themselves so that they can vary independently."
      ],
      disadvantages: [
        "May result in many more classes/objects."
      ],
      examples: [
        "-",
      ],
    },
    {
      title: "Observer (Publiser/Subscriber) Pattern",
      uses: [
        "Allows the engineer to update many other objects when one specific object is updated/changed.",
      ],
      advantages: [
        "Loose coupling means that the publisher does not need to know anything about the subscribers.",
        "The publisher object maintains list of dependents called subscribers and notifies them accordingly of any state changes, usually by calling one of their methods."
      ],
      disadvantages: [
        "Publisher may send updates that don't matter to a particular subscriber."
      ],
      examples: [
        "-",
      ],
    },
    {
      title: "Decorator (Wrapper) Pattern",
      uses: [
        "Allows the engineer to attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing.",
      ],
      advantages: [
        "More flexibility than static inheritance. Object responsibilities can be added and removed at rune-time simply by attaching or detaching them.",
        "Avoids feature-bloated classes high up in the hierarchy. Instead of adding every enforceable feature up front, you can add small features and functionality as you go."
      ],
      disadvantages: [
        "A decorator and it's components are identical. Hence you should not rely on object identity when you use decorators.",
        "Lots of little objects. A design with decorators have a lot of little objects that look alike. They differ only in the way they are interconnected."
      ],
      examples: [
        "A common use of the decorator pattern is in GUIs, in order to add graphical embellishments to widgets.",
      ],
    },
  ];
})();
