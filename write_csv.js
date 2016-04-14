var data = [
  [
    "name",
    "age",
    "color"
  ],
  [
    "Michael",
    "26",
    "Green"
  ]
];

function saveData() {
  //String holding the output data
  var csvContent = "data:text/csv;charset=utf-8,";
  data.forEach(function(element, index) {
    //Joins each element of the array as one comma-separated string
    dataString = element.join(",");
    //Append the line to the output data
    csvContent += dataString + "\n";
  });

  //Encode the file and allow user to save it
  var uri= encodeURI(csvContent);
  console.log(uri);
  window.open(uri);
}
