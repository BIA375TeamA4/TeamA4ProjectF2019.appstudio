

/*CREATE A NEW ENTRY*/

newEntry.onshow=function(){

let sampleUser = localStorage.getItem("username")
let query10 = "SELECT item.name FROM item JOIN user ON item.user_id = user.user_id WHERE user.username = " + '"' + sampleUser + '"'
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=375groupa4&query=" + query10)

if (req1.status == 200) { 
        results10 = JSON.parse(req1.responseText)
        console.log(results10)
        dpdnSelectItem1.clear()
        for (i = 0; i <= results10.length - 1; i++)
        dpdnSelectItem1.addItem(results10[i])
}
}

dpdnSelectItem1.onclick=function(selection){
  if (typeof(selection) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    txtJournal.show()
    dpdnSelectItem1.value = selection   // make dropdown show choice user made
    console.log("Your selection is " + selection)
    let query11 = "SELECT item_id FROM item WHERE name = " + '"' + selection + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=375groupa4&query=" + query11)
          if (req1.status == 200) {
              console.log(JSON.parse(req1.responseText) + " item_id is selected")
              localStorage.setItem("itemID", JSON.parse(req1.responseText))
          }
    }
}

btnSubmitNewEntry.onclick=function(){
      let description = txtJournal.value
      let blankValueNewEntry = ""
        if (txtJournal.value != blankValueNewEntry) {
            let query12 = "INSERT INTO entry (item_id, description) VALUES (" + "'"+ localStorage.getItem("itemID") + "', '" + description + "');"
            req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=375groupa4&query=" + query12)
                if (req1.status == 200) {
                    console.log(JSON.parse(req1.responseText) + "Inserted into database")
                }
            NSB.MsgBox("Your journal entry has been submitted")
            ChangeForm(entries)
            txtJournal.value = ""
            txtJournal.hide()
            dpdnSelectItem1.value = "Select item..."
  } else
    lblSubmitAllEntryInfo.value = "New entries must have content"
}

btnCancelNewEntry.onclick=function(){
  ChangeForm(entries)
}


/* STILL MUST SUBMIT INPUTS TO DATABASE */
