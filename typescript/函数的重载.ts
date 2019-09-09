
function getInfo(str:string) :void;
function getInfo(num:number) :void;
function getInfo(obj:any):void{
    if(typeof obj === 'string'){
        console.log(obj)
    }
    else if(typeof obj === 'number'){
        console.log(obj**2);
    }
}

getInfo('123');
getInfo(100);