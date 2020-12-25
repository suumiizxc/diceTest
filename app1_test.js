// calback function 

function hello() {
    console.log("Hello world");
    
}

function greet(aaa){
    aaa();
}

greet(hello);


// Anomonymus function 

function greet(aaa){
    aaa();
}

greet(function(){
    console.log("Hello anomonymus");
})