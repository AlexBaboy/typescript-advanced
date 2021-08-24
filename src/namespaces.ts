/// <reference path="form-namespace.ts" />

namespace MyForm {
    class MyForm {
        private type: FormType = 'inline'
        private state: FormState = 'active'

        constructor(public email: string) {
        }

        getInfo() {
            return {
                type: this.type,
                state: this.state
            }
        }
    }
export const myForm = new MyForm('test@mail.com')
}

console.log(MyForm.myForm)