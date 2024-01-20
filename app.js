// chap no 31 to 34 [DATE AND TIME]
// q no 1
// var dobj = new Date ();
// console.log(dobj);

// q no 2
// var dStr = new Date ().toString();
// console.log(typeof dStr);

// q no 3
// var d = new Date ();
// var day = d.getDay();
// console.log(day);

// // q no 4
// var d = new Date();
// var arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var todayIndexNumber = d.getDay();
// alert(arr[todayIndexNumber] + todayIndexNumber)

// q no 5

// var currentDate = new Date();

// var year = currentDate.getFullYear();
// var month = currentDate.getMonth() + 1;
// var day = currentDate.getDate();
// var dayOfWeek = currentDate.getDay(); 
// var hours = currentDate.getHours();
// var minutes = currentDate.getMinutes();
// var seconds = currentDate.getSeconds();
// var milliSeconds = currentDate.getMilliseconds();

// console.log("Year: " + year);
// console.log("Month: " + month);
// console.log("Date: " + day);
// console.log("Day of the Week: " + dayOfWeek);
// console.log("Hours: " + hours);
// console.log("Minutes: " + minutes);
// console.log("Seconds: " + seconds);
// console.log("Milli Seconds: "+ milliSeconds);

// q no 6
// var currentDate = new Date ("12-14-2020");
// var reqDate = currentDate;
// console.log(reqDate);

// q no 7
// var currentDate = new Date("02-02-1992");
// var task = currentDate;
// console.log(task);

// q no 08
// alert(new Date("01-01-1980").getTime());

// q no 09
// var myDay = new Date("07-07-2005");
// myDay.setFullYear("2023");
// console.log(myDay);

// q no 10
// ans of q no 10
// var date = new Date("07-07-2005");
// date.setMonth(0);
// console.log(date);


// for function method
// ans of q no 10

// function anas(a){
//     var modifiedDate = new Date(a);
//     modifiedDate.setMonth(0);
//     return modifiedDate;
// }
// var originalDate = new Date ("07-07-2005");
// var changeDate = anas(originalDate);
// console.log(changeDate);


// for practice

// function setMonthToJanuary(inputDate) {
// var modifiedDate = new Date(inputDate);
//     modifiedDate.setMonth(0);
//     return modifiedDate; 
// }
// var originalDate = new Date("2022-05-15");
// var modifiedDate = setMonthToJanuary(originalDate);
// console.log("Modified Date:", modifiedDate);


// practice
// function setMonthToJanuary(inputDate) {
//     var modifiedDate = new Date(inputDate);
//     modifiedDate.setMonth(0);
//     return modifiedDate;
//   }
//   var modifiedDateWithoutInput = setMonthToJanuary();
//   console.log("Modified Date Without Input:", modifiedDateWithoutInput);


// q no 11
// we can't change the day for a specific date;


// // with the help of this function we can change the date not the day cuz day is automatically fixed


// function changeTheDate (date, day){
//     var changeDate = new Date(date);
//     changeDate.setDate(day);
//     return changeDate;
// }
// var originalDate = new Date("07-07-2005");
// var changeDate = changeTheDate(originalDate, 20);
// console.log(changeDate);


// q no 12
// var a = +prompt("Enter The Specific Minutes??")

// function abc (inputTime){
//     var time = new Date(inputTime);
//     time.setMinutes(a);
//     return time;
// }
// var originalTime = new Date (2005,6,7,13,a,59);
// var changeTime = abc(originalTime);
// console.log(changeTime);

// q no 13
// function addHoursToTime(inputTime, hoursToAdd) {
//     var modifiedTime = new Date(inputTime);
//     modifiedTime.setHours(modifiedTime.getHours() + hoursToAdd);
//     return modifiedTime;
// }
// var originalTime = new Date("2005-07-07T12:30:00");
// var modifiedTime = addHoursToTime(originalTime, 3);

// console.log("Original Time:", originalTime);
// console.log("Modified Time (After Adding 3 Hours):", modifiedTime);

// q no 14\
// function test(a) {
//     var age = new Date();
//     var userAge = new Date(a)
//     console.log(age)
//     console.log(userAge)
//     // var calcAge;
//     // console.log(calcAge=Number(a)-age);
//     console.log(age.getFullYear()-userAge.getFullYear())
//     // console.log(userAge.getFullYear())

// }
// // test('01-1-2001')
// // test("02-14-2008")
// test("07-07-2005")


// chapter end 
// Chapter 35 - 37 (Functions)

// q no 1
// function displayAlert() {
//     alert("Hello World!!");
// }
// displayAlert();

// // q no 2
// function askName(){
//     var userName = prompt("Enter your name");
//     console.log(userName);
// }
// askName();

// q no 3
// function topFunction(){
//     console.log("this is main function");
//     functionOne ();
//     functionTwo();
// }
// function functionOne(){
//     console.log("this is function 1");
// }
// function functionTwo(){
//     console.log("this is function 2");
// }
// topFunction();

// q no 3\
// function abc (){
//     var userName = prompt("Enter the Name");
//     alert(userName);
// }
// abc();

// q  no 5
// function concat (a,b,c){
//     var variableValue = 2005;
//     var stringValue = "ANAS";
//     var numberValue = 7;
//     concat(variableValue, stringValue, numberValue);
// }
///// IF U WANT TO SEE  THE ANSWER IN CONSOLE////////
// function concat(a, b, c) {
//     console.log("Parameter a:", a);
//     console.log("Parameter b:", b);
//     console.log("Parameter c:", c);
// }
// var variableValue = 42;
// var stringValue = "Anas";
// var numberValue = 7;
// concat(variableValue, stringValue, numberValue);
 

// q no 6
///// MY METHOD////
// function abc (y, z){
//     console.log(y);
//     console.log(z);
// }
// var a = "Hello";
// var b = "World";
// var c = a +" "+ b;
// abc (a, b);
// console.log(c);

///////CHAT GPT METHOD//////
// function concatenateAndAssign(param1, param2) {
//     var result = param1 + param2;
//     return result;
// }
// var value1 = "Hello";
// var value2 = "World";
// var concatenatedResult = concatenateAndAssign(value1, value2);
// console.log(concatenatedResult);

// Q NO 7
// function multiply(parameter1, parameter2, parameter3) {
//     var result = parameter1 * parameter2 * parameter3;
//     return result;
// }
// var value1 = 2;
// var value2 = 3;
// var value3 = 4;
// var multipliedResult = multiply(value1, value2, value3);
// console.log(multipliedResult);

// q no 08
