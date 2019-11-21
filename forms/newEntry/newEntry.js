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