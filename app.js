// let                                      //variabl // var //let
// alert("hellow world");

// let firstname = "ishaq";               //variabl // var //let
// alert(firstname)

// variable rules
// 1. legal or illegal
// use camel case for long variables
// i.e
//legal
// allowed special characters are - $
//let lastName // camel case
//let last_name // snake case
//let $namewith$dollar="";
//let _namewith_dollar="";
//varibale cannot start with numbe
//let firs8tname is ok
// let 8firstname is wrong
// alert (lastName )

//illegal
//spaces

// alert()


// smit js02-------------------------------------------------------------------------------
// let data="hello ";
// let data2="students";
// let data3=data+data2;
// console.log(data3);
// strings concatnation
// let data="hello ";
// let data2="students";
// let data3=data+data2;
// console.log(data3);           // strings concatnation

// let data=5;
// let data1=1;
// let data2=data+data1
// let data2=data+data1;
// console.log(data2);           no ""  no strings concatnation // additon will take place

// let data= "hello students";
// let data2=data.includes ("students");
// console.log(data2);

// let data="hello students";
// let data1=data.includes("student");
// console.log(data1);



// diffrent addition method
// let data="5";
// let data1=1;
// let data2=
// console.log(data+data1);  


// look down

// let data="5";
// let data1=1;
// console.log(+data+data1);

// 2 2

// look down

// let data="5";
// let data1=1;
// console.log(parseInt(data)+data1);

//   3

// look down


// let data = "5";
// let data1 = 2;
// console.log(+(data)%data1);

// well we are using math oprator where + is math oprator we canperform +-*/%


// let data = "5";
// let data1 = 2;
// console.log(+(data)+data1);

// let data = "5";
// let data1 = 2;
// console.log(+(data)/data1);



// let data="5";
// let data1=1;
// console.log(parseInt(data)-data1);
// well we are using math oprator where "parseInt" is math oprator we canperform +-*/%


// here we have % is known as modulo or remaider

// let data="12";
// let data1=4;
// console.log(parseInt(data)%data1);  in this we have remainder 0


// let data="11";
// let data1=4;
// console.log(parseInt(data)%data1);   in this we have remainder 3





// things same to alert
// let userfavnum=prompt("what is your fac number")  mistake

// 




// let userfavnum=prompt("what is your favrite number");
// console.log(userfavnum);


// let userName=prompt("what is your name");
// console.log(userName);



// let userName=prompt("what is your name");
// document.write("welcome to my website "+userName);


// let randomNumber=Math.random();
// console.log(randomNumber);



// let randomNumber=Math.random();
// let roundnumber=Math.round(randomNumber);
// console.log(roundnumber)


// revision begins 42:22



// last topics 46:38

// bodmas

//03 ishaq bhojani js03 ishaq bhojani js03 ishaq bhojani js03



// string ko + through 
// alert box string hota ha

// comparison oprators

// console.log(5=="5")
// double equalsto value ka firqa ni dekhta

// console.log(5==="5")
// triple equalsto value ka firq bhi dekhta ha

// console.log(5!=5);

// let num=5
// let num1="6"
// console.log(num1 != num)

// let num="5";
// let num1="7";
// console.log(num1 !== num);

// let num=5
// let num1=4
// console.log(num1 > num)

// let num=5
// let num1=5
// console.log(num <= num1)

// let num=10
// let num1=9
// console.log(num >= num1)

// ----------------if--------and---------------else

// let userAge = +prompt("Enter Your Age");
// if (userAge >= 18) { console.log("You Can Apply For Cnic"); } else{console.log("You Can not Apply For Cnic")}


//  else {console.log("You Can Apply For Cnic")}

// let userage=+prompt("Enter Your Age");
// if (userage>=18){console.log("you can apply");}
// else {console.log("you can not apply")}

// let userfavnum= +promt("Entrer a Number");
// let computernum=Math.round(Math.random()*10);
// if(userfavnum===computernum){console.log("you won!");}
// else {console.log("you lose"+computernum)}


// let userFavNum=+prompt("enter a number");
// let computerNum=Math.round(Math.random()*10);

// if(userfavnum===computernum){console.log("you won!");}
// else {console.log("you lose"+computernum)}

// let userfavnum=+prompt("Enter Your Fav Num");
// let computernum=Math.round(Math.random()*10);
// if (userfavnum===computernum){console.log("you won");}
// else{console.log("you lose"+computernum);}

let userfavnum=+prompt("even or odd");
let computernum=Math.round(Math.random()*10);
if (computernum%2===0){console.log("you won");}
else {console.log("you lose"+computernum)}
