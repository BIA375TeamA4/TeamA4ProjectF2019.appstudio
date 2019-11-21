btnSubmitNewItem.onclick=function(){
    let createNewItemName = inptNewItemName.value
    let createNewItemLocation = inptNewItemLocation.value
    let createNewItemDescription = inptNewItemDescription.value
    let createNewItemDate = inptNewItemDate.value
    let blankValueNewItem = ""
  
  if (createNewItemName != blankValueNewItem && createNewItemLocation != blankValueNewItem) {
    ChangeForm(homePage)
  } else
    lblSubmitAllItemInfo.value = "Name and/or location fields empty"

}

btnCancelNewItem.onclick=function(){
  ChangeForm(homePage)
}




btnHome2.onclick=function(){
  ChangeForm(homePage)
}

btnMap2.onclick=function(){
  ChangeForm(map)
}

btnEntry2.onclick=function(){
  ChangeForm(entries)
}

btnProfile2.onclick=function(){
  ChangeForm(profilePage)
}

/* STILL MUST SUBMIT INPUTS TO DATABASE */