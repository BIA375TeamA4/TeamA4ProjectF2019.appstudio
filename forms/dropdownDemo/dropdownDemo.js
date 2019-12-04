
let flavors = ["Acai Berry","Almond","Amaretto","Anise","Apple","Apricot","Banana",
"Bacon","Bavarian Cream","Berry Cola","Birch Beer","Black Licorice","Black Cherry",
"Black Currant","Black Walnut","Blackberry","Blue Raspberry",
"Blueberry","Bourbon","Bubble Gum","Butter","Butter Almond",
"Butter Milk","Butter Pecan","Butter Rum","Butter Toffee","Butterscotch"]

// populate the flavors dropdown at runtime when form loads/is shown
// using the flavors array
dropdownDemo.onshow=function(){
    drpBestFlavor.clear()   
  for (i = 0; i <= flavors.length - 1; i++) 
    drpBestFlavor.addItem(flavors[i])
}

// see what user clicked on in the majors dropdown
// notice I added an 's' parameter to the function (holds the chosen text)
drpBestMajor.onclick=function(s){
  if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    drpBestMajor.value = s   // make dropdown show choice user made
    NSB.MsgBox("s is " + s + " and .selection is " + drpBestMajor.selection)
  }
}

// clear out the dropbox choices and reset title to 'Worst Major'
btnClearDropdown.onclick=function(){
    drpBestMajor.clear()
    drpBestMajor.value = "Worst Major"
}


