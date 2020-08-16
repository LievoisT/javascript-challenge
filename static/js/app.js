// from data.js
var tableData = data;

// console.log(d3.select("form"));
// YOUR CODE HERE!
var form = d3.select("#form");
var formBtn = d3.select("#filter-btn");


form.on("submit", runFilter);
formBtn.on("click", runFilter);

function runFilter() {
    d3.event.preventDefault();

    var filterDate = d3.select("#datetime").node().value;

    console.log(filterDate);

    var tableData = data.filter(ufo => ufo.datetime === filterDate);

    var table = d3.select("tbody");

    tableData.forEach(function(ufo) {
        let row = table.append("tr");

        Object.entries(ufo).forEach(function([key, value]) {
            let cell = row.append("td");
            cell.text(value);
        });
    });
}




