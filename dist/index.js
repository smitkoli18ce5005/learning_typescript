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
        8.  arrays      -   Collection of items of same type
        9.  tuples      -   Collection of items of different type
        10. union       -   Allows to store values of two or more types
        11. objects     -   Stores data in key value pairs
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
    //  8.  arrays
    let arrayType = [1, 2, 4, 5, 6, 7];
    //  9.  tuples
    let tupleType = [1, "smit"];
    //  10. union
    let unionType = '1';
    //  11. objects
    let objectType = {
        name: "Smit",
        age: 22
    };
    let person1 = {
        name: "Smit",
        age: 22
    };
    {
        console.log("anyType: " + anyType);
        console.log("numberType: " + numberType);
        console.log("stringType: " + stringType);
        voidType();
        console.log("arrayType: " + arrayType);
        console.log("tupleType: " + tupleType);
        console.log("unionType: " + unionType);
        console.log(objectType);
        console.log(person1);
    }
}
//  Type assertion in typeScript
{
    let str1 = '10';
    let str2 = str1;
}
// Functions in typeScript
{
    //  Basic Hello World function
    function myFunction(name, age) {
        if (age != undefined) {
            console.log(`Hello world, my name is ${name}, I am ${age} years old!`);
        }
        else {
            console.log(`Hello world, my name is ${name}!`);
        }
    }
    //  Rest parameters
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
/*
    Object Types in typeScript
        1.  Number object
        2.  String object
        3.  Array object
*/
{
    //  1.  Number Object
    let num = Number.MIN_VALUE;
    //  2.  String object
    let str = new String("This is String object");
    //  3.  Array object
    let array = new Array(10);
}
// Interface in typeScript
{
    // initialize interface
    let person1 = {
        name: "smit",
        age: 22,
        display: () => { return "Hello interface"; }
    };
    {
        console.log(person1.name);
        console.log(person1.age);
        console.log(person1.display());
    }
}
// Classes in typeScript
{
    // declare class
    class Person {
        //constructor
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        //methods
        display() { return "Hello class"; }
    }
    // initialize class
    let person1 = new Person("Smit", 22);
    {
        console.log(person1.name);
        console.log(person1.age);
        console.log(person1.display());
    }
}
