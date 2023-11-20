const fs = require('node:fs').promises;
const path = require('node:path');
const { nanoid } = require("nanoid");


const contactsPath = path.resolve("db", "contacts.json");

async function listContacts() {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data.toString());
}

async function getContactById(contactId) {
    const contacts = await listContacts();
    const result = contacts.find((item) => item.id === contactId);

    return result || null;
}

async function removeContact(contactId) {
    const contacts = await listContacts();
    const index = contacts.findIndex((el) => el.id === contactId);
    if (index === -1) return null;

    const removedContact = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    return removedContact;

}

async function addContact(name, email, phone) {
    const contacts = await listContacts();
    const newContact = {id: nanoid(), name, email, phone};
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
}


module.exports = {listContacts, getContactById, removeContact, addContact};