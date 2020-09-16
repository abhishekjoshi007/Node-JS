/*----------------------------------------------------------------------------------------------------------------------- */
/*------20. Async and promises*/

//asynchronous code doesn't execute or finish immediately but synchronos code does

// Let's say I set a timer with set timeout which is a function built into nodejs, there we define a function that should 
// execute after a certain timer expired.

// setTimeout(() => {
//     console.log('Timer is done')
// },2000);

// When working with async code, we get multiple techniques of well handling it.
// The callback function is one,
// There is nothing wrong with it but you'll face a problem if you have a couple of depending async operations.

const fetchdata=callback => {
    
    // So here I will actually expect an argument which I'll name callback because this argument will be a function I will 
    // eventually call in my inner function here once I'm done with the timer 
    setTimeout(() => {
        callback('Done!');
    }, 1500);

};

setTimeout(() => {
    console.log('Timer is Done');
    fetchdata(text => {
        console.log(text);
    })
},2000);



/*--- Promises*/

// Now if we have a couple of nested async calls as we have here, we go deeper and deeper from a callback perspective
// and that is why we also have a feature called promises which we can use in nodejs. Now often we'll use
// third party packages that already use promises for us,

// so the syntax I'll show you now is one you rarely have to write on your own.

const fetchdata1=() => {
    //new is used to create new object
    //Promise consists of 2 arg
    //resolve-that resolve the promise successfully
    //reject- it throws an error
    const promise=new Promise((resolve,reject) =>
    {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};


setTimeout(() => {
    console.log('Timer is Done');
    //then is used 
    fetchdata()
    .then(text =>
        {
            console.log(text);
            return fetchdata1();
        })
    .then(text2 =>
    {
    console.log(text2);
    return fetchdata1();
    });
            
},2000);


/*---------Template Literals--------*/

//One other feature, we'll use from time to time are template literals

// It's a different way of writing strings.Instead of using double or single quotation marks:
// 'A String'
// or
// "Another string"

// you can use backticks (`)
// Another way of writing strings`

// Now why would we use that way of creating strings?
// With that syntax, you can dynamically add data into a string like this:

// const name = "Max";
// const age = 29;
// console.log(`My name is ${name} and I am ${age} years old.`);
// This is of course shorter and easier to read than the "old" way of concatenating strings:

// const name = "Max";
// const age = 29;
// console.log("My name is " + name + " and I am " + age + " years old.");

