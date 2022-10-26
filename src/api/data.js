module.exports = () => {
    const {
        defineData,
        arrayGenerator,
        valueGenerator,
        casual,
    } = require("./generators.js");

    const elementForContactList = {
        email: (start) => valueGenerator(start, "email"),
        phone: (start) => valueGenerator(start, "phone"),
        name: (start) => valueGenerator(start, "full_name"),
        id: (start) => valueGenerator(start, "id"),
    };

    const contactsData = arrayGenerator(elementForContactList, 20);

    const usersData = [{
        email: "user@email.com",
        password: "YQnq8Xz5CvXYNu6O2LO",
        firstname: "Maria",
        lastname: "Yarkina",
        id: casual.uuid,
    }, ];

    defineData("users", usersData);
    defineData("contacts", contactsData);

    const users = casual.users;
    const contacts = casual.contacts;
    return { users, contacts };
};