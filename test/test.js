var assert = require("assert"),
    inflections = require("inflections"),
    pluralize = require("../src/index");


describe("pluralize(string : String, locale : String)", function() {
    it("should pluralize string", function() {
        var en = inflections("en");

        en.plural(/$/, "s");
        en.plural(/(ch|sh|ss|[sxz])$/i, "$1es");
        en.plural(/([^aeiouy])y$/i, "$1ies");

        assert.equal(pluralize("word"), "words");
        assert.equal(pluralize("sky"), "skies");
        assert.equal(pluralize("box"), "boxes");
    });
});
