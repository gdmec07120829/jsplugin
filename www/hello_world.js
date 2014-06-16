var HelloWorld = function() {};  
  
HelloWorld.prototype.say = function() {  
    alert("Hello World");  
};  
  
var helloWorld = new HelloWorld();  
module.exports = helloWorld;  
