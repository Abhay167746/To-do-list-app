// function getData(dataid){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data", dataid);
//             resolve("success");
//         },2000);
//     });
// }

// //async -await
// async function getAllData(){
//     console.log("getting data 1...");
//     await getData(1);
//     console.log("getting data 2...");
//     await getData(2);
//     console.log("getting data 3...");
//     await getData(3);
//     console.log("getting data 4...");
//     await getData(4);
//     console.log("getting data 5...");
//     await getData(5);

// }

// // IIFE case
// // isme hme get dataall ko call lgane ki jrurat nhi pdti hai

// (async function (){
//     console.log("getting data 1...");
//     await getData(1);
//     console.log("getting data 2...");
//     await getData(2);
//     console.log("getting data 3...");
//     await getData(3);
//     console.log("getting data 4...");
//     await getData(4);
//     console.log("getting data 5...");
//     await getData(5);

// })();



// //promise chain

// // getData(1)
// // .then((res)=>{
// //     return getData(2);
// // })
// // .then((res)=>{
// //     return getData(3);
// // })
// // .then((res)=>{
// //    console.log(res);
// // })








// // console.log("fetching data1");
// // let p1=asyncFunc();
// // p1.then((res)=>{
// //     console.log(res);
// // });




// // let promise =new Promise((resolve, reject) => {
// //     console.log("i am a promise");
// //     reject("some error occured");
// // });


// // // // setTimeout(()=>{
// // // //     console.log("hello");
// // // // },4000); 

// // // function getData(dataid, getNextData){
// // //     setTimeout(()=>{
// // //         console.log("data", dataid);
// // //         if(getNextData){
// // //             getNextData();
// // //         }
// // //     },2000);
// // // }

// // // //callbackhell 

// // // getData(1,()=> {
// // //     getData(2,()=>{
// // //         getData(3);
// // //     });
// // // })



// api 

const URL= "https://api.thecatapi.com/v1/images/search";
const factPara=document.querySelector("#fact");


const getFacts=async ()=> {
    console.log("getting data ...");
    let response =await fetch(URL);
    console.log(response);
    let data = await response.json();
    factPara.innerText=data[0].text;
}