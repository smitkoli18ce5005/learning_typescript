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
    let anyType: any = "any kind of value"
    //  2.  number
    let numberType: number = -80
    //  3.  string
    let stringType: string = "This is a string type"
    //  4.  boolean
    let booleanType: boolean = true
    //  5.  void
    function voidType(): void {console.log("This is void type")}
    
    {
        console.log("anyType: " +anyType)
        console.log("numberType: " +numberType)
        console.log("stringType: " +stringType)
        console.log("booleanType: " +booleanType)
        voidType()
    }
}

//  Type assertion in typeScript
{
    let str1 = '10'
    let str2: number = <number> <any> str1
}