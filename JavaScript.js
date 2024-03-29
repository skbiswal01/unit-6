// question 1: What are scopes ?Type of scopes
// ans:  Scope determines the accessibility (visibility) of variables.

//     JavaScript has 3 types of scope:

//     Block scope
//     Function scope
//     Global scope


//     1st :Block scope - When we write a  variable inside the curly braces that makes a block.
//                       we can not access that variable outside the block.
//                       let and const are two js variables which provide block scope.


//     2nd :Funtion scope - When we write a variable inside the js function it becomes local for to function .and
//                          we can not access that variable outside the function
//                          that local variable have function scope.

//    3rd : Global scope - A variable declared outside a function, becomes GLOBAL.
//                         A global variable has Global Scope:
//                         All scripts and functions on a web page can access it. 


// question 2:What is hoisting ?
// ans: Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
//       In other words; a variable can be used before it has been declared.
//       Variables defined with let and const are hoisted to the top of the block, but not initialized.
//       The block of code is aware of the variable, but it cannot be used until it has been declared.
//     let:The variable is in a "temporal dead zone" from the start of the block until it is declared:
//     const :Using a const variable before it is declared, is a syntax errror, so the code will simply not run.



// question 3:what is "strict mode"?"use strict"?
// ans: "use strict"; Defines that JavaScript code should be executed in "strict mode".
//       It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
//       You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.
//  this:The this keyword in functions behaves differently in strict mode.
//       The this keyword refers to the object that called the function.
//       If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window):  

// question 4:this keyword?
// ans: The this keyword refers to the object that called the function. The this keyword refers to different objects depending on how it is used
//      In an object method, this refers to the object.
//      Alone, this refers to the global object.
//      In a function, this refers to the global object.
//      In a function, in strict mode, this is undefined.
//      In an event, this refers to the element that received the event. 


// question 5:explain Call,apply and bind?
// ans: call: With the call() method, you can write a method that can be used on different objects. 
//           The call() method is a predefined JavaScript method.
//           It can be used to invoke (call) a method with an owner object as an argument (parameter).
//         ex:person.fullName.apply(person1, "Oslo", "Norway");

//       Apply: Apply method is same as call method .There is a small difference bitween them--
//              The call() method takes arguments separately.
//              The apply() method takes arguments as an array.
//              ex:person.fullName.apply(person1, ["Oslo", "Norway"]);

//      Bind:With the bind() method, an object can borrow a method from another object.
//           Like we need to invoke a another function to invoke bind method.
//           It will not execute immidiately we can give it setTimeOut ,setInterval;

// question 8:what is Execution context ?
// ans: Every thing in JavaScript happens in Execution context;
//     when we run a js programs  global execution context is created 
//      it has two components.
//      context is a kind of environment.
//      It has two phases
//      1st :Variable environment ||global execution phase||execution phase-in this all the global variable and functions are stored as key value pairs.It is basically a memory componet.
//      2nd :Thread of execution || function execution phase|| creation phase -  in this phase  all the function executes and every function go to the call stack and again create a new execution-context
               
               
//              JavaScript is a synchronous single-threaded language   
//                 synchronous single-threaded language --
//             It means js can execute one command at a time in a spacific order.
//             It can go to next line when the line line before it has been executed.
            



// question 7:what is closures
// ans:A closure is a function having access to the parent scope, even after the parent function has closed.
//     A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
//     In other words, a closure gives you access to an outer function's scope from an inner function.
//     In JavaScript, closures are created every time a function is created, at function creation time.




// question 8: what is call stack or execution stack?
// ans: A call stack is a kind of stack which  takes care of calls multiple functions — 
//        what function is currently being run and what functions are called from within that function, etc.
//       - When a script calls a function, the function adds it to the call stack and then starts carrying out the function.
//       -Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
//       -When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
//       -If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.

// question 9:what is event loop?
// ans:The event loop is the secret behind JavaScript’s asynchronous programming.
//  JS executes all operations on a single thread,
//   but using a few smart data structures,
//    it gives us the illusion of multi-threading 


// call stack-The call stack is responsible for keeping track of all the operations in line to be executed. 
//             Whenever a function is finished, it is popped from the stack.
// event queue-The event queue is responsible for sending new functions to the stack for processing.
//                     It follows the queue data structure to maintain the correct sequence in which all operations should be sent for execution.
// Web Api -Whenever an async function is called,it is sent to a browser API. 
//           These are APIs built into the browser. Based on the command received from the call stack, the API starts its own single-threaded operation.


// question 10: what are higher order function?
// ans:A function that receives another function as an argument or that returns a new function or both is called Higher-order functions.
//      Higher-order functions are only possible because of the First-class function.
//       The function that we pass as an argument to another function is called the callback function.
//        Functions such as filter(),map(),reduce(),some() etc, these all are example of Higher-Order Functions.



// question 11:What are callback function?
// ans:Callbacks are a great way to handle something after something else has been completed. By something here we mean a function execution. 
//       If we want to execute a function right after the return of some other function, then callbacks can be used.
//       JavaScript functions have the type of Objects. So, much like any other objects (String, Arrays etc.), 
//       They can be passed as an argument to any other function while calling.
//       Callbacks are primarily used while handling asynchronous operations like – making an API request to the Google Maps,
//        fetching/writing some data from/into a file, registering event listeners and related stuff. All the operations mentioned uses callbacks. 
//       This way once the data/error from the asynchronous operation is returned, 
//       the callbacks are used to do something with that inside our code.


//       question 12:What is json ? diff bitween axios and json?
//       ans:Axios	Fetch
//           Axios has url in request object.                                        |	Fetch has no url in request object.
//           Axios is a stand-alone third party package that can be easily installed.|	Fetch is built into most modern browsers; no installation is required as such.
//           Axios enjoys built-in XSRF protection.                                  |	Fetch does not.
//           Axios uses the data property.                                           |	Fetch uses the body property.
//           Axios’ data contains the object.	                                      | Fetch’s body has to be stringified.
//           Axios request is ok when status is 200 and statusText is ‘OK’.	      | Fetch request is ok when response object contains the ok property.
//           Axios performs automatic transforms of JSON data.	                      | Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the .json() method on the response.
//           Axios allows cancelling request and request timeout.                    |	Fetch does not.
//           Axios has the ability to intercept HTTP requests.	                      | Fetch, by default, doesn’t provide a way to intercept requests.
//           Axios has built-in support for download progress.	                      | Fetch does not support upload progress.
//           Axios has wide browser support.	                                      | Fetch only supports Chrome 42+, Firefox 39+, Edge 14+, and Safari 10.1+ (This is known as Backward Compatibility).


// question 13:What is event bubble?
// ans: to top this we use event.stopPropagation();

          
 