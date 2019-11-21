btnSubmitNewItem.onclick=function(){
    let createNewItemName = inptNewItemName.value
    let createNewItemLocation = inptNewItemLocation.value
    let createNewItemDescription = inptNewItemDescription.value
    let createNewItemDate = inptNewItemDate.value
    let blankValueNewItem = ""
  
  if (createNewItemName != blankValueNewItem && createNewItemLocation != blankValueNewItem) {
    ChangeForm(myList)
  } else
    lblSubmitAllItemInfo.value = "Name and/or location fields empty"

}

btnCancelNewItem.onclick=function(){
  ChangeForm(myList)
}




/* STILL MUST SUBMIT INPUTS TO DATABASE */