// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function(){
    it('is it a function that is called', function(){
        expect(typeof sayHello).toBe("function");
    });
    it("should never return an 'undefined' as a result", function(){
        expect(sayHello()).not.toBe(undefined);
    });
    it("is it a string that it outputs", function(){
        expect(typeof sayHello()).toBe("string");
    })
    it("does actual output match expected output", function(){
        expect(sayHello("Jane")).toBe("Hello Jane.");
    })
    it("does actual output match expected output", function(){
        expect(sayHello("Alex")).toBe("Hello Alex.");
    })
    it("does actual output match expected output", function(){
        expect(sayHello("Pat")).toBe("Hello Pat.");
    })
});