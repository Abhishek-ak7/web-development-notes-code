//@Finding maximum in an array
// let arr=[20, 39, 67, 12, 23];

// let max_arr=arr.reduce((res, el)=>{
//     if(res>el) return (res);
//     else return el;
// }); 
// console.log(max_arr);



//@Check if all numbers in our array are multiples of 10 or not.
// let arr=[10, 20 , 30 ,40 ,5 ,60];
// let print=arr.every((el)=>(el%10==0));
// console.log(print);



//@Finding mini in an array
let arr=[20, 39, 67, 12, 23];

let max_arr=arr.reduce((res, el)=>{
    if(res<el) return (res);
    else return el;
}); 
console.log(max_arr);