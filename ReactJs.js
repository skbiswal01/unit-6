// question 1:What is react ?
// ans:React is a JavaScript library for building user interfaces.
//     React is used to build single-page applications.
//     React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
//     React is a tool for building reuseable UI components.

// Virtual DOM -
//   -React creates a VIRTUAL DOM in memory.
//   -Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
  
// React only changes what needs to be changed!-
//   -React finds out what changes have been made, and changes only what needs to be changed. 
//   -You will learn the various aspects of how React does this in the rest of this tutorial.

// Facebook Software Engineer, Jordan Walke, created it.
// React.JS was first used in 2011 for Facebook's Newsfeed feature. 
// Current version of React.JS is V18.0.0 (April 2022).


// question 2:What is ReactDOM.render() function?
// ans: React renders HTML to the web page by using a function called ReactDOM.render().
//     The ReactDOM.render() function takes two arguments, HTML code and an HTML element.
//     The purpose of the function is to display the specified HTML code inside the specified HTML element.
//     But render where?
//     There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file
//     You'll notice a single <div> in the body of this file. This is where our React application will be rendered.
// example-ReactDOM.render(<p>Hello</p>, document.getElementById('root'));

// question 3:What is JSX in react?
// ans:JSX stands for JavaScript XML.
//     JSX allows us to write HTML in React.
//      JSX allows us to write HTML directly within the JavaScript code.
//     JSX makes it easier to write and add HTML in React
//     JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
//     JSX converts HTML tags into react elements

// ---> With JSX you can write expressions inside curly braces { }.
//     -The expression can be a React variable, or property, or any other valid JavaScript expression. 
//      JSX will execute the expression and return the result:
// ex- <h1>React is {5 + 5} times better with JSX</h1>

// fragments-->Alternatively, you can use a "fragment" to wrap multiple lines. 
//             This will prevent unnecessarily adding extra nodes to the DOM.
//             A fragment looks like an empty HTML tag: <></>.

// question 4:What is react components?
// ans:React is all about components.
//     Components are like functions that return HTML elements.
//     Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
//     Components come in two types, Class components and Function components.
//     When creating a React component, the component's name MUST start with an upper case letter.

// function components  - A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand.

// question 5: What is Props?
// ans:Props are arguments passed into React components.
//     Props are passed to components via HTML attributes.
//     props stands for properties.
//     React Props are like function arguments in JavaScript and attributes in HTML.
//     send props into a component, use the same syntax as HTML attributes
//     React components use props to communicate with each other. 
//     Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.
// --> React Props are read-only! You will get an error if you try to change their value
//      you can not change the props because it is immutable then how it is changing over the time because of states in react.

// question 6: who can you change the prop because it is immutable?
// ans:However, props are immutable—a term from computer science meaning “unchangeable.”
//     When a component needs to change its props (for example, in response to a user interaction or new data), it will have to “ask” its parent component to pass it different props—a new object! Its old props will then be cast aside, and eventually the JavaScript engine will reclaim the memory taken by them.
//     Don’t try to “change props”. When you need to respond to the user input (like changing the selected color), you will need to “set state”, which you can learn about in State: A Component’s Memory.
// -->you can not change the props because it is immutable then how it is changing over the time because of states in react.


// question 7: What is State?
// ans:Components often need to change what’s on the screen as a result of an interaction.
//     Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart. Components need to “remember” things:
//     the current input value, the current image, the shopping cart. 
//     In React, this kind of component-specific memory is called state.


// question 8: React hooks?
// ans:functions starting with use—can only be called at the top level of your components or your own Hooks.
//     Hooks don’t work inside classes — they let you use React without classes
//     You can’t call Hooks inside conditions, loops, or other nested functions.
//      Hooks are functions, but it’s helpful to think of them as unconditional declarations about your component’s needs. 
//     You “use” React features at the top of your component similar to how you “import” modules at the top of your file.

// If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component.
// APIs we need to learn first
// useState
// useEffect ( we will cover in another session )
// You must have noticed that the APIs begin with a use, this is intentional, and it is recommended practise to keep all hooks apis starting with use



// question 9:difference bitween redux and context apis?
// ans:Context API 	Redux
//             Built-in tool that ships with React                           	                      | Additional installation Required, driving up the final bundle size
//             Requires minimal Setup 	                                                              | Requires extensive setup to integrate it with a React Application
//             Specifically designed for static data, that is not often refreshed or updated         | Works like a charm with both static and dynamic data
//             Adding new contexts requires creation from scratch                                    |	Easily extendible due to the ease of adding new data/actions after the initial setup
//             Debugging can be hard in highly nested React Component Structure even with Dev Tool   | Incredibly powerful Redux Dev Tools to ease debugging
//             UI logic and State Management Logic are in the same component                         | Better code organization with separate UI logic and State Management Logic


// question 10:What is redux?
// ans:https://redux.js.org/tutorials/essentials/part-1-overview-concepts


// question 11: What is tree shaking ?
// ans:https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking


// question 12:What is prop drilling?
// ans:https://www.geeksforgeeks.org/what-is-prop-drilling-and-how-to-avoid-it/