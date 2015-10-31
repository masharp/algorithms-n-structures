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
  Source Code Version Control -
VSS:
- Microsoft Volume Snapshot Service, or Shadow Copy, is a Windows service that allows for copies of files to be backed up and restored to the point you like.
CVS/SVN:
- Concurrent Versions System is a revision control system that keeps track of all work and all changes in a set of files. This allows several developers to collaborate. It uses a client-server architecture; a server stores the current versions or a project and history, the clients check out a copy of the project and then later check in their changes. SVN is Apache Subversion. It's goal is to be a successor to CVS. It behaves much the same way as CVS.
Branch/Merge:
Repository Settings:
Distributed VCS:
Mercurial:
Darcs:
Build Automation:
Command Line System Build:
Script System Build:
Build Tools:
- Maven:
- Gradle:
- Simple Build Tools:
Automated Testing:
Automated Unit Tests:
TDD:
Functional Test:
Load Test:
UI Test
Git:
- Git is a distributed reversion control system originally created to allow collaboration on the Linux kernel and operating system. Git working directories are full-fledged 	repositories, independent of network access or a central server.
- Workflow:
- Your local git repository consists of three 'trees' maintained by git. The 	first 			one is your “Working Directory,” which holds the actual files. The second one is 			the “Index,” which acts like a staging area and the “HEAD” which points to the 			last commit you've made.
- Working Dir -----→ ADD ---→ Index (stage) -----→ COMMIT ----→ Head
- Branches:
- Used to develop features isolated from each other. The master branch is 			the 'default' branch when you create a repository. Use other branches for 				development and merge them back to the master branch upon completion. 			When you git pull and git merge, git attempts to auto-merge changes. 				Sometimes there results in conflicts which must be manually merged by editing 			the files that conflict and then re-staging them.
- Commands:
- git init : initializes a local directory as a git repository
- git clone /path/to/repository: working copy of local repository
- git clone username@host: /path/to/repository: working copy of remote 					server repository
- git add * / git add <filename>: propose changes (add to the index)
- git commit -m “commit message”: commits changes to the HEAD with a 					message. This does not add it to the remote repository.
- git remote add origin <server> : adds a remote server to a local 						repository
- git push origin <master>: pushes the commits to the remote repository. 					<master> is the branch you want to push our change to.
- git checkout -b <branch>: creates a new branch and switches to it.
- git checkout <master>: switches back to master
- git branch -d <branch>: deletes the branch
- git push origin <branch>: pushes the branch to the remote server for 					others to access
- git pull : updates the local directory with the latest commits
- git merge <branch>: merges another branch into the active branch
- git diff <source_branch> <target_branch>: preview merge changes
- git tag 1.0.0 3234k23k4m: tags your software with 1.0.0. The id comes 					from the commit log
- git log: shows repository history
- git log - -author=bob : shows commits by a certain author
- git log - -pretty=oneline: shows commits in single-line format
- git log  - - name-status: see only files that have changes
- git checkout - - <filename>: replaces the changes in your working tree 					with last content in the HEAD
- git fetch origin: drop all local changes and commits, and fetches latest 					history from server
- git reset - -hard origin/master : see above  
*/
