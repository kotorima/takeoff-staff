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
        email: "useremail@gmail.com",
        password: "$2a$10$wr978e3ROCBILuShV0gxy.UrYIisM3NIcs1ifnxaV2kC0pkSpeGSC", //bestPassw0rd
        firstname: "Maria",
        id: 1221,
        lastname: "Yarkina",
    }, ];

    defineData("users", usersData);
    defineData("contacts", contactsData);

    const users = casual.users;
    const contacts = casual.contacts;
    return { users, contacts };
};