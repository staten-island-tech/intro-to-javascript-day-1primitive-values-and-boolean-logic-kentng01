/////practice

/*let string = "string";
const edis = "edis";
let sentence = "Hello " + "Vicky";
let sentence2 = " and also Angel";
//let combine = sentence + sentence2;
let combine = `${sentence}${sentence2}`; //ES2015

let student1 = "Sandra";
let student2 = "Kelly";
let courseName = "AP CSP";
let teachername = "Whalen";

let year = 2020;
let nextYear = 2020 + 1;*/

/*let trueStatement = true;
let falseStatement = false;

let undefinedVar; */
//console.Log(underfinedVar); //do this a lot
//console.log(nonExistent); //null never declared
//console.log(truuStatement);

//if/ else if statements
//let student = "Karen";
//let age = 17;
//console.log(student === "Karen");//true
//console.log(student === "karen");//false
//console.log(student == "karen");//false
//console.log(age === "17"); //false
//console.log(age == "17"); //true

//let age = 16;
//let name = "Kristy";
/*console.log(age < 17);
console.log(age <= 17);
console.log(age =< 17);*/
//console.log(age == 16 | | age == 17); //if age equals 16 OR age == 17 then true
//console.log(age == 16 && name === "Angel");

/////challenges

/*
let light = light;
if (light === "green"){
    console.log("go");
}
else if(light === "yellow"){
    console.log("caution");
}
else (light === "red"){
    console.log("stop");
}

let kristyLacI = false;
let baoLacI = false;

if(kristyLacI === true && baoLacI == true){
    console.log("almond milk")
}
else if (kristyLacI === true || baoLacI == true){
    console.log("both");
}
else{
    console.log("milk");
}

let temp = 67;
if(temp < 68){
    console.log("cold");
}
else if (temp >= 68 && temp <= 72){
    console.log("perfect");
}
else if (temp > 72 && temp <= 76){
    console.log("warm");
}
else{
    console.log("hot");
}
*/

/////functions
/*function test() {
    console.log("TEST");
}
test(); */

/*
function argument (name1, name2){
    console.log(name1, name2);
}
argument("val", "eric");
*/

/*
const hello = function(){
    alert("hello");
};
const bye = function(){
    alert("bye");
};

const beatles = function(){
    hello();
    bye();
    hello();
    bye();
};
beatles();
*/

/////scope

/*
const name = "michael y";
function makeFunc(){
    const name = "sarah";
    function displayName(){
        console.log(name);
    }
    displayName();
}

makeFunc();
*/

/*
function makeFunc(){
    const name = "sun";
    function displayName(){
        alert(name);
    }
return displayName;
}

const myFunc = makeFunc();
myFunc();
*/

/*
/////arrays
const names = [
    "Diego", 
    "Frid", 
    "Christian", 
    "Valerie", 
    "Haoran", 
    "Brian", 
    "Caroline"];
//names.push("Caroline");
names.forEach(el => console.log(el));
/*name.filter();
*/

/////spread operator
/*
const numbers = [1, 2, 3];

const add = function(x, y, z){
    return x + y + z;    
};
console.log(add(...numbers));
*/

/////challenge1
let students = ["Riya". "Omor", "Alan", "Jaiyu", "Michael", "Lisa", "Richard"];
let min = 5;
if(min < 5)
    console.log("filter");
students.filter();


/////challenge2
let students = ["Riya". "Omor", "Alan", "Jaiyu", "Michael", "Lisa", "Richard"];
const students = "Junshen";

let funny = ["Alan", "Savva"];
students.push("Alan" + "Savva");
