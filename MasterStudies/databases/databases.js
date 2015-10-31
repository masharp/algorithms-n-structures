(function() {
  var app = angular.module("studyGuide", []);
  app.controller("StudyController", function() {
    this.general = general;
    this.orm = orm;
    this.sql = sql;
  });
  var general = [
    {
      title: "Atomic Table",
      content: "A table organized in such a way that the information can be accessed in a manor that appears to be instantaneous."
    },
    {
      title: "Normalization",
      content: ""
    },
    {
      title: "ACID",
      content: "Atomicity, Consistency, Isolation, Durability (ACID) is a set of properties that guarantee that database transactions are processed reliably. This means that a database transaction is simple, logical, and done in one step."
    },
    {
      title: "ACID - Atomicity",
      content: "Requires that each transaction be 'all or nothing': if one part fails, all fails."
    },
    {
      title: "ACID - Consistency",
      content: "Ensures that any transaction brings the database from one valid state	to another."
    },
    {
      title: "ACID - Isolation",
      content: "Ensures that the concurrent execution of transactions results in a system state that would be obtained if transactions were executed serially."
    },
    {
      title: "ACID - Durability",
      content: "Means that once a transaction has been committed, it will remain so, even in the event of a power failure, crashes, or errors."
    },
    {
      title: "Transactions",
      content: "-"
    },

    {
      title: "Views",
      content: "-"
    },
    {
      title: "Stored Procedures",
      content: "-"
    },
    {
      title: "Triggers",
      content: "-"
    },
    {
      title: "Clustered Index",
      content: "-"
    },
    {
      title: "Non-Clustered Index",
      content: "-"
    },
    {
      title: "H2",
      content: "An SQL database written in Java. A lightweight SQL server that can be run in memory, embedded, or traditional server configuration."
    },
    {
      title: "SQLite",
      content: "SQLite is a relational database management system contained in a C library. Unlike many other database systems, SQLite is not a client-server engine, but is embedded in the end-program. It is ACID-compliant and implements most of the SQL standard. It is most often used as an embedded database. It is also dynamically typed."
    },

  ];
  var sql = [
    {
      title: "Selects",
      descriptions: [
        ""
      ],
      psudocode: [
        "SELECT (column) FROM (table)",
        "WHERE (columnElement = value);"
      ]
    },
  ];
  var orm = [
    {
      title: "ORM",
      descriptions: [
        "Object-Relational Mapping is a programming technique for converting data between incompatible type systems in -OO programming language. This creates a 'virtual object database' that then be mapped to more complicated objects."
      ]
    },
    {
      title: "Python Django",
      descriptions: [
        "ORM Tools are included with the Python Django framework."
      ]
    },
    {
      title: "Hibernate",
      descriptions: [
        "Widely used open source ORM software."
      ]
    },
  ];
})();
