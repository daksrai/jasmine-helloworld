function helloWorld() {
	return "Hello world!"
}

function gimmeANumber() {
	return 20;
}

var Person = function() {};

Person.prototype.helloSomeone = function(toGreet) {
	return this.sayHello() + " " + toGreet;
};

Person.prototype.sayHello = function() {
	return "Hello";
};