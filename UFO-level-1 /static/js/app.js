// from data.js
var tableData = data;

// define variables
var tbody = d3.select("tbody");


// construct table
function UFOsighting(data){
    //clears out existing data
    tbody.html("");
    //for loop 
    data.forEach((dataRow)=> {
        //append rows to the body (tr= table row)
        let row = tbody.append("tr");
        //loop through each data row and adds a value
        //to each table cell ("tc")
        Object.values(dataRow).forEach((val)=> {
            let cell = row.append("td");
                cell.text(val);
            }
        );
    });
}
//declare fuction name
function handleClick(){
    //grab date/time value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData; 
    //check to see if date was entered
    if (date){
        //applies filter
        filteredData = filteredData.filter(row=> row.datetime=== date);
    }
    UFOsighting(filteredData);
}

//attach an event to listen to the form button
d3.selectAll("#filter-btn").on("click",handleClick);

//builds table when webpage loads
UFOsighting(tableData);