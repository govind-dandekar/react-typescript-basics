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

// type aliases; not JS value.  is a type definition
type Person = {
	name: string;
	age: number;
}

// objects
let person: Person;

person = {
	name: 'max',
 	age: 32
}

// array of objects
let people: Person[];

// type inference - ts infers type of course variable w/o explicit declaration
// if variable initialized with value, ts will use value type as inferred type
// type inference = best practice
// let course = 'React -- The Complete Guide';

// union types - string or number for a course assignment
// can add as many types as needed
let course: string | number = 'React - the complete guide';

course = 12345;

// fx and types

function addition(a: number, b: number) {
	// returned value (number) is inferred
	return a + b;
};

function printOutput(value: any){
	console.log(value);
}

// generics: <T> are ts feature
// can use T type in function
// when fx called with generics, ts knows it should look
// at concrete argument types and will return numnber[], string[],
// et al.  T means type of array and value will be the SAME T type
function insertAtBeginning<T>(array: T[], value: T){
	const newArray = [value, ...array];
	// utility fx that returns new array
	return newArray;
}

const demoArray = [1, 2, 3];

// inferred to by any; ts will not infer numbers due to initial typing
// may need to use with string[]
// will not get string support even if a string array because
// assumed to be any[] (not string[])
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');















