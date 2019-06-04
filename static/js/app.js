// from data.js
var tableData = data;

// Use D3 to select the table
var table = d3.select('table');

// select the table body
var tbody = d3.select('tbody');

// console.log the UFO Sightings
//console.log(tableData);

// Loop through the UFO sightings data and console.log each sightings
// Create a table row for each sighting
tableData.forEach(sighting => {
    //console.log(sighting);
    var row = tbody.append('tr');

    Object.entries(sighting).forEach(([key, value]) => {
        //console.log(key,value);

        // append a cell to the row for each value
        // in the sightings dataset
        var cell = row.append('td');
        cell.text(value);
    });
});

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  console.log(filteredData);

  // filter table
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.indexOf(inputValue) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
});
