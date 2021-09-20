import {program} from 'commander'
import {ActionTypes, ArgsType} from "./typs/ActionTypes";

const {listContacts, getContactById, removeContact, addContact} = require('./contacts')


program
    .option("-a, --action <type>", "action type")
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option('-p, --phone <type>', 'user phone')

program.parse(process.argv)
const options = program.opts();

(()=>{
const {action, id, name, email, phone}  = options
    const invokeAction = (action: ActionTypes, id?: number, name?: string, email?: string, phone?: string): void => {
        switch (action) {
            case "list": {
                (async () => {
                    try {
                        const contacts = await listContacts()
                        console.log(contacts)
                    } catch (e) {
                        throw e
                    }
                })()
                break
            }
            case "get": {
                (async () => {
                    try {
                        if (!id) throw new Error('Please, enter ID')

                        const note = await getContactById(id)

                        if (!note) {
                            throw new Error(`Contact with id - ${id} is not found`)
                        }
                        console.log(note)
                    } catch (e) {
                        throw e
                    }
                })()
                break
            }
            case "remove": {
                (async () => {
                    try {
                        if (!id) throw new Error('Please, enter ID')
                        const message = await removeContact(id)
                        if (!message) {
                            throw new Error(`The contact with id - ${id} is not found`)
                        }
                        console.log(message)
                    } catch (e) {
                        throw e
                    }
                })()
                break
            }
            case "add": {
                (async () => {
                    try {
                        if (!name && !email && !phone) throw new Error('Please, enter (name, email and phone)')
                        const message = await addContact(name,email,phone)
                        console.log(message)
                    } catch (e) {
                        throw e
                    }
                })()
                break
            }
        }
    }
    invokeAction(action,+id,name,email,phone)
})()







// invokeAction("get", 10)
// invokeAction("remove", 2)
// invokeAction("add", 0, 'Philips', 'ssss@ssss.by', '5456546546')

// const invokeAction = (action: ActionTypes, id?: number, name?: string, email?: string, phone?: string): void => {
//     switch (action) {
//         case "list": {
//             (async () => {
//                 try {
//                     const contacts = await listContacts()
//                     console.log(contacts)
//                 } catch (e) {
//                     throw e
//                 }
//             })()
//             break
//         }
//         case "get": {
//             (async () => {
//                 try {
//                     if (!id) throw new Error('Please, enter ID')
//
//                     const note = await getContactById(id)
//
//                     if (!note) {
//                         throw new Error(`Contact with id - ${id} is not found`)
//                     }
//                     console.log(note)
//                 } catch (e) {
//                     throw e
//                 }
//             })()
//             break
//         }
//         case "remove": {
//             (async () => {
//                 try {
//                     if (!id) throw new Error('Please, enter ID')
//                     const message = await removeContact(id)
//                     if (!message) {
//                         throw new Error(`The contact with id - ${id} is not found`)
//                     }
//                     console.log(message)
//                 } catch (e) {
//                     throw e
//                 }
//             })()
//             break
//         }
//         case "add": {
//             (async () => {
//                 try {
//                     if (!name && !email && !phone) throw new Error('Please, enter (name, email and phone)')
//                     const message = await addContact(name,email,phone)
//                     console.log(message)
//                 } catch (e) {
//                     throw e
//                 }
//             })()
//             break
//         }
//     }
// }