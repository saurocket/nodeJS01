import {DBTypes} from "./typs/dbTypes";

const fs = require('fs/promises')
const path = require('path')

const PATH = path.join(__dirname, '..', 'db', 'db.json')


const listContacts = async (): Promise<Array<DBTypes>> => {
    const data = await fs.readFile(PATH)
    const contacts: Array<DBTypes> = JSON.parse(data)
    return contacts
}

const getContactById = async (contactId: number): Promise<DBTypes | null> => {
    const contacts = await listContacts()
    const index = contacts.findIndex(i => i.id === contactId)
    if (index === -1) return null
    return contacts[index]
}

const removeContact = async (contactId: number): Promise<string | null> => {
    const contacts = await listContacts()
    const index = contacts.findIndex(i => i.id === contactId)
    if (index === -1) return null
    const deletedContact = JSON.stringify(contacts[index], null, 2)
        contacts.splice(index, 1)
    await fs.writeFile(PATH, JSON.stringify(contacts))
    return `The contact  ${deletedContact} was delete`
}
const addContact = async (name: string, email: string, phone: string): Promise<string> => {
    const contacts = await listContacts()
    const maxId = Math.max(...contacts.map(i => i.id))
    const contact: DBTypes = {id: maxId + 1, name, email, phone}
    const newContactList = [...contacts, contact]
    await fs.writeFile(PATH, JSON.stringify(newContactList))
    return `The contact  ${JSON.stringify(contact, null, 2)} was added`
}
module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}