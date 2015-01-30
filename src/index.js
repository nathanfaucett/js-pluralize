var inflections = require("inflections");


module.exports = function pluralize(string, locale) {
    return inflections(locale).pluralize(string);
};
