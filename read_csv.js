var output;

window.onload = function() {
  //Watch for changes to the input field
  fileInput.addEventListener('change', function(e) {
    //Get the filename from input field
    var file = fileInput.files[0];
    //Initialize new FileReader
    var reader = new FileReader();

    reader.onload = function(e) {
      //Set field in HTML to the data read in
      fileOutput.innerText = reader.result;
      output = reader.result;
    }
    //Read in the file as plain text
    reader.readAsText(file);
  });
}
