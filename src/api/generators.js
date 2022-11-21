const casual = require("casual");

function idGenerator(length, index) {
    const arr = casual.array_of_digits(length);
    return (
        casual.integer(0, 1000) + casual.integer(0, 1000) * arr[index] * (index + 2)
    );
}

function defineData(name, data) {
    return casual.define(name, () => data);
}

function valueGenerator(start, field) {
    if (start) return casual[field];
}

function arrayGenerator(element, number) {
    const length = number || casual.integer(0, 100);
    const result = [];

    for (let i = 0; i < length; ++i) {
        let obj = {};
        for (let key in element) {
            const val = key === "id" ? idGenerator(length, i) : element[key](true);
            obj[key] = val;
        }
        result.push(obj);
    }

    return result;
}

module.exports = {
    defineData,
    valueGenerator,
    arrayGenerator,
    casual,
};