// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(string){
    if (string === undefined || string === true || string === false){
        string = "World";
    }
  return "Hello " + string + ".";
}