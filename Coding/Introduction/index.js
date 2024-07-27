// *******************1. Ways to print in Javascript ***********************
// console.log("Hi bro") ;
// alert("How are U ?") ;
// document.write("This is document.write") ;

// *******************2. Javascript console API ***********************
// console.log("Hi bro |",6*4,"| Kya hal hn") ;
// console.warn("This is warning message.") ;
// console.error("This is error message.");
// console.clear() ;
// console.assert(4==6);
// console.assert(4==(2*2));
// *******************3. Javascript Variable ***********************
var num1 = 434;
var num2 = 3;
// console.log(num1 + num2) ;
// *******************4. Javascript Datatypes of Variable ***********************
// Numbers
var num3 = 43;
var num4 = 332.234;
// Strings
var str1 = "This is string.";
var str2 = "This is another string.";
// Objects
var marks = { Ali: 34, Aslam: 324, Asif: 3423 };
// console.log(num3 + num4) ;
// console.log(str1 + " " + str2) ;
// console.log(str1, str2) ;
// console.log(marks) ;
// console.log(marks.Ali) ;
// console.log(marks.Asif) ;
// Booleans
var a = true;
var b = false;
// console.log(a, b) ;

var und = undefined;
var und1;
// console.log(und,und1);
var nl = null;
// console.log(nl);
/*
At High Level -> types of Datatypes
1.Primitive DT --> null,undefined,Number,String,Boolean,Symbol.
2.Reference DT --> Arrays,Objects
*/
// Arrays
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, true, "Eleven", 34.5];
// console.log(arr);
// console.log(arr[0],arr[3],arr[6],arr[7],arr[8]);
// console.log(arr[9],arr[10],arr[11],);
// *******************5. Javascript Operators ***********************
// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

// Assignment Operators
var c = b;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators

// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
// console.log(!false);
// console.log(!true);

// *******************6. Javascript Functions ***********************



// *******************7. Javascript Conditionals ***********************

/*
var age = 41;
// Single if statement
if(age > 18){
    console.log('You can drink rasna water');
}

// if - else statement
// if(age > 18){
//     console.log('You can drink rasna water');
// }
// else{
//     console.log('You cannot drink rasna water');
// }

age = 25;
// if-else Ladder
if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");
*/

// *******************8. Javascript Loops ***********************

var arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(arr);

// For loop
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;                        // Break and continue concept
//         continue;
//     }
//     console.log(arr[i])
// }

// Other way of for loop
// arr.forEach(function(element){
//     console.log(element);
// })

// Same as above
// arr.forEach(function (element) { console.log(element); })

// const and let concept --> let has scope only inside the block 
// const ac = 0;
// ac++;
// ac = ac +1;
// let j = 0;

// While Loop
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// do While Loop
// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

// *******************9. Javascript Array Methods ***********************

let myArr = ["Fan", "Camera", 34, null, true];
// console.log(myArr.length);
// myArr.pop();
// myArr.push("harry")
// myArr.shift()
const newLen = myArr.unshift("Harry")
// console.log(newLen);
// console.log(myArr);

// *******************10. Javascript String Methods ***********************

// String Methods in JavaScript
let myLovelyString = "Harry is a good boy good good Harry";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))

// console.log(myLovelyString.slice(1,4))
// d = myLovelyString.replace("Harry", "Rohan");
// d = d.replace("good", "bad");
// console.log(d, myLovelyString)

// Paractise
// console.log(myLovelyString.indexOf("is")) ;
// console.log(myLovelyString.lastIndexOf("good"));
// console.log(myLovelyString.slice(2,24)) ;
// dd = myLovelyString.replace("good","best");
// console.log(dd);
let myArrr = ["Fan", "Camera", 34, null, true];
// console.log(myArrr.toString()) ;               // It make the array a string
// console.log(myArrr.sort()) ;

// *******************11. Javascript Date ***********************

// let mydate = new Date() ;
mydate = new Date() ;
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getMinutes());
// console.log(mydate.getHours());
// console.log(mydate.getDay());

// *******************12. Javascript DOM (Document Object Model) ***********************

