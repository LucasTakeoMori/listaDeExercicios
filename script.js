// 01 - script that returns "Hello World"
const helloWorld = () => {
    return alert('Hello Word')
};

helloWorld()

// 02 - script that returns sum of two numbers
const sumTwoNumbers = () => {
    let a = 1
    let b = 2

    const result = a + b

    return alert(`${a} + ${b} = ${result}`)
}

sumTwoNumbers()

// 03 - script that returns type of variable is number or not
const checkTypeOfVariableIsNumber = () => {
    const array = [1, '1']

    array.map((item) => {
        if (typeof item === 'number') {
            return alert(`${item} é um número!`)
        }

        return alert(`'${item}' não é um número!`)
    })
}

checkTypeOfVariableIsNumber()

// 04 - script taht returns type of variable is string or not
const checkTypeofVariableIsString = () => {
    const array = [1, '1']

    array.map((item) => {
        if (typeof item === 'string') {
            return alert(`'${item}' é uma string!`)
        }

        return alert(`${item} não é uma string!`)
    })
}

checkTypeofVariableIsString()

//05 - script that returns type of variable is boolean or not
const checkTypeOfVariableIsBoolean = () => {
    const array = [1, true]

    array.map((item) => {
        if (typeof item === 'boolean') {
            return alert(`${item} é um boolean!`)
        }

        return alert(`${item} não é um boolean!`)
    })
}

checkTypeOfVariableIsBoolean()

// 06 - script that returns subtraction of two numbers
const subtractionTwoNumbers = () => {
    let a = 10
    let b = 20


    const result = a - b

    return alert(`${a} - ${b} = ${result}`)
}

subtractionTwoNumbers()

// 07 - script that returns multiplication of two numbers
const multiplicationTwoNumbers = () => {
    let a = 10
    let b = 20

    const result = a * b

    return alert(`${a} * ${b} = ${result}`)
}

multiplicationTwoNumbers()

// 08 - script that returns division of two numbers
const divisionTwoNumbers = () => {
    let a = 10
    let b = 20

    const result = a / b

    return alert(`${a} / ${b} = ${result}`)
}

divisionTwoNumbers()

// 09 - script that returns check number is even
const checkNumberIsEvenOrOdd = () => {
    let a = 10

    if (a % 2 === 0) {
        return alert(`${a} é um número par!`)
    } else {
        return alert(`${a} não é um número par!`)
    }
}

checkNumberIsEvenOrOdd()

// 10 - script that returns check number is odd
const checkNumberIsOddOrEven = () => {
    let a = 10

    if (a % 2 !== 0) {
        return alert(`${a} é um número impar!`)
    } else {
        return alert(`${a} não é um número impar!`)
    }
}

checkNumberIsOddOrEven()