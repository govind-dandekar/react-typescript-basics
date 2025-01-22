// Primitives: numbers, strings, and booleans, 
// Complex types: arrays, objects
// Function types, parameters, et al

// Primitives -- lowercase for number and string primitives
let age: number = 24;

let userName: string;

userName='max'

let isInstructor: boolean;

isInstructor = true;

// more complex types -- arrays and objects
let hobbies: string[];

hobbies = ['Sports', 'Reading'];

// objects
let person: {
	name: string;
	age: number;
}; 

person = {
	name: 'max',
 	age: 32
}

// array of objects
let people: {
	name: string;
	age: number;
}[];

// type inference - ts infers type of course variable w/o explicit declaration
// if variable initialized with value, ts will use value type as inferred type
// type inference = best practice
// let course = 'React -- The Complete Guide';

// union types - string or number for a course assignment
// can add as many types as needed
let course: string | number = 'React - the complete guide';

course = 12345;






