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

	const userData = {
		email: casual.email,
		firstname: casual.first_name,
		lastname: casual.last_name,
		password: casual.password,
		userId: casual.uuid,
	};

	defineData("user", userData);
	defineData("contacts", contactsData);

	const user = casual.user;
	const contacts = casual.contacts;
	return { user, contacts };
};
