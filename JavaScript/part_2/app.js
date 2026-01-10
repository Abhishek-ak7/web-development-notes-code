//Practice QA 
//@ create a traffic light system that shows what to do based on color.
// let color="red";
// if(color=="red"){
//     console.log("Stop you vechile");
// }if(color=="yellow"){
//     console.log("Slow down your vhicle")
// }if(color=="green"){
//     console.log("Good to go");
// }

//Practive Q2
//create a sytstem to calculate popcorn prices based on size customer asked:
/* if size if 'XL', price is Rs. 250
   if size is 'l', price is rs. 200
   if size is 'm', price is rs.100
   if size is 's, price is rs.50*/
// let size="XL";
// if(size==="XL"){
//     console.log("Price is Rs.250");
// }else if(size==="L"){
//     console.log("Price is Rs.200");
// }else if(size==="M"){
//     console.log("Price is Rs.100");
// }else{
//     console.log("Price is Rs.50");
// }


/* practive Q3
A "good string" is a string that starts with the letter 'a' & has a length >3. write a program to find if a string is good or not.
*/
// let s="man";
// let length=s.length;
// if(s[0]='a' && length>3){
//     console.log("Good string");
// }else{
//     console.log("Not good string");
// }



/* Practive Q4
Use switch statement to print the day of the week using a number variable 'day' with value 1 to 7.
1=Monday , 2=Tuesday and so on
*/
// let num=7;
// switch(num){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thrusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid input");
// }

//--------------------------------------------------------------------Pricatice sheet----------------------------------------------------------------
//Ans1. 
// let num=100;
// if(num%10==0) console.log("Good");
// else console.log("bad");

//Ans2.
// let name=prompt("Enter your name: ");
// let age=prompt("Enter your age: ");
// alert(`${name} is ${age} year old.`);

//Ans3.
// let quater=9;
// switch(quater){
//     case 1:
//         console.log("January, February, March");
//         break;
//     case 2:
//        console.log("April, May, June");
//         break; 
//     case 3:
//         console.log("July, August, September");
//         break;
//     case 4:
//         console.log("October, November, Decemebr");
//         break;
//     default:
//         console.log("ivalide input");

// }


//Ans 4.
// let s=prompt("Enter a string: ");
// let n=s.length;
// if((s[0]=='A'|| s[0]=='a') && n>=5) alert("Golden String");
// else alert("Not a golden string");


//Ans 5.
// let num1=prompt("Enter num1: ");
// let num2=prompt("Enter num2: ");
// let num3=prompt("Enter num3: ");
// if((num1>num2) && (num1>num3)) alert(`Geatest number is: ${num1}`);
// else if((num2>num1) && (num2>num3)) alert(`Geatest number is: ${num2}`);
// else alert(`Geatest number is: ${num3}`);


//Ans 6.
let num1=prompt("Enter num1: ");
let num2=prompt("Enter num2: ");
let n=num1%10;
let m=num2%10;
if(n==m) alert("Same last digit");
else alert("Not same digit");