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

        Programming Techniques:
	- Encapsulation:
		- Protects data integrity by limiting and strictly controlling access, either with 			access methods or field parameters.
	- Overriding:
		- A subclass override an inherited method with it's own functions.
	- Abstracting:
		- Finding the traits in multiple classes that are similar and putting them into a 			super class that these classes will then inherit their shared traits from.
	- Composition:
		- Instead of inheriting a process, the class is composed with objects that have 			the right processes build in. This allows for the changing of capabilities at run 			time and for dynamic systems.
	- Decoupling:
		- Encapsulating the concept or the behavior that varies in an interface and 			extended classes. This allows the coder to create many types of behaviors 			without affecting other classes.
	- Delegation:
		- A way of making composition as powerful for reuse as inheritance. A receiving 			object delegates operations to its delegate. It is a good design choice only when 		It simplifies more than it complicates.
	- Polymorphism:
		- Allows subclasses to share functionality of a superclass while defining its own 			unique behaviors. A subclass can add methods without affecting the superclass. 		Refer to subclass by their superclass type. With polymorphism you can only use 		methods that the superclass knows about or they must be cast by the subclass 			object.
			- ex: overriding a print functional
			- ex: Animal kitty = new Cat();
	- Interfaces:
		- An interface is a class with only abstract methods. A class can implement as 			many interface as the engineer desires. An interface provides the ultimate 			flexibility, as classes from different inheritance trees can use a common 				interface.
	- Inheritance:
		- A subclass inherits the definitions and method of the superclass
			- Java has single inheritance (extends)
			- C++ has multiple inheritance ( :  :  : )
	- Interpolation (Strings):
		- The process of evaluating a String literal containing one or more 'placeholders,' 		yielding a result in which the placeholders are replaced with their corresponding 		values.
			- ex: “Enter the result of #{5 + 5}”
	- Enumerables:
		-  Represents a fixed set of constants, where you know the complete list of 			possible values at compile time.
			- ex: Planets in solar system, choices of a menu
	- Regular Expression (Regex):
		- A way to describe a set of Strings based on common characteristics shared by 		each String in the set. It is used for searching, editing, and manipulating text and 		data.
	- Method Overloading:
		-  Allows the same method to accept different attributes by defining each 				method's behavior when that attribute is passed a particular data type.
	- Generics / Templates:
		- A technique that lets you define a type without specifying all of the types it 			uses.
	- Decomposition:
		- Involves breaking down a complex problem or system into smaller parts that 			are more manageable and easier to understand. It also allows for limiting 			changes to one part of a system from the rest of it. Examples of this are objects, 		classes, functions, etc.
	- Function Uses:
	- Reusable Functions / Objects:
Threads:
	- A thread of execution in a program or a 'path to follow.' The CPU uses threads to 	execute a stream of instructions. They also tell the interpreter that the block of code will 	be executed synchonistically with other blocks of code.
	- Synchronized:
		- A modifier that locks down a method wen a thread accesses it and prevent 			other threads from also accessing it.
	- Asynchronized:
		- Data is streamed intermittently or upon the receipt of a signal of some kind, as 			opposed to in a steady stream
Systems Decomposition:
		Multi-Platform Solutions:
Communication:
		Practice Articulation:
Code/File Organization:
		Code Groupings:
		Documentation:
		White Space Usage:
		Header:
		Files in Folder Grouping:
Source Tree Organization:
		Appropriate Folders:
		Circular Dependencies:
Code Readability:
		Code Assumptions:
		Code Asserts:
		No Deep Nesting of Conditions/Methods:
Defensive Coding:
		Assert Critical Assumptions:
		Check Exceptions:
 		Library with Simulated Tests:
Error Handling:
		Basic Error Handling:
		Error Handling Cleaning:
IDE:
		Keyboard Shortcuts:
		Custom Macros:
API:
		Frequently Used APIs:
		Post-Library API:
*/