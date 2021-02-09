// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(inString){
    if (typeof inString !== "string" ||  inString === "" || isNaN(Number(inString)) === false){
        inString = "World";

    }
    // if (string === undefined || string === true || string === false){
    //     string = "World";
    // }
  return "Hello " + inString + ".";
}