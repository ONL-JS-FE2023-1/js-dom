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