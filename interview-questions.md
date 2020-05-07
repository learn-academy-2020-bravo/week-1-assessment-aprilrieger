//April Rieger's # ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.   

1. What is a function? Why would you use one?

  Your answer: a function is a statement that performs a task or calculates a value.

  Researched answer: Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it. URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions



2. What is the difference between map and filter?

  Your answer: Map performs its tasks on each item in the array and return the same number of items. Filter will perform its task and return a smaller array based off of the criteria you supplied.

  Researched answer:



3. What is the difference between console.log() and return?

  Your answer: You can only have one return in a function. You can have infinite console.log()s and can even have them inside a function.

  Researched answer: The Console method log() outputs a message to the web console. The message may be a single string (with optional substitution values), or it may be any one or more JavaScript objects.
  https://developer.mozilla.org/en-US/docs/Web/API/Console/log

  The return statement ends function execution and specifies a value to be returned to the function caller.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return


4. In regards to functions, what is an argument?

  Your answer: The argument is the value that must be provided to obtain the result of the function.

  Researched answer: An argument is a value (primitive or object) passed as input to a function.
  https://developer.mozilla.org/en-US/docs/Glossary/Argument



5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer: Driver: Eyes on the code talking through the problem.
  Navigator: Looking ahead to ensure all objectives have or will be met.

  Researched answer:
  1. Prepare
  2. Work closely together
  3. Learn and facilitate learning
  4. Establish a rhythm
  5. Communicate effectively
  6. Embrace challenges
  https://gds.blog.gov.uk/2018/02/06/how-to-pair-program-effectively-in-6-steps/



6. What is TDD? Describe the work flow associated with TDD.

  Your answer: Test Driven Development. The workflow is to
  1. Write to fail - Red
  2. Write enough to pass the test - Green
  3. Refactor

  Researched answer: “Test-driven development” refers to a style of programming in which three activities are tightly interwoven: coding, testing (in the form of writing unit tests) and design (in the form of refactoring).

  It can be succinctly described by the following set of rules:

  write a “single” unit test describing an aspect of the program
  run the test, which should fail because the program lacks that feature
  write “just enough” code, the simplest possible, to make the test pass
  “refactor” the code until it conforms to the simplicity criteria
  repeat, “accumulating” unit tests over time
  https://www.agilealliance.org/glossary/tdd/



7. What is something we did in class this week you found helpful?  

  Your answer: The PB&J sandwich exercise for pseudocoding was fun, information, interactive and engaging. AND most of all FUN! Not so say everything else isn't but it's nice that you all weave in fun and break up the code crunching! Thank you!


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React - React is used to build webpages, mobile web pages, and even native mobile applications. It is component based, which means that we use it to build many small parts, and then join them together to form entire applications. This turns out to be extremely scalable. It was created from Facebook as that application grew and became more dynamic.
- Yarn - Yarn is a JavaScript package manager.
- React State - allows components to create and manage their own data
- CRUD - create, read, update and delete
- this - A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.
Inside a Function:  The value of "this" depends on how the function is called. In the global execution context (outside of any function): "This" refers to the global object whether in strict mode or not.
