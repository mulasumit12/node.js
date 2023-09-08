//Example 1-Registering for the events to be fired only one time using once.
//Example 2-Create an events emitter instance and register a couple of callbacks
//Example 3-Registering for the event with callback parameters

const EventEmitter =require("events");//class
const event=new EventEmitter();
//1
// event.on('sumit',()=>{
//    console.log("my name is sumit"); 
// })
// event.emit('sumit');//create my own events


//2

// event.on("sumit",()=>{
//     console.log("my name is sumit");
// })
// event.on("sumit",()=>{
//     console.log("my name is subha");
// })
// event.on("sumit",()=>{
//     console.log("my name is akash");
// })
// event.emit("sumit");

///3

event.on("checkPage",(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage",200,"ok");