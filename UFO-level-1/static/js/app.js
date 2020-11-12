// from data.js
// Changed var to const since the value will not change
const tableData = data;

// Connect directly to body of table
const tbody = d3.select("tbody");

// Filtering data using date
function clickFilter(){
    const date = d3.select("#datetime").property("value");
    if (date) {
        // Use filter to match the date to datetime from tableData
        filterInfo = tableData.filter(row => row.datetime === date);
    }
    // Clear table
    tbody.html("");
    // Add a row into the table
    filterInfo.forEach((tRow) => {
        const row = tbody.append("tr");
        // Input info into each table row
        Object.values(tRow).forEach((value) => {
            // Add a cell in each row
            let cell = row.append("td");
            cell.text(value);
        }
        );

    });
}
// The button id="filter-btn" in index.html triggers Use d3 to call funtion ClickFilter
d3.selectAll("#filter-btn").on("click", ClickFilter);