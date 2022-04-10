/*import the json data and iterate through array of objects*/
var data = require("./data.json");
for (i in data) {
    data[i].Name = "Melvin";
}