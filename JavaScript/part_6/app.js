//@Create a function that prnits a poem.

// function display_poem(){
//     console.log("No man is an island\nEntire of itself,\nEvery man is a piece of the continent,\nA part of the main.");
// }

// display_poem();


//@create a funtion to roll a dice and always displays the value of the dice(1 to 6)
// function roll_dice(){
//     console.log(Math.floor((Math.random()*6+1)));
// }
// roll_dice();


//@create a function that give us the average of 3 numbers
// function avg(a,b,c){
//     console.log((a+b+c)/3);
// }
// avg(1,2,3);

//@create a function that return the sum of numbers from 1 to n.
// function sum(val){
//     let sum=0;
//     for(let i=1;i<=val;i++){
//         sum=sum+i;
//     }
//     return sum;
// }
// console.log(sum(5));


//@create a function that return the concatenation of all strings in an array.
// function concatenation_string(s){
//     let r="";
//     for(let i=0;i<s.length;i++){
//         r=r+s[i];
//     }
//     return r;
// }
// let arr=["ab","cd","ef","gh"];
// console.log(concatenation_string(arr));


//------------------part 7------------------
//@ WRITE an arrow function that return the square of a number'n'
// let n=prompt("Enter a number: ");
// const sum= (a)=> (a*a);
// console.log(sum(n));


//@write a function that prnt "Hello world" 5 times at intervel of 2s
let id=setInterval(()=>{
    console.log("Hello world");
},2000);
setTimeout(() =>{
    clearInterval(id);
    console.log("done!");
}, 11000);
