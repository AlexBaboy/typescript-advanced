class Person {
    constructor(private name: string) {}
}

const al = new Person('Alex')

// demo comment
/*const btn: Element = document.querySelector('#btn')!

if(btn)
    btn.addEventListener('click', ()=> {
        console.log('Btn clicked')
    })*/

// ==============

let anyFlag

const globalVar = 'message'

function logInfo(data: string, _?: number) {
    //const message = 'string'
    console.log(data)
    anyFlag = true
    console.log(anyFlag)
}

logInfo('log string')

function multiple(a: number, b: number) {
    if(a && b)
        return a*b

    return
}