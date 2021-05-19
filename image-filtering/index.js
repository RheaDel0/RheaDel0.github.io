// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here

applyFilterNoBackground(reddify);
applyFilterNoBackground(decreaseBlue);
applyFilterNoBackground(increaseGreenByBlue);


    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////
function filterFunction() {
    
}
// TODO 1 & 3: Create the applyFilter function here
function applyFilter (filterFunction) { 
    for (var i = 0; i < image.length; i++)  {
  
    for (var j = 0; j < image[i].length; j++) {
        var rgbString = image[i][j]
        var rgbNumbers = rgbStringToArray(rgbString)
        filterFunction(rgbNumbers);
        var rgbString = rgbStringToArray(rgbNumbers)
        image[i][j] = rgbString
    }
}
}

// TODO 5: Create the applyFilterNoBackground function
 function applyFilterNoBackground (filterFunction) { 
     var background = image[0][0]
    for (var i = 0; i < image.length; i++)  {
   
    for (var j = 0; j < image[i].length; j++) {
        var rgbString = image[i][j]
        var rgbNumbers = rgbStringToArray(rgbString)
        if (image[i][j] === background) {
            rgbString = rgbArrayToString(rgbNumbers);
            image[i][j] = rgbString
        }
        else {
            filterFunction(rgbNumbers);
        rgbString = rgbArrayToString(rgbNumbers)
        image[i][j] = rgbString
        
        }
    }
} 
 }
// TODO 2 & 4: Create filter functions
function reddify (array) {
array[RED] = 225;
}
function decreaseBlue (array) {
    Math.max (0, array[BLUE] = array[BLUE] - 30);
}
function increaseGreenByBlue (array) {
    Math.min (0, array[GREEN] = array[BLUE] + array[BLUE]);
}

// CHALLENGE code goes below 
