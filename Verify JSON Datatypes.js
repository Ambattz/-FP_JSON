module.exports = function () {

    const data = require("./testdata.json");
    for (i in data.studentData) {
        data.studentData[i].aggregate = Number(data.studentData[i].aggregate);
        for (y in data.studentData[i].percentages) {
            data.studentData[i].percentages[y] = Number(data.studentData[i].percentages[y]);
        }
    }
    return studentData;