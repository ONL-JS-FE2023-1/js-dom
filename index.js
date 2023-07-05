const user = {
    firstName: 'John',
    lastName: 'Doe',
    avatar: '',
    age: 65,
    footSize: 46,
    address: {
        street: 'Honcharenko',
        house: 64
    },
    sayHello: function() { // function will be ignored
        console.log('Hello!')
    }
    // крім цього, будуть ігноруватись Symbol() та undefined
}

const helloTimeoutId = setTimeout(function() {alert('Hello user!')}, 2000);
clearTimeout(helloTimeoutId); // task 1


// task 2

const myObject = {
    numberValue: 123,
    stringValue: 'Hello',
    nullValue: null,
    objectValue: { nestedProperty: 'Nested' },
    functionValue: () => { // при перетворенні в JSON, функція буде проігнорована
        console.log('Hello from function')
    },
    undefinedValue: undefined, // undefined буде проігнорований
    symbolValue: Symbol('mySymbol'), // symbol буде проігнорований
    arrayValue: [1, 2, 3]
}

// Перетворення об'єкта на JSON
const jsonString = JSON.stringify(myObject);

// Перетворення JSON на об'єкт JS
const parsedObject = JSON.parse(jsonString);