let element = document.getElementById("btn");
// console.log(element);
let elementClass = document.getElementsByClassName("container");
// console.log(elementClass);
// elementClass[0].style.background = "yellow";
elementClass[0].classList.add("bg-color-cls"); 
elementClass[0].classList.remove("bg-color-cls"); 
elementClass[0].classList.add("text-color"); 
// console.log(elementClass[0].innerHTML);
// console.log(elementClass[0].innerText);
// console.log(element.innerHTML);
// console.log(element.innerText);
tgnm = document.getElementsByTagName('button');
tgnm1 = document.getElementsByTagName("div");
// console.log(tgnm);
// console.log(tgnm1);
let CreatedElement = document.createElement("div");
CreatedElement.innerText = "This is created div.";
tgnm1[0].appendChild(CreatedElement);
let CreatedElement1 = document.createElement("p");
CreatedElement1.innerText = "This is created paragraph.";
tgnm1[0].replaceChild(CreatedElement1,CreatedElement);
let CreatedElement2 = document.createElement("b");
CreatedElement2.innerText = "This is created bold line.";
tgnm1[0].replaceChild(CreatedElement2,CreatedElement1);

// removeChild(element); ----> To remove an element

// console.log(document.location);
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.images);
// console.log(document.scripts);
// console.log(document.links);
// console.log(document.title);

// Selecting using query
qr = document.querySelector(".container");
qrr = document.querySelectorAll(".container");
qrrr = document.querySelectorAll("#btn");
// console.log(qr);
// console.log(qrr);
// console.log(qrrr);

// *******************13. Javascript Events ***********************

function Clicked() {
    console.log("The button btn is clicked.");
}

// window.onload = function() {
//     console.log("The document has laoded.");
// }

// firstContainer.addEventListener('click',function(){
//     console.log("Click on container occur.");
//     Id1 = document.getElementById('btn');
//     Id1.style.border = "4px solid red";
//     Id2 = document.getElementById('btn1');
//     Id2.style.color = "blueviolet";
//     Id2.style.color = "red";
// })

// firstContainer.addEventListener('mouseover',function(){
//     console.log("Mouse on event occur.");
// })

// firstContainer.addEventListener('mouseout',function(){
//     console.log("Mouse out event occur.");
// })

// firstContainer.addEventListener('mouseup',function(){
//     console.log("Mouse up event occur when clicked on container.");
// })

// firstContainer.addEventListener('mousedown',function(){
//     console.log("Mouse down event occur.");
// })

// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll(".container")[1].innerHTML = "<b>Text has been changed in div 2.</b>"
//     console.log("Click on container occur.");
// })

// let prevHtml = document.querySelectorAll(".container")[1].innerHTML ;
// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll(".container")[1].innerHTML = prevHtml;
//     console.log("Mouse down event occur.");
// })
// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll(".container")[1].innerHTML = "<b>Text has been changed in div 2.</b>"
//     console.log("Mouse down event occur.");
// })

// *******************14. Javascript Functions ***********************

// Simple Function 
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
// DRY = Do not repeat yourself
// c1 = avg(4, 6);
// c2 = avg(14, 16);
// console.log(c1, c2);

// Arrow Function
averg = (a,b)=>{
    c = (a + b) / 2;
    return c;
}
c1 = averg(4, 6);
c2 = averg(14, 16);
// console.log(c1, c2);

// Greet Funciton
greet = ()=>{
    console.log("Salam.How are you.");
    document.querySelectorAll(".container")[1].innerHTML = "<b>Set Time interval has fired.</b>"
}

// *******************14. Javascript SetTimeout and setinterval ***********************

// It is use to shedule something and greet is function here and it's beside is time interval.
// setTimeout(greet, 2000);
// setInterval(greet, 2000);
// clr = setTimeout(greet, 5000);
// clr = setInterval(greet, 2000);
// clearTimeout(clr);
// clearInterval(clr);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// *******************14. Javascript Local Storage ***********************

localStorage.setItem('name','ARZ');
// localStorage.clear();
localStorage.setItem('color','purple');
// console.log(localStorage.getItem('color'));
// localStorage.removeItem('name')
// localStorage.clear();

// *******************14. Javascript JSON ***********************

obj = {name: 'ARZ', color: 'purple', length: 2, ob: {"is":'Ha\\"s'}}; 
// To print in this type of situation a more backslash \ is written to ensure that a double qoute is existed there.
jsn = JSON.stringify(obj);
// console.log(jsn);
// console.log(typeof obj);
// console.log(typeof jsn);
// parse_item = JSON.parse(`{"name":"ARZ","color":"purple","length":2,"ob":{"is":"Ha\\\"s"}}`);
parse_item = JSON.parse('{"name":"ARZ","color":"purple","length":2,"ob":{"is":"Ha\\\"s"}}');
console.log(parse_item);

// *******************14. Javascript Versions ***********************
// ECMAscript versions
// It is a standard for javascript to support all the browsers.

// Template literals | Backticks
a = 34;
console.log(`this is my ${a}`); 




