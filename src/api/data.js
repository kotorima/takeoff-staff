module.exports = () => {
	const casual = require("casual");

	const defineData = (name, data) => casual.define(name, () => data);

	const arrayGenerator = (fields, number) => {
		const length = number || casual.integer(0, 100);
		const result = [];

		for (let i = 0; i < length; ++i) {
			let obj = {};
			fields.map((item) => (obj[item] = casual[item]));
			obj.id = casual.integer(0, 1000);
			result.push(obj);
		}

		return result;
	};

	const userData = {
		email: casual.email,
		firstname: casual.first_name,
		lastname: casual.last_name,
		password: casual.password,
		userId: casual.uuid,
	};

	const fieldsForContact = ["name", "email", "phone"];
	const contactsData = arrayGenerator(fieldsForContact, 20);

	defineData("user", userData);
	defineData("contacts", contactsData);

	const user = casual.user;
	const contacts = casual.contacts;
	return { user, contacts };
};
