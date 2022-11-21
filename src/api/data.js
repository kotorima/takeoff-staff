module.exports = function() {
    const generators = require("./generators");
    const readyUserId = 1221;

    const elementForContactList = {
        email: (start) => generators.valueGenerator(start, "email"),
        phone: (start) => generators.valueGenerator(start, "phone"),
        name: (start) => generators.valueGenerator(start, "full_name"),
        id: (start) => generators.valueGenerator(start, "id"),
    };

    const contactsList = generators.arrayGenerator(elementForContactList, 20);

    const usersData = [{
        email: "useremail@gmail.com",
        password: "$2a$10$wr978e3ROCBILuShV0gxy.UrYIisM3NIcs1ifnxaV2kC0pkSpeGSC", //bestPassw0rd
        firstname: "Maria",
        id: readyUserId,
        lastname: "Yarkina",
    }, ];

    generators.defineData("users", usersData);
    generators.defineData("contacts", contactsList);

    const users = generators.casual.users;
    const contacts = generators.casual.contacts;
    return { users, contacts };
};