"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const { listContacts, getContactById, removeContact, addContact } = require('./contacts');
commander_1.program
    .option("-a, --action <type>", "action type")
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option('-p, --phone <type>', 'user phone');
commander_1.program.parse(process.argv);
const options = commander_1.program.opts();
(() => {
    const { action, id, name, email, phone } = options;
    const invokeAction = (action, id, name, email, phone) => {
        switch (action) {
            case "list": {
                (() => __awaiter(void 0, void 0, void 0, function* () {
                    try {
                        const contacts = yield listContacts();
                        console.log(contacts);
                    }
                    catch (e) {
                        throw e;
                    }
                }))();
                break;
            }
            case "get": {
                (() => __awaiter(void 0, void 0, void 0, function* () {
                    try {
                        if (!id)
                            throw new Error('Please, enter ID');
                        const note = yield getContactById(id);
                        if (!note) {
                            throw new Error(`Contact with id - ${id} is not found`);
                        }
                        console.log(note);
                    }
                    catch (e) {
                        throw e;
                    }
                }))();
                break;
            }
            case "remove": {
                (() => __awaiter(void 0, void 0, void 0, function* () {
                    try {
                        if (!id)
                            throw new Error('Please, enter ID');
                        const message = yield removeContact(id);
                        if (!message) {
                            throw new Error(`The contact with id - ${id} is not found`);
                        }
                        console.log(message);
                    }
                    catch (e) {
                        throw e;
                    }
                }))();
                break;
            }
            case "add": {
                (() => __awaiter(void 0, void 0, void 0, function* () {
                    try {
                        if (!name && !email && !phone)
                            throw new Error('Please, enter (name, email and phone)');
                        const message = yield addContact(name, email, phone);
                        console.log(message);
                    }
                    catch (e) {
                        throw e;
                    }
                }))();
                break;
            }
        }
    };
    invokeAction(action, +id, name, email, phone);
})();
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
