let anything : any;

anything = "Hello World";
(anything as string).toUpperCase(); // Type Assertion

anything = 10;
(anything as number).toFixed(2); // Type Assertion