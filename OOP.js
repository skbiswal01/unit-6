

 // What is OOPs ?

//  The full form of opps is (Object oriented Programming) it refes to create a program using objects also know as JS classes.
//  It works simmilar to a constructer function, where we provide a blue print and using that blurprint we can create different objects.
 
// example : imagine you are maiking a building with many flats you will have a blue print for how the rooms will looks and all the rooms
// in that bulding will have the same structure however they can have different decodeURI.

// Below we have created a class where it will give a Response of "Hello World!" 

class hello{

    // here message can be seen as a method, you can provide it a mathermatical function too

    message(){
        console.log("Hello World!")
    }

    rock(){
        console.log("Rock The World!")
    }
}

// Here we are creating a new varibale object using the above class

let a = new hello();

// we are using the hello class and choosing the message method for variable "a"; 

a.message()  // Hello World!

// here we are coosing a different method 

a.rock()  // Rock The World!


// Types of Method - 

// 1. Contructor -

//     constructor(){
//         console.log("first")
//     }


// 2. Prototype -

//     message(){
//         console.log("second")
//     }
    
// 3. Static - 
    
// static "name of the function"(){
//     console.log("Third")
// }



// example - 
        
        class student{
        
            //Contructor Method -
            constructor(name, age){
                this.studentname = name;
                this.studentage = age;
                console.log("Constructor Function");
            }
        
            //Prototype Method - 
            hello(){
                console.log(`Hello ${this.studentname}Your age is ${this.studentage}`);
            }
        
            //Static Method - 
            static staticMethod(){
                console.log("This is a Static Method");
            }
        }
        
        let connst = new student("Ambuj ", 25);
        connst.hello();
        
        student.staticMethod()
        //     }
        
        
        
        
        