pluralize
=======

pluralize words, uses global inflector from inflections @nathanfaucett/inflections

```javascript
var pluralize = require("@nathanfaucett/pluralize"),
    inflections = require("@nathanfaucett/inflections");


var en = inflections("en");

en.plural(/$/, "s");
en.plural(/(ch|sh|ss|[sxz])$/i, "$1es");
en.plural(/([^aeiouy])y$/i, "$1ies");

pluralize("word") === "words";
pluralize("sky") === "skies";
pluralize("box", "en") === "boxes";
```
