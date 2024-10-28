// // // // // function task1(callback){
// // // // //     setTimeout(function(){
// // // // //         console.log("Task 1 is completed");
// // // // //         callback();
// // // // //     },2000);
   
// // // // // }
// // // // // function task2(callback){
// // // // //     setTimeout(function(){
// // // // //         console.log("Task 2 is completed");
// // // // //         callback();
// // // // //     },1000);
  
// // // // // }
// // // // // function task3(callback){
// // // // //     setTimeout(function(){
// // // // //         console.log("Task 3 is completed");
// // // // //         callback();
// // // // //     },5000);
  
// // // // // }
// // // // // function task4(){
// // // // //     setTimeout(function(){
// // // // //         console.log("Task 4 is completed");
// // // // //     },3000);
// // // // // }

// // // // // task1(
// // // // //     ()=>{task2(
// // // // //         ()=>{task3(
// // // // //             ()=>{
// // // // //                 task4();
// // // // //             }
// // // // //         )}
// // // // //     )}
// // // // // );

// // // // let promise = new Promise(function(resolve,reject){
// // // //     let login=false;

// // // //     if(login==true){
// // // //         resolve("Login Successfully");
// // // //     }
// // // //     else{
// // // //         reject("Login Failed");
// // // //     }
// // // // })

// // // // promise.then(function(result){
// // // //     console.log(result);
// // // // }).catch(function(error){
// // // //     console.log(error);
// // // // });

// // // function task1(){
// // //         setTimeout(function(){
// // //             console.log("Task 1 is completed");
// // //         },2000);
// // //         return new Promise(function(resolve,reject){
// // //             resolve("Task 1 is Done");
// // //             reject("Error in task1");
// // //         });
// // //     }
// // //     function task2(){
// // //         setTimeout(function(){
// // //             console.log("Task 2 is completed");
// // //         },1000);
// // //         return new Promise(function(resolve,reject){
// // //             let status=false;
// // //             if(status==true){
// // //                 resolve("Task 2 is Done");
// // //             }
// // //             else{
// // //                 reject("Error in task2");
// // //             }
// // //         });
// // //     }
// // //     function task3(){
// // //         setTimeout(function(){
// // //             console.log("Task 3 is completed");
// // //         },5000);
// // //         return new Promise(function(resolve,reject){
// // //             resolve("Task 3 is Done");
// // //             reject("Error in task3");
// // //         });
// // //     }
// // //     function task4(){
// // //         setTimeout(function(){
// // //             console.log("Task 4 is completed");
// // //         },3000);
// // //         return new Promise(function(resolve,reject){
// // //             resolve("Task 4 is Done");
// // //             reject("Error in task4");
// // //         });
// // //     }

// // // task1().then(function(result){
// // //     console.log(result);
// // // }).catch(function(error){
// // //     console.log(error);
// // // }).then(task2().then(function(result){
// // //     console.log(result);
// // // }).catch(function(error){
// // //     console.log(error);
// // // })).then(task3().then(function(result){
// // //     console.log(result);
// // // }).catch(function(error){
// // //     console.log(error);
// // // })).then(task4().then(function(result){
// // //     console.log(result);
// // // }).catch(function(error){
// // //     console.log(error);
// // // }))

// // const myClass=[
// //    {
// //        name:"Saurashya",
// //        age:24
// //    },
// //    {
// //         name:"Shreyash",
// //         age:24
// //    },
// //    {
// //        name:"Saurav",
// //        age:23
// //    }
// // ]
// // console.log(myClass[1].name);

// // let student=new class{
// //     constructor(name,age){
// //         this.name=name;
// //         this.age=age;
// //     }
// // }

// class Student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// let saurashya=new Student("saurashya",24);
// console.log(saurashya.name);
// console.log(saurashya.age);