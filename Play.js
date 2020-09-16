//Variable
var name='Abhishek'; //string
var age='22';
var hobbies=true;

//function
function first(username,userage,userhobbies)
{
return ('Name is ' +
         username +
        ' ,Age is ' + 
        userage +
        ' ,Hobbies are '+ 
        userhobbies
       );
}

console.log(first(name,age,hobbies));