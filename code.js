// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(string){
    var outputString = "";//for testing only as it will read undefined otherwise
    if (string === "Jane"){
        outputString = "Hello Jane.";
    }else if (string === "Alex"){
       outputString = "Hello Alex.";
    }
    return outputString;
}