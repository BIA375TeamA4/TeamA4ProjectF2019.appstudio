myList.onshow=function(){
    let queryItem1 = "SELECT user_id FROM user WHERE username = " + '"' + currentUser + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=375groupa4&query=" + queryItem1)
    userID = JSON.parse(req1.responseText)
    console.log(userID)
    localStorage.setItem("userID", userID)
}



btnCreateNewItem.onclick=function(){
  ChangeForm(newItem)
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

/* ADD CONTAINER TO DISPLAY ALL EXISTING ITEMS ON LIST */