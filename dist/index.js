"use strict";
//  Typescript tutorial
/*
    Various data types in typescript
        1.  any         -   Store any type of data eg. number, string, boolean...
        2.  number      -   Store numerical values eg. 1, 2.5, -112...
        3.  string      -   Store string values eg. "hello", 'a', `Nice`...
        4.  boolean     -   Store boolean values eg. true, false
        5   void        -   to mention a function which do not return any value
        6.  null        -   absence of value
        7.  undefined   -   uninitialized values
*/
{
    //  1.  any
    let anyType = "any kind of value";
    //  2.  number
    let numberType = -80;
    //  3.  string
    let stringType = "This is a string type";
    //  4.  boolean
    let booleanType = true;
    //  5.  void
    function voidType() { console.log("This is void type"); }
    {
        console.log("anyType: " + anyType);
        console.log("numberType: " + numberType);
        console.log("stringType: " + stringType);
        console.log("booleanType: " + booleanType);
        voidType();
    }
}
//  Type assertion in typeScript
{
    let str1 = '10';
    let str2 = str1;
}
// Functions in typeScript
{
    // Basic Hello World function
    function myFunction(name, age) {
        if (age != undefined) {
            console.log(`Hello world, my name is ${name}, I am ${age} years old!`);
        }
        else {
            console.log(`Hello world, my name is ${name}!`);
        }
    }
    // Rest parameters
    function sum(...numArray) {
        let i;
        let sum = 0;
        for (i = 0; i < numArray.length; i++) {
            sum += numArray[i];
        }
        return sum;
    }
    {
        myFunction("Smit");
        myFunction("Smit", 22);
        console.log("Sum of numbers: " + sum(1, 2, 4, 78));
        console.log("Sum of numbers: " + sum(1, 2, 4, 7, 5, 7, 9, 2, 3, 7, 9, 8));
    }
}
