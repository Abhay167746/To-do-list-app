// // // let div=document.querySelector("div");
// // // console.log(div.getAttribute("id"));

// // // let id=div.getAttribute("id");
// // // console.log(id);

// // // let name=div.getAttribute("name");
// // // console.log(name);


// // // let para=document.querySelector("p");
// // // console.log(para.setAttribute("class","newclass"));

// // // let div=document.querySelector("div");
// // // div.style.backgroundColor="green ";
// // // div.style.fontSize="12px";
// // // div.innerText="hello";
// // // div.style.color="white";

// // // let newBtn=document.createElement("button");
// // // newBtn.innerText="click me!";
// // // console.log( newBtn);

// // // let p=document.querySelector("p");
// // // p.after(newBtn);

// // // let newheading=document.createElement("h1");
// // // newheading.innerText="hi this is abhay";

// // // document.querySelector("body").prepend(newheading);

// // // //node remove

// // // let para=document.querySelector("p");
// // // para.remove();

// // let newBtn=document.createElement("button");
// // newBtn.innerText="click me";
// // newBtn.style.backgroundColor="red";
// // newBtn.style.color="white";
// //  document.querySelector("body").prepend(newBtn); 

// //  //q 2

// //  let para =document.querySelector("p");

// let btn1 = document.querySelector("#btn1");

// // btn1.onclick=(evt)=>{ //here evt is an event
// //     console.log(evt);
// //     console.log(evt.type);
// //     console.log(evt.target);
// //     console.log(evt.clientX,evt.clientY);

// // }


// btn1.addEventListener("click", () => {
//     console.log("button was clicked-handler1");
// });
// btn1.addEventListener("click", () => {
//     console.log("button was clicked-handler2");
// });

// const handler3 = () => {
//     console.log("button was clicked-handler3");

// }
// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//     console.log("button was clicked-handler4");
// });

// btn1.removeEventListener("click", handler3)



// // let div=document.querySelector("div");

// // div.onmouseover=()=>{
// //    console.log("you are inside div");
// // }


// lets practice last question

let modebtn=document.querySelector("#mode");
let body=document.querySelector("body")
let currmode="light";

modebtn.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");

    }else{
        currmode="light";
        body.classList.add("light");
        body.classList.remove("dark");

    }
    console.log(currmode);
})
