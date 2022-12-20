module.exports = function() {
    const generators = require("./generators");
    const userId = 1221;

    const elementForContactList = {
        userId: userId,
        name: (start) => generators.valueGenerator(start, "full_name"),
        phone: (start) => generators.valueGenerator(start, "phone"),
        email: (start) => generators.valueGenerator(start, "email"),
        id: (start) => generators.valueGenerator(start, "id"),
    };

    const contactsList = generators.arrayGenerator(elementForContactList, 20);

    const usersData = [{
        email: "useremail@gmail.com",
        password: "$2a$10$wr978e3ROCBILuShV0gxy.UrYIisM3NIcs1ifnxaV2kC0pkSpeGSC", //bestPassw0rd
        firstname: "Maria",
        id: userId,
        lastname: "Yarkina",
    }, ];

    generators.defineData("users", usersData);
    generators.defineData("contacts", contactsList);

    const users = generators.casual.users;
    const contacts = generators.casual.contacts;

    return { users, contacts };
};