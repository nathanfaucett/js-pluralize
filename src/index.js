var inflections = require("@nathanfaucett/inflections");


module.exports = pluralize;


function pluralize(string, locale) {
    return inflections(locale).pluralize(string);
}
