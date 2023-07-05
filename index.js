// Копії бувають: глибокі та поверхневі

const originalObject = {
    users: [
        {
            name: 'John',
            age: 45
        }
    ]
}

// const shallowCopy = { ...originalObject }
const deepCopy = JSON.parse(JSON.stringify(originalObject));