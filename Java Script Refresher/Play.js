//Variable

//string
// var name='Abhishek'; 
// var age='22';
// var hobbies=true;

let name='Abhishek';
let age='22'; 
let hobbies=true;


//function
//Arrow function (another way of defining a Function)
//Advntages short syntax
const first= (username,userage,userhobbies) => {      
        return ('Name is ' + username +
                ', Age is ' + userage+
                ' and Hobbies are '+ userhobbies
               );
};


//couple of shorter syntax
//if the arrow function has only one stmt
const add=(a,b)=> a+b;

//if the arrow function has no arguments
const addrandom=()=>1+2;



// function first(username,userage,userhobbies)
// {
// return ('Name is ' + username +
//         ', Age is ' + userage+
//         ' and Hobbies are '+ userhobbies
//        );
// }

// console.log(first(name,age,hobbies));
// console.log(add(2,3));
// console.log(addrandom());

//obj. is js (used for grouping data together)
const person={
 name:'Abhishek',
 age:29,
 //function inside obj.
  greet()
  {
          console.log('Hi, I am ' + this.name);
  }

/*Another way*/
//  greet: function() 
//  {
//         console.log('Hi, I am ' + this.name);
//  }
}
console.log(person);

//to access function
person.greet();


/*Arrays and Arrays Methods */
let hobbies2=['Sports','Cooking']

// for(let hobby of hobbies2)
// console.log(hobby);

//map is for editing the exisiting array
console.log(hobbies2.map(hobby =>
        {
        return 'Hobby: '+hobby;
        }));
console.log(hobbies2);
//we are not chaning array we are editing it
hobbies2.push('programing')
console.log(hobbies2);

/*----------------------------------------------------------------------------------------------------------------------- */
/*------18. Spread and Rest operator */

//   Let's say we want to implement a pattern where when we add a new hobby, we don't edit the original array
//   but we create a new array with all the old values and the new value,this is actually a pretty common pattern 
//   called immutability where we never edit existing values but where we always replace them with copies plus the changes

// The idea behind that is that we avoid errors because we always have this clear approach of copy then edit and don't edit
// existing objects which might lead to more unreadable code.

//we got a couple of possible techniques, one of them is to use the slice operator.
console.log(hobbies2.slice());

//Now instead of slice, there is also a different technique, we can create a new array with square brackets

console.log([hobbies2]);

// It gives us an array with another array in it,so the outer array has only one element and that's the inner array.
// So it's not a copy,it's just a new array where the first element is the old array and with that I mean the exact same object,
// not a copy of that.

//IN order to resolve that we use spread operator(...)
// The spread operator are three dots we can add in front of an array or of an object and these three dots are an operator 
// they do one thing,they take the array or object after the operator and pull out all the elements or
// properties,so all the elements of the array or all the properties of an object and put it to whatever is around

console.log([...hobbies2]);

//line 46 obj person
const copiedperson={...person};
console.log(copiedperson);

//Rest operator

// we could use the so-called rest operator, ...and then just args and this will actually take all the arguments,
// how many we might specify that doesn't matter and it'll bundle them up in an array for us.

const toarray=(...args)=>
{
        return args;
}

console.log(toarray(1,2,3,4));

//Spread and Rest are the same operator by the syntax or from a syntax perspective, the name differs depending on the place where you use it.

//Are you using it to pull elements or properties out of arrays or objects, then it would be the (spread operator).
//Are you using it to merge multiple arguments into an array and you use it in the argument list of a function,then it's the (rest operator).


/*----------------------------------------------------------------------------------------------------------------------- */
/*------19. Destructuring (it simply allows us to access elements in objects or arrays quickly by their name or position )*/

//so I have a new function, printName let's say that is taking full person obj on line 46

const printname = (persondata) =>
{
        //so we get the person here and I only want to console log person.name.
        console.log(persondata.name);
}

printname(person);

// but in this function here, we are only interested in the name.We can then use a syntax or a feature called
//  object destructuring where we add curly braces here in the argument list and we then specify the property of the 
//  incoming object we are interested in i.e name here(others property will be droped)

const printname2 = ({name,age}) =>
{
        console.log(name,age);
}

printname2(person);


//you can also destructure arrays,so if we go back to the hobbies2 (68) which we have here, well then if you would want to destructure 
const [hobby1,hobby2]=hobbies2;
console.log(hobby1,hobby2);