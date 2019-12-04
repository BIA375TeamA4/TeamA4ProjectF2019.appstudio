

/*CREATE A NEW ENTRY*/

newEntry.onshow=function(){

let sampleUser = localStorage.getItem("username")
let query10 = "SELECT item.name FROM item JOIN user ON item.user_id = user.user_id WHERE user.username = " + '"' + sampleUser + '"'
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=375groupa4&query=" + query10)

if (req1.status == 200) { 
        results = JSON.parse(req1.responseText)
        console.log(results)
        dpdnSelectItem1.clear()
        for (i = 0; i <= results.length - 1; i++)
        dpdnSelectItem1.addItem(results[i])
}
}

dpdnSelectItem1.onclick=function(s){
  if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    drpBestMajor.value = s   // make dropdown show choice user made
    NSB.MsgBox("s is " + s + " and .selection is " + drpBestMajor.selection)
  }
}



/*
btnSubmitNewEntry.onclick=function(){
    // MUST HAVE ITEM ID INDICATOR!!
    let createNewEntryDescription = inptNewEntryDescription.value
    let blankValueNewEntry = ""
  
  if (createNewEntryDescription != blankValueNewEntry) {
    ChangeForm(entries)
  } else
    lblSubmitAllEntryInfo.value = "New entries must have content"

}

btnCancelNewEntry.onclick=function(){
  ChangeForm(entries)
}


/* STILL MUST SUBMIT INPUTS TO DATABASE */
