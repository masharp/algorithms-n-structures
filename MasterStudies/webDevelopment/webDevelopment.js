(function() {
  var app = angular.module("studyGuide", []);
  app.controller("StudyController", function() {
    this.stuff = stuff;
    this.frameworks = frameworks;
    this.npm = npm;
    this.angularJS = angularJS;
    this.node = node;
    this.express = express;
  });
  var stuff = [
    {
      title: "Document-Object-Model (DOM)",
      content: "DOM is a convention for representing and interlacing with objects I HTML, XHTML, and XML documents. The nodes of every document are organized in a tree structure called a DOM tree. Objects in the DOM tree ma be addressed and	manipulated by using methods on the objects."
    },
    {
      title: "Model-View-Controller (MVC)",
      content: "A software architecture pattern for implementing user interfaces."
    },
    {
      title: "Controller (MVC)",
      content: " Manipulates model.Sends commands to the model to update the model's state and sends commands to the view's presentation of the model. "
    },
    {
      title: "Model (MVC)",
      content: "Stores data that is retrieved by the controller and displayed by the view."
    },
    {
      title: "View (MVC)",
      content: "Requests information from the model that then generates an output representation."
    },
    {
      title: "jQuery (Library)",
      content: "A cross-platform ECMAScript library designed to simplify client-side scripting with HTML. It is the most popular JavaScript library in use and was designed for DOM element selection, animation, events, and applications with AJAX."
    },
    {
      title: "Asynchronous JavaScript and XML (AJAX)",
      content: "AJAX is a group of interrelated web development techniques 	used on  the client-side to create applications that can send data to and retrieve data from a server in the background asynchronously, without disturbing the behavior of the existing page. Consists of CSS, HTML, XML, JSON, JavaScript, XMLHTTPRequest."
    },
  ];
  var frameworks = [
    {
      title: "Rails",
      descriptions: [
        "Web application framework that uses the MVC architecture and provides default structures for a database, web service, and web pages.",
        "Encourages: XML, JSON, HTML, CSS, ECMAScript.",
        "Emphasizes: Convention-over-Configuration, DRY, Active Record Pattern."
      ]
    },
  ];
  var npm = [
    {
      title: "Initialize",
      contents: [
        "package.json : controlls dependencies",
        "'npm init --scope=<username>' : utility to define the package.json with the specified users access."
      ]
    },
    {
      title: "",
      contents: [
        "",
      ]
    },
    {
      title: "",
      contents: [
        "",
      ]
    },
    {
      title: "",
      contents: [
        "",
      ]
    },
    {
      title: "",
      contents: [
        "",
      ]
    },
    {
      title: "",
      contents: [
        "",
      ]
    },
    {
      title: "",
      contents: [
        "",
      ]
    },
    {
      title: "",
      contents: [
        "",
      ]
    },
    {
      title: "",
      contents: [
        "",
      ]
    },
    {
      title: "",
      contents: [
        "",
      ]
    },
    {
      title: "",
      contents: [
        "",
      ]
    },
  ];
  var angularJS = [
    {
      title: "",
      contents: [
        "",
      ]
    },
  ];
  var node = [
    {
      title: "",
      contents: [
        "",
      ]
    },
  ];
  var express = [
    {
      title: "",
      contents: [
        "",
      ]
    },
  ];
})();
/*


      JavaScript (ECMAScript):
            - Dynamic programming language which is primarily used by web pages 				to implement client-side scripts in order to interact with a user. 					ECMAScript's engine is placed in the user's browser and allows 					applications to be run client-side. The syntax and structure is similar to 				Java
            - Strengths:
            - Weaknesses:
            - Common Uses:
            - Important Functions:
              -Arrays:
                - .indexOf(): returns the index or -1 of an element
                - .filter(): creates a new array with all the elements of the 								original array that passes the test of the 								provided function
                - .map(): creates a new array with the results of calling a f								unction on every element in the array
                -.reduce(): applies a function against an accumulator and 								each value of the array (left-to-right) to reduce 								it to a single value
                Web Development CDNs:
                  - Bootstrap:
                  - jQuery:
                  - AngularJS:
                  - FontAwesome:
        AngularJS:
                -
                - Modules:
                  - where Angular application behavior lies
                    - ex: var app = angular.module(“store”, []);
                - Controllers:
                  - where we add application behavioral
                    - ex:
                      JS: app.controller(“StoreController”, function() {
                        ...
                        });
                      html: <ng-controller=”StoreController as store”>
                Expressions:
                  - How JavaScript values are displayed on the page
                    - ex: {{product.price}}
                - Directives:
                  - HTML Annotations that trigger JavaScript behaviors
                    - ngShow / ngHide: displays or hides a DOM element
                    - ngApp: attach a module to a page
                    - ngController: attach a controller function to the page
                    - ngRepeat: repeat a section for each item in an array (can be filtered)
                    - ngSrc: reslves Angular image source resolution
                    -ngClass: dynamically set CSS elements to HTML element
                    -ngClick: specify custom behavior when element is clicked
                    -ngModel: binds inputs to a property scope (live update)
                - Filters:
                  - an expression that mutates data passed to it
                      -ex: {{product.price | currency}}
                      -ex: {{recipe.data | filter:option}}
                    - currency: adds the local currency symbol and specifies decimals
                    - date: formats the input to a date format
                    -uppercase / lowercase: changes input data case
                    - limitTo: limits the display to specified character lengths
                    - orderBy: orders a list by a parameter (- sign for descending)
                - Services
                  - Angular methods that provide built in functionality
                    - $log: prints contents out to console
                    -$http: makes a web service request. Automatically converts to JS arr/obj
                      - ex: $http.get('url').success(callback function());
                    -$filter: filters an array
*/
