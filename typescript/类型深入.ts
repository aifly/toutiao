
/*

class Person{
    constructor(){

    }
}

var p:Person = new Person()
 
function add(a:number,b:number) : number{
    return a + b;
}

var arr : number [] = []

arr.push(1)
arr.push(NaN)
arr.push('123')



function showName (name = '畅哥聊技术') : void{
    console.log(name);
}

showName()



function say(firstName:string,lastName ?:string) :string{

    return firstName + lastName;

}


say('畅哥聊技术');
say('张','三');





*/

function sum(x1:number,...args:number []):number{    
    var res :number = 0;
    res = args.reduce((prev,next)=>{
        return prev+next;
    },x1)
    return res;
}


console.log(sum(1,2,3,4))
console.log(sum(1,2,3))















