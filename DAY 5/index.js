// // // // // // var x=7;
// // // // // // function myFunction(){
// // // // // //     var x="Hello From nodemon";
// // // // // //     return x;
// // // // // // }

// // // // // // var y=myFunction();

// // // // // // console.log(y);


// // // // // // let x=new Array([1,2,3,4,5]);
// // // // // // console.log(typeof(x));

// // // // // // console.log(1!="1");

// // // // // // && || 

// // // // // var x=4;

// // // // // // if(x==5){
// // // // // //     console.log(true);
// // // // // // }
// // // // // // else{
// // // // // //     console.log(false);
// // // // // // }

// // // // // switch(x){
// // // // //     case 1:
// // // // //         console.log("1");
// // // // //         break;
// // // // //     case 5:
// // // // //         console.log("this is five");
// // // // //         break;
// // // // //     default:
// // // // //         console.log("no value found");
// // // // //         break;
// // // // // }

// // // // for(let x=1;x<=10;x++){
// // // //     console.log(x);
// // // // }

// // // var x=[1,2,3,4,5];
// // // console.log(x);

// // // // x.forEach(element => {
// // // //     console.log(element*2);
// // // // });

// // // x.map(element=>{
// // //     console.log(element);
// // // })

// // function callMe(){
// //     console.log("Call me")
// // }

// // callMe();

// const myFunction=function(){
//     console.log("this is function as expression")
// }

// myFunction();

// function smallFunction(){
//     console.log("I am small function");
// }

// function bigFunction(FunctionName){
//     FunctionName();
// }

// bigFunction(smallFunction);


function add(a,b){
    return a+b;
}
function sub(a,b){
  return a-b;
}

function multiply(a,b){
   return a*b;
}
function divide(a,b){
    return a/b;
}
function calculator(add,sub,multiply,divide){
    var a=document.getElementById("expression").value;
    var expression=a.split(" ");
    console.log(expression[1]);
    var x=parseInt(expression[0]);
    var y=parseInt(expression[2]);
    var result;
    switch(expression[1]){
        case "+":
            result=add(x,y);
            break;
        case "-":
            result=sub(x,y);
            break;
        case "*":
            result=multiply(x,y);
            break;
        case "/":
            result=divide(x,y);
            break;
        default:
            console.log("Invalid Expression");
            break;
    }
    const resultField=document.getElementById("result");
    resultField.textContent=result;
}

const btn=document.getElementById("btn");

btn.addEventListener("click",function(){
    calculator(add,sub,multiply,divide);
})
