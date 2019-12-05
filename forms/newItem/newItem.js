btnSubmitNewItem.onclick=function(){
    let createNewItemName = inptNewItemName.value
    let createNewItemLocation = inptNewItemLocation.value
    let createNewItemDescription = inptNewItemDescription.value
    let createNewItemDate = inptNewItemDate.value
    let blankValueNewItem = ""
    let queryItem1 = "INSERT into item (name, location, description, date, user_id) values (" + "'"+ createNewItemName + "', '" + createNewItemLocation + "', '" + createNewItemDescription + "', '" + createNewItemDate + "', '" + localStorage.getItem("userID") + "');"
  
    if (createNewItemName != blankValueNewItem && createNewItemLocation != blankValueNewItem) {
        req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=375groupa4&query=" + queryItem1)
        if (req1.status == 200) { 
            results = JSON.parse(req1.responseText)
            console.log(results)
            ChangeForm(myList)
          }
    } else
      lblSubmitAllItemInfo.value = "Name and/or location fields cannot be empty"
}
  

  
btnCancelNewItem.onclick=function(){
  ChangeForm(myList)
}