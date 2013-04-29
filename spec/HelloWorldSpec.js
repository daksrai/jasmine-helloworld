// describe("Hello world", function() {
// 	it("says hello", function() {
// 		expect(helloWorld()).toContain("world");
// 	});
// }); 

describe("Hello world", function() {
	beforeEach(function() {
		this.addMatchers({
			toBeDevisibleByTwo: function() {
				return (this.actual % 2) === 0;
			}
		});
	});

	it("says hello", function() {
		expect(helloWorld()).toContain("world"); // .toEqual("Hello world!")
	});

	it('is devisible by 2', function() {
		expect(gimmeANumber()).toBeDevisibleByTwo();
	});
});

describe("Person", function() {
	it("calls the sayHello() function", function() {
		var fakePerson = new Person();
		spyOn(fakePerson, "sayHello");
		fakePerson.helloSomeone("world");
		
		expect(fakePerson.sayHello).toHaveBeenCalled();
	});

	it("greets the world", function() {
		var fakePerson = new Person();
		spyOn(fakePerson, "helloSomeone");
		fakePerson.helloSomeone("world");

		expect(fakePerson.helloSomeone).toHaveBeenCalledWith("world");
		expect(fakePerson.helloSomeone).not.toHaveBeenCalledWith("foo");
	});
});