

// Q - Give an example where call, apply and bind is required ?
// Ans - All of these are required in case you dont't want to write a method multiple times in different constuctor function, imagine if the method is simmilar in two different constuctor function but they work exactly the same so rather than writing in two times we can just use the call aplly bind method,so if in case you have to make a change you will not have to make that changes to all the constructor function, using call, apply and bind we can save our efforts and time, Now how it is used.

// Here we are creating two constructor functions with same parameter first & last name - 

function Student(firstname,lastname,subject){
    this.firstname = firstname
    this.lastname = lastname
    this.subject = subject

    // this.greet = function(){
    //     console.log(`${this.firstname} ${this.lastname}`)
    // }
}

function Employee(firstname,lastname,subject){
    this.firstname = firstname
    this.lastname = lastname
    this.subject = subject

    // this.greet = function(){
    //     console.log(`${this.firstname} ${this.lastname}`);
    // }
}

// now we have to use the constructer methods to geet not writting it multiple time for diiferent 

let student1 = new Student("Ambuj","kumar");
let employee1 = new Employee("Ankit","kumar");

// student1.greet();
// employee1.greet();

// As both the constuctor had the same greet function so we took that out and we can use call, apply or bind to connect it to the respective constructor


const greet = function(prefix, sufix){
    console.log(`${prefix} ${this.firstname} ${this.lastname} ${sufix}`);
}

// Using call method (comma seperated values) - 

// greet.call(student1,"Hi!", "How are you ?");
// greet.call(employee1, "Mr.", "How are you ?");

// Using apply method, this only diff is we take paremeters in arr (array seperated values) - 

// greet.apply(student1,["Hi!", " - How are you ?"]);
// greet.apply(employee1, ["Mr.", " - How are you ?"]);

// Using Bind method, Bind return us a new function, it is up to us when we want to invoke it - 

const fn = greet.bind(student1);

// Here i am invoking the binded funtion to print the desiered result - 

// fn("Hi!", "How are you ?")


// Q - What is the difference between readFile and readFileSync ?
// Ans - 
// readFileSync() is synchronous and blocks execution until finished. These return their results as return values.
// readFile() are asynchronous and return immediately while they function in the background. You pass a callback function which gets called when they finish.

// Q - Explain what node.js is ?
// Ans - 
// Node.js is an open-source, cross-platform JavaScript runtime environment and library to run web applications outside the client’s browser. It is used to create server-side web applications.Node.js is perfect for data-intensive applications as it uses an asynchronous, event-driven model.

// Q - What is the difference of JS from browser to JS on node.js ?
// Ans - JavaScript is a simple programming language that runs in any browser with JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.

// Q - Write a program to check two objects are equal ( deep equal ) ? 
// Ans - 

// Basically the Deep equal checks the objs recursivily and it get inside the value and check both the objects, however Shallow equals check the objects iterativly and it check the lenth and the keys onplay. 

// var obj1 = {
//     p1: 'v1',
//     p2: 'v2',
//     p3: 'v3',
// }

// var obj2 = {
//     p1: 'v1',
//     p2: 'v2',
//     p3: 'v3',
// }



// function shallowEqual(obj1,obj2){
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);

//     console.log(keys1)

//     if(keys1.length !== keys2.length){
//         return false;
//     }

//     for(let key of keys1){
//         if(obj1[key] !== obj2[key]){
//             return false;
//         }
//     }
//     return true;

// }

