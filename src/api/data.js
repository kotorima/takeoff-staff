module.exports = function() {
    const generators = require("./generators");
    const userId = 1221;

    const elementForContactList = {
        email: (start) => generators.valueGenerator(start, "email"),
        phone: (start) => generators.valueGenerator(start, "phone"),
        name: (start) => generators.valueGenerator(start, "full_name"),
        id: (start) => generators.valueGenerator(start, "id"),
        userId: userId,
    };

    const contactsList = generators.arrayGenerator(elementForContactList, 20);

    const usersData = [{
        email: "useremail@gmail.com",
        password: "$2a$10$wr978e3ROCBILuShV0gxy.UrYIisM3NIcs1ifnxaV2kC0pkSpeGSC", //bestPassw0rd
        firstname: "Maria",
        id: userId,
        lastname: "Yarkina",
    }, ];

    const contactsData = contactsList;

    generators.defineData("users", usersData);
    generators.defineData("contacts", contactsData);

    const users = generators.casual.users;
    const contacts = generators.casual.contacts;

    return { users, contacts };
};