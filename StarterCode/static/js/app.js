// from data.js
// create a variable for table of data
var tableData = data;
// create a variable for table of HTML

var tbody = d3.select("tbody");
var submit = d3.select("#filter-btn");


var date = tableData.map(occurence => occurence.datetime);


function populateTable(occurences) {
    occurences.forEach((occurence) => {
        var row = tbody.append("tr");
        Object.entries(occurence).forEach( ([key, value]) => {
            row.append("td").text(value);
        });
    });}


populateTable(tableData);


submit.on("click", handleClick);

function handleClick (event) {
    d3.event.preventDefault();

    var userDate = d3.select("#datetime").property("value");

    tbody.html("");

    var filteredData = tableData.filter( occurence => occurence.datetime === userDate);

    populateTable(filteredData);
}






