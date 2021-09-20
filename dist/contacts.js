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
const fs = require('fs/promises');
const path = require('path');
const PATH = path.join(__dirname, '..', 'db', 'db.json');
const listContacts = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fs.readFile(PATH);
    const contacts = JSON.parse(data);
    return contacts;
});
const getContactById = (contactId) => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield listContacts();
    const index = contacts.findIndex(i => i.id === contactId);
    if (index === -1)
        return null;
    return contacts[index];
});
const removeContact = (contactId) => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield listContacts();
    const index = contacts.findIndex(i => i.id === contactId);
    if (index === -1)
        return null;
    const deletedContact = JSON.stringify(contacts[index], null, 2);
    contacts.splice(index, 1);
    yield fs.writeFile(PATH, JSON.stringify(contacts));
    return `The contact  ${deletedContact} was delete`;
});
const addContact = (name, email, phone) => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield listContacts();
    const maxId = Math.max(...contacts.map(i => i.id));
    const contact = { id: maxId + 1, name, email, phone };
    const newContactList = [...contacts, contact];
    yield fs.writeFile(PATH, JSON.stringify(newContactList));
    return `The contact  ${JSON.stringify(contact, null, 2)} was added`;
});
module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};